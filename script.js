// Sample data - In production, this would be loaded from JSON files
const sampleData = {
    salesReps: [
        { id: 1, name: "John Smith" },
        { id: 2, name: "Sarah Johnson" },
        { id: 3, name: "Mike Davis" },
        { id: 4, name: "Emily Wilson" }
    ],
    areas: [
        { id: 1, name: "Downtown", salesRepId: 1, province: "Province A" },
        { id: 2, name: "Westside", salesRepId: 1, province: "Province A" },
        { id: 3, name: "East End", salesRepId: 2, province: "Province B" },
        { id: 4, name: "North Hills", salesRepId: 3, province: "Province C" },
        { id: 5, name: "South Park", salesRepId: 4, province: "Province D" }
    ],
    customers: [
        { id: 1, name: "Vision Plus Downtown", areaId: 1 },
        { id: 2, name: "Clear Sight Optical", areaId: 1 },
        { id: 3, name: "Westside Eyewear", areaId: 2 },
        { id: 4, name: "Premium Optics West", areaId: 2 },
        { id: 5, name: "East End Vision", areaId: 3 },
        { id: 6, name: "City View Opticians", areaId: 3 },
        { id: 7, name: "North Hills Optical", areaId: 4 },
        { id: 8, name: "Mountain View Eyewear", areaId: 4 },
        { id: 9, name: "South Park Vision", areaId: 5 },
        { id: 10, name: "Metro Optical South", areaId: 5 }
    ],
    brands: [
        "Ray-Ban",
        "Oakley",
        "Gucci",
        "Prada",
        "Versace",
        "Armani",
        "Dior",
        "Tom Ford",
        "Michael Kors",
        "Coach"
    ]
};

class CustomerVisitApp {
    constructor() {
        this.currentStep = 1;
        this.formData = {
            salesRep: '',
            area: '',
            customer: '',
            visitDate: new Date().toISOString().split('T')[0],
            stock: [],
            marketing: {
                needed: false,
                notes: ''
            },
            followup: {
                needed: false,
                date: '',
                reason: ''
            }
        };
        this.init();
    }

    init() {
        this.loadSalesReps();
        this.setCurrentDate();
        this.loadBrands();
        this.attachEventListeners();
    }

    loadSalesReps() {
        const salesRepSelect = document.getElementById('salesRep');
        sampleData.salesReps.forEach(rep => {
            const option = document.createElement('option');
            option.value = rep.id;
            option.textContent = rep.name;
            salesRepSelect.appendChild(option);
        });
    }

    loadAreas(salesRepId) {
        const areaSelect = document.getElementById('area');
        areaSelect.innerHTML = '<option value="">Choose Area...</option>';
        
        const filteredAreas = sampleData.areas.filter(area => area.salesRepId == salesRepId);
        filteredAreas.forEach(area => {
            const option = document.createElement('option');
            option.value = area.id;
            option.textContent = `${area.name} (${area.province})`;
            areaSelect.appendChild(option);
        });
    }

    loadCustomers(areaId) {
        const customerSelect = document.getElementById('customer');
        customerSelect.innerHTML = '<option value="">Choose Customer...</option>';
        
        const filteredCustomers = sampleData.customers.filter(customer => customer.areaId == areaId);
        filteredCustomers.forEach(customer => {
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
            sampleData.brands.forEach(brand => {
                const option = document.createElement('option');
                option.value = brand;
                option.textContent = brand;
                select.appendChild(option);
            });
        });
    }

    setCurrentDate() {
        document.getElementById('visitDate').value = this.formData.visitDate;
    }

