// All your data goes here
const APP_DATA = {
    salesReps: [
        { id: 1, name: "Anika Nel" },
        { id: 2, name: "Chris McLaughlin" },
        { id: 3, name: "Darren Pillay" },
        { id: 4, name: "Mohammed Noor" },
        { id: 5, name: "Shahil Gajoo" },
        { id: 6, name: "Ozayr" }
    ],
    
    brands: [
        "ALEXANDER MCQUEEN", "Azzedine Alaia", "BOTTEGA VENETA", "BOUCHERON",
        "Balenciaga", "CARTIER", "Chloe", "DUNHILL", "GANT", "GUCCI", "MCQ",
        "Montblanc", "PLAYMOBIL", "PUMA", "Pomellato", "SAINT LAURENT", 
        "VALENTINO", "Lombia"
    ],
    
    customers: [
        { id: 1, name: "320 WEST OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 2, name: "A. W. OSMAN OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 3, name: "A.M. OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 4, name: "ADAM OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 5, name: "BENJAMIN LISS OPTOMETRIST", area: "GQEBERHA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 6, name: "CLASSIQUE OPTICAL", area: "BEDFORDVIEW", province: "GAUTENG EAST", salesRepIds: [4, 5] }
    ]
};

class CustomerVisitApp {
    constructor() {
        this.currentStep = 1;
        this.formData = {
            salesRepId: '',
            salesRepName: '',
            area: '',
            province: '',
            customerId: '',
            customerName: '',
            visitDate: new Date().toISOString().split('T')[0],
            stock: [],
            marketing: { needed: false, notes: '' },
            followup: { needed: false, date: '', reason: '' },
            timestamp: ''
        };
        this.currentCustomers = []; // Store filtered customers
        this.init();
    }

    init() {
        this.loadSalesReps();
        this.setCurrentDate();
        this.setupEventListeners();
        this.showStep(1);
    }

    loadSalesReps() {
        const select = document.getElementById('salesRep');
        select.innerHTML = '<option value="">Choose Sales Rep...</option>';
        
        APP_DATA.salesReps.forEach(rep => {
            const option = document.createElement('option');
            option.value = rep.id;
            option.textContent = rep.name;
            select.appendChild(option);
        });
    }

    setCurrentDate() {
        document.getElementById('visitDate').value = this.formData.visitDate;
    }

    setupEventListeners() {
        // Step 1: Sales Rep
        document.getElementById('salesRep').addEventListener('change', (e) => {
            this.formData.salesRepId = e.target.value;
            const selectedRep = APP_DATA.salesReps.find(rep => rep.id == e.target.value);
            this.formData.salesRepName = selectedRep ? selectedRep.name : '';
            
            const nextBtn = document.getElementById('nextStep1');
            nextBtn.disabled = !e.target.value;
        });

        document.getElementById('nextStep1').addEventListener('click', () => {
            this.loadAreas();
            this.showStep(2);
        });

        // Step 2: Area
        document.getElementById('area').addEventListener('change', (e) => {
            this.formData.area = e.target.value;
            const nextBtn = document.getElementById('nextStep2');
            nextBtn.disabled = !e.target.value;
        });

        document.getElementById('nextStep2').addEventListener('click', () => {
            this.loadCustomers();
            this.showStep(3);
        });

        document.getElementById('backStep2').addEventListener('click', () => {
            this.showStep(1);
        });

        // Step 3: Customer
        document.getElementById('customer').addEventListener('change', (e) => {
            this.formData.customerId = e.target.value;
            const selectedCustomer = this.currentCustomers.find(cust => cust.id == e.target.value);
            this.formData.customerName = selectedCustomer ? selectedCustomer.name : '';
            this.formData.province = selectedCustomer ? selectedCustomer.province : '';
            
            const nextBtn = document.getElementById('nextStep3');
            nextBtn.disabled = !e.target.value;
        });

        document.getElementById('visitDate').addEventListener('change', (e) => {
            this.formData.visitDate = e.target.value;
        });

        document.getElementById('nextStep3').addEventListener('click', () => {
            this.loadBrands();
            this.showStep(4);
        });

        document.getElementById('backStep3').addEventListener('click', () => {
            this.showStep(2);
        });

        // Step 4: Stock
        document.getElementById('addBrand').addEventListener('click', () => {
            this.addBrandRow();
        });

        document.getElementById('nextStep4').addEventListener('click', () => {
            this.collectStockData();
            this.showStep(5);
        });

        document.getElementById('backStep4').addEventListener('click', () => {
            this.showStep(3);
        });

        // Step 5: Marketing
        document.querySelectorAll('input[name="marketing"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const notesSection = document.getElementById('marketingNotes');
                if (e.target.value === 'yes') {
                    notesSection.style.display = 'block';
                    this.formData.marketing.needed = true;
                } else {
                    notesSection.style.display = 'none';
                    this.formData.marketing.needed = false;
                    this.formData.marketing.notes = '';
                }
                document.getElementById('nextStep5').disabled = false;
            });
        });

        document.getElementById('marketingNotesText').addEventListener('input', (e) => {
            this.formData.marketing.notes = e.target.value;
        });

        document.getElementById('nextStep5').addEventListener('click', () => {
            this.showStep(6);
        });

        document.getElementById('backStep5').addEventListener('click', () => {
            this.showStep(4);
        });
