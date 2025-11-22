// All your data goes here - simple and easy to update
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
    
    // Just a few sample customers - we'll add more later
    customers: [
        { id: 1, name: "320 WEST OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 2, name: "A. W. OSMAN OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 3, name: "A.M. OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 4, name: "ADAM OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] }
    ]
};

class CustomerVisitApp {
    constructor() {
        this.currentStep = 1;
        this.formData = {};
        this.init();
    }

    init() {
        this.loadSalesReps();
        this.setupEventListeners();
        this.showStep(1);
    }

    loadSalesReps() {
        const select = document.getElementById('salesRep');
        APP_DATA.salesReps.forEach(rep => {
            const option = document.createElement('option');
            option.value = rep.id;
            option.textContent = rep.name;
            select.appendChild(option);
        });
    }

    setupEventListeners() {
        // Step 1: Sales Rep
        document.getElementById('salesRep').addEventListener('change', (e) => {
            const nextBtn = document.getElementById('nextStep1');
            nextBtn.disabled = !e.target.value;
        });

        document.getElementById('nextStep1').addEventListener('click', () => {
            this.showStep(2);
        });

        // Step 2: Area
        document.getElementById('backStep2').addEventListener('click', () => {
            this.showStep(1);
        });

        // We'll add more event listeners step by step
    }

    showStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        document.getElementById(`step${stepNumber}`).classList.add('active');
        this.currentStep = stepNumber;
    }
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CustomerVisitApp();
});