    attachEventListeners() {
        // Step 1: Sales Rep Selection
        document.getElementById('salesRep').addEventListener('change', (e) => {
            this.formData.salesRep = e.target.value;
            document.getElementById('nextStep1').disabled = !e.target.value;
            if (e.target.value) {
                this.loadAreas(e.target.value);
            }
        });

        document.getElementById('nextStep1').addEventListener('click', () => {
            this.goToStep(2);
        });

        // Step 2: Area Selection
        document.getElementById('area').addEventListener('change', (e) => {
            this.formData.area = e.target.value;
            document.getElementById('nextStep2').disabled = !e.target.value;
            if (e.target.value) {
                this.loadCustomers(e.target.value);
            }
        });

        document.getElementById('nextStep2').addEventListener('click', () => {
            this.goToStep(3);
        });

        document.getElementById('backStep2').addEventListener('click', () => {
            this.goToStep(1);
        });

        // Step 3: Customer Selection
        document.getElementById('customer').addEventListener('change', (e) => {
            this.formData.customer = e.target.value;
            document.getElementById('nextStep3').disabled = !e.target.value;
        });

        document.getElementById('visitDate').addEventListener('change', (e) => {
            this.formData.visitDate = e.target.value;
        });

        document.getElementById('nextStep3').addEventListener('click', () => {
            this.goToStep(4);
        });

        document.getElementById('backStep3').addEventListener('click', () => {
            this.goToStep(2);
        });

        // Step 4: Stock on Hand
        document.getElementById('addBrand').addEventListener('click', () => {
            this.addBrandEntry();
        });

        document.getElementById('nextStep4').addEventListener('click', () => {
            this.collectStockData();
            this.goToStep(5);
        });

        document.getElementById('backStep4').addEventListener('click', () => {
            this.goToStep(3);
        });

        // Step 5: Marketing Support
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
            this.goToStep(6);
        });

        document.getElementById('backStep5').addEventListener('click', () => {
            this.goToStep(4);
        });

        // Step 6: Follow-up Visit
        document.querySelectorAll('input[name="followup"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const dateSection = document.getElementById('followupDateSection');
                const reasonSection = document.getElementById('followupReasonSection');
                
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

        document.getElementById('followupDate').addEventListener('change', (e) => {
            this.formData.followup.date = e.target.value;
        });

        document.getElementById('followupReason').addEventListener('input', (e) => {
            this.formData.followup.reason = e.target.value;
        });

        document.getElementById('submitForm').addEventListener('click', () => {
            this.submitForm();
        });

        document.getElementById('backStep6').addEventListener('click', () => {
            this.goToStep(5);
        });

        // Success Message
        document.getElementById('newVisit').addEventListener('click', () => {
            this.resetForm();
        });
    }

    updateProgressBar() {
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLine = document.getElementById('progressLine');
    
    // Calculate progress percentage
    const progressPercent = ((this.currentStep - 1) / (progressSteps.length - 1)) * 100;
    progressLine.style.width = `${progressPercent}%`;
    
    // Update step states
    progressSteps.forEach((step, index) => {
        const stepNumber = parseInt(step.dataset.step);
        
        step.classList.remove('active', 'completed');
        
        if (stepNumber === this.currentStep) {
            step.classList.add('active');
        } else if (stepNumber < this.currentStep) {
            step.classList.add('completed');
        }
    });
}

goToStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    this.currentStep = step;
    this.updateProgressBar();
    
    // Scroll to top on step change
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
    addBrandEntry() {
        const brandEntries = document.getElementById('brandEntries');
        const newEntry = document.createElement('div');
        newEntry.className = 'brand-entry';
        newEntry.innerHTML = `
            <select class="brand-select form-control">
                <option value="">Select Brand...</option>
            </select>
            <div class="stock-columns">
                <input type="number" class="optical-stock" placeholder="Optical" min="0">
                <input type="number" class="sunglass-stock" placeholder="Sunglass" min="0">
            </div>
            <button class="remove-brand btn btn-danger"><i class="fas fa-times"></i></button>
        `;
        
        // Load brands for the new select
        const select = newEntry.querySelector('.brand-select');
        sampleData.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            select.appendChild(option);
        });

        // Add remove functionality
        newEntry.querySelector('.remove-brand').addEventListener('click', () => {
            brandEntries.removeChild(newEntry);
        });

        brandEntries.appendChild(newEntry);
    }

    collectStockData() {
        this.formData.stock = [];
        const entries = document.querySelectorAll('.brand-entry');
        
        entries.forEach(entry => {
            const brand = entry.querySelector('.brand-select').value;
            const optical = entry.querySelector('.optical-stock').value;
            const sunglass = entry.querySelector('.sunglass-stock').value;
            
            if (brand && (optical || sunglass)) {
                this.formData.stock.push({
                    brand: brand,
                    optical: parseInt(optical) || 0,
                    sunglass: parseInt(sunglass) || 0
                });
            }
        });
    }

    goToStep(step) {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.getElementById(`step${step}`).classList.add('active');
        this.currentStep = step;
    }

    submitForm() {
        // Validate required fields
        if (this.formData.followup.needed && !this.formData.followup.date) {
            alert('Please select a follow-up date');
            return;
        }
        
        if (!this.formData.followup.needed && !this.formData.followup.reason) {
            alert('Please provide a reason for no follow-up');
            return;
        }

        // Save to localStorage (simulating database save)
        this.saveToLocalStorage();
        
        // Show success message
        this.goToStep(7);
    }

    saveToLocalStorage() {
        // Get existing data or initialize empty array
        const existingData = JSON.parse(localStorage.getItem('customerVisits') || '[]');
        
        // Add new visit data
        const visitData = {
            ...this.formData,
            timestamp: new Date().toISOString(),
            id: Date.now() // Simple ID generation
        };
        
        existingData.push(visitData);
        localStorage.setItem('customerVisits', JSON.stringify(existingData));
        
        // Also export to CSV format
        this.exportToCSV(visitData);
    }

    exportToCSV(visitData) {
        // Create CSV content
        const csvContent = this.convertToCSV(visitData);
        
        // For GitHub Pages, we can't directly save files, so we'll store in localStorage
        const existingCSV = localStorage.getItem('customerVisitsCSV') || 'Sales Rep,Area,Customer,Visit Date,Brand,Optical Stock,Sunglass Stock,Marketing Needed,Marketing Notes,Followup Needed,Followup Date,Followup Reason\n';
        localStorage.setItem('customerVisitsCSV', existingCSV + csvContent);
    }

    convertToCSV(visitData) {
        const salesRep = sampleData.salesReps.find(rep => rep.id == visitData.salesRep)?.name || '';
        const area = sampleData.areas.find(a => a.id == visitData.area)?.name || '';
        const customer = sampleData.customers.find(c => c.id == visitData.customer)?.name || '';
        
        let csvLines = '';
        
        if (visitData.stock.length > 0) {
            visitData.stock.forEach(stockItem => {
                csvLines += `"${salesRep}","${area}","${customer}","${visitData.visitDate}","${stockItem.brand}",${stockItem.optical},${stockItem.sunglass},${visitData.marketing.needed},"${visitData.marketing.notes}",${visitData.followup.needed},"${visitData.followup.date}","${visitData.followup.reason}"\n`;
            });
        } else {
            csvLines += `"${salesRep}","${area}","${customer}","${visitData.visitDate}","",0,0,${visitData.marketing.needed},"${visitData.marketing.notes}",${visitData.followup.needed},"${visitData.followup.date}","${visitData.followup.reason}"\n`;
        }
        
        return csvLines;
    }

    resetForm() {
        // Reset form data
        this.formData = {
            salesRep: '',
            area: '',
            customer: '',
            visitDate: new Date().toISOString().split('T')[0],
            stock: [],
            marketing: {
                needed: false,
                notes: ''
            },
            followup: {
                needed: false,
                date: '',
                reason: ''
            }
        };

        // Reset form elements
        document.getElementById('salesRep').value = '';
        document.getElementById('area').innerHTML = '<option value="">Choose Area...</option>';
        document.getElementById('customer').innerHTML = '<option value="">Choose Customer...</option>';
        document.getElementById('visitDate').value = this.formData.visitDate;
        
        // Reset brand entries
        document.getElementById('brandEntries').innerHTML = `
            <div class="brand-entry">
                <select class="brand-select form-control">
                    <option value="">Select Brand...</option>
                </select>
                <div class="stock-columns">
                    <input type="number" class="optical-stock" placeholder="Optical" min="0">
                    <input type="number" class="sunglass-stock" placeholder="Sunglass" min="0">
                </div>
                <button class="remove-brand btn btn-danger" style="display: none;"><i class="fas fa-times"></i></button>
            </div>
        `;
        this.loadBrands();

        // Reset radio buttons and textareas
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        document.getElementById('marketingNotesText').value = '';
        document.getElementById('followupDate').value = '';
        document.getElementById('followupReason').value = '';
        document.getElementById('marketingNotes').style.display = 'none';
        document.getElementById('followupDateSection').style.display = 'none';
        document.getElementById('followupReasonSection').style.display = 'none';

        // Go back to step 1
        this.goToStep(1);
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CustomerVisitApp();
});

// Function to download CSV (can be called from browser console)
function downloadCSV() {
    const csvData = localStorage.getItem('customerVisitsCSV');
    if (csvData) {
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'customer_visits.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