// Add this to your existing setupEventListeners method
document.getElementById('clearData').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear ALL saved data? This cannot be undone.')) {
        localStorage.removeItem('customerVisits');
        alert('All data has been cleared successfully.');
        console.log('🗑️ All data cleared');
    }
});
        
        // Step 6: Follow-up
        document.querySelectorAll('input[name="followup"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const dateSection = document.getElementById('followupDate');
                const reasonSection = document.getElementById('followupReason');
                
                if (e.target.value === 'yes') {
                    dateSection.style.display = 'block';
                    reasonSection.style.display = 'none';
                    this.formData.followup.needed = true;
                    this.formData.followup.reason = '';
                } else {
                    dateSection.style.display = 'none';
                    reasonSection.style.display = 'block';
                    this.formData.followup.needed = false;
                    this.formData.followup.date = '';
                }
            });
        });

        document.getElementById('followupDateInput').addEventListener('change', (e) => {
            this.formData.followup.date = e.target.value;
        });

        document.getElementById('followupReasonText').addEventListener('input', (e) => {
            this.formData.followup.reason = e.target.value;
        });

        document.getElementById('submitForm').addEventListener('click', () => {
            if (this.validateForm()) {
                this.saveData();
                this.showStep(7); // Success step
            }
        });

        document.getElementById('backStep6').addEventListener('click', () => {
            this.showStep(5);
        });

        // Success step
        document.getElementById('newVisit').addEventListener('click', () => {
            this.resetForm();
        });

        document.getElementById('downloadData').addEventListener('click', () => {
            this.downloadCSV();
        });
    }

    validateForm() {
        // Check if follow-up date is provided when needed
        if (this.formData.followup.needed && !this.formData.followup.date) {
            alert('Please select a follow-up date');
            return false;
        }
        
        // Check if reason is provided when no follow-up is needed
        if (!this.formData.followup.needed && !this.formData.followup.reason) {
            alert('Please provide a reason for no follow-up visit');
            return false;
        }
        
        return true;
    }

    loadAreas() {
        const salesRepId = parseInt(this.formData.salesRepId);
        const areas = [...new Set(
            APP_DATA.customers
                .filter(customer => customer.salesRepIds.includes(salesRepId))
                .map(customer => customer.area)
        )].sort();

        const areaSelect = document.getElementById('area');
        areaSelect.innerHTML = '<option value="">Choose Area...</option>';
        
        areas.forEach(area => {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    }

    loadCustomers() {
        const salesRepId = parseInt(this.formData.salesRepId);
        const area = this.formData.area;
        
        this.currentCustomers = APP_DATA.customers.filter(customer => 
            customer.salesRepIds.includes(salesRepId) && customer.area === area
        );

        const customerSelect = document.getElementById('customer');
        customerSelect.innerHTML = '<option value="">Choose Customer...</option>';
        
        this.currentCustomers.forEach(customer => {
            const option = document.createElement('option');
            option.value = customer.id;
            option.textContent = customer.name;
            customerSelect.appendChild(option);
        });
    }

    loadBrands() {
        const brandSelects = document.querySelectorAll('.brand-select');
        brandSelects.forEach(select => {
            select.innerHTML = '<option value="">Select Brand...</option>';
            APP_DATA.brands.forEach(brand => {
                const option = document.createElement('option');
                option.value = brand;
                option.textContent = brand;
                select.appendChild(option);
            });
        });
    }

    addBrandRow() {
        const container = document.getElementById('brandEntries');
        const newRow = document.createElement('div');
        newRow.className = 'brand-row';
        newRow.innerHTML = `
            <select class="brand-select form-control">
                <option value="">Select Brand...</option>
            </select>
            <input type="number" class="optical-stock" placeholder="Optical" min="0">
            <input type="number" class="sunglass-stock" placeholder="Sunglass" min="0">
            <button class="remove-btn">×</button>
        `;

        // Load brands for this new select
        const select = newRow.querySelector('.brand-select');
        APP_DATA.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            select.appendChild(option);
        });

        // Add remove functionality
        newRow.querySelector('.remove-btn').addEventListener('click', () => {
            container.removeChild(newRow);
        });

        container.appendChild(newRow);
    }

    collectStockData() {
        this.formData.stock = [];
        const rows = document.querySelectorAll('.brand-row');
        
        rows.forEach(row => {
            const brand = row.querySelector('.brand-select').value;
            const optical = row.querySelector('.optical-stock').value;
            const sunglass = row.querySelector('.sunglass-stock').value;
            
            if (brand && (optical || sunglass)) {
                this.formData.stock.push({
                    brand: brand,
                    optical: parseInt(optical) || 0,
                    sunglass: parseInt(sunglass) || 0
                });
            }
        });
    }

    saveData() {
        // Add timestamp
        this.formData.timestamp = new Date().toISOString();
        
        // Get existing visits or initialize empty array
        let visits = [];
        try {
            const stored = localStorage.getItem('customerVisits');
            if (stored) {
                visits = JSON.parse(stored);
            }
        } catch (e) {
            console.error('Error reading stored data:', e);
        }
        
        // Add new visit
        visits.push({...this.formData});
        
        // Save back to localStorage
        try {
            localStorage.setItem('customerVisits', JSON.stringify(visits));
            console.log('✅ Data saved successfully!', this.formData);
            console.log('Total visits stored:', visits.length);
        } catch (e) {
            console.error('Error saving data:', e);
            alert('Error saving data. Please try again.');
        }
    }

    downloadCSV() {
        let visits = [];
        try {
            const stored = localStorage.getItem('customerVisits');
            if (stored) {
                visits = JSON.parse(stored);
            }
        } catch (e) {
            console.error('Error reading data for download:', e);
        }

        if (visits.length === 0) {
            alert('No data available to download. Please submit a form first.');
            return;
        }

        // Create CSV header
        let csv = 'Sales Rep,Area,Province,Customer,Visit Date,Brand,Optical Stock,Sunglass Stock,Marketing Needed,Marketing Notes,Followup Needed,Followup Date,Followup Reason,Timestamp\n';
        
        // Add data rows
        visits.forEach(visit => {
            if (visit.stock && visit.stock.length > 0) {
                visit.stock.forEach(stock => {
                    csv += `"${visit.salesRepName}","${visit.area}","${visit.province}","${visit.customerName}","${visit.visitDate}","${stock.brand}",${stock.optical},${stock.sunglass},${visit.marketing.needed},"${visit.marketing.notes}",${visit.followup.needed},"${visit.followup.date}","${visit.followup.reason}","${visit.timestamp}"\n`;
                });
            } else {
                csv += `"${visit.salesRepName}","${visit.area}","${visit.province}","${visit.customerName}","${visit.visitDate}","",0,0,${visit.marketing.needed},"${visit.marketing.notes}",${visit.followup.needed},"${visit.followup.date}","${visit.followup.reason}","${visit.timestamp}"\n`;
            }
        });

        // Create and download the file
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `customer_visits_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        console.log('📊 CSV downloaded with', visits.length, 'records');
    }

    resetForm() {
        // Reset form data
        this.formData = {
            salesRepId: '',
            salesRepName: '',
            area: '',
            province: '',
            customerId: '',
            customerName: '',
            visitDate: new Date().toISOString().split('T')[0],
            stock: [],
            marketing: { needed: false, notes: '' },
            followup: { needed: false, date: '', reason: '' },
            timestamp: ''
        };
        
        this.currentCustomers = [];

        // Reset form elements
        document.getElementById('salesRep').value = '';
        document.getElementById('area').innerHTML = '<option value="">Choose Area...</option>';
        document.getElementById('customer').innerHTML = '<option value="">Choose Customer...</option>';
        document.getElementById('visitDate').value = this.formData.visitDate;
        
        // Reset brand entries
        document.getElementById('brandEntries').innerHTML = `
            <div class="brand-row">
                <select class="brand-select form-control">
                    <option value="">Select Brand...</option>
                </select>
                <input type="number" class="optical-stock" placeholder="Optical" min="0">
                <input type="number" class="sunglass-stock" placeholder="Sunglass" min="0">
                <button class="remove-btn" style="display:none;">×</button>
            </div>
        `;
        
        // Reset radio buttons and text areas
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        document.getElementById('marketingNotesText').value = '';
        document.getElementById('followupDateInput').value = '';
        document.getElementById('followupReasonText').value = '';
        document.getElementById('marketingNotes').style.display = 'none';
        document.getElementById('followupDate').style.display = 'none';
        document.getElementById('followupReason').style.display = 'none';

        // Reload brands for the first row
        this.loadBrands();

        // Go back to step 1
        this.showStep(1);
        
        console.log('🔄 Form reset successfully');
    }

    showStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        const stepElement = document.getElementById(`step${stepNumber}`);
        if (stepElement) {
            stepElement.classList.add('active');
            this.currentStep = stepNumber;
        } else {
            console.error('Step element not found:', `step${stepNumber}`);
        }
    }
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CustomerVisitApp();
});
