// Actual data based on your requirements
const appData = {
    salesReps: [
        { id: 1, name: "Anika Nel" },
        { id: 2, name: "Chris McLaughlin" },
        { id: 3, name: "Darren Pillay" },
        { id: 4, name: "Mohammed Noor" },
        { id: 5, name: "Shahil Gajoo" },
        { id: 6, name: "Ozayr" }
    ],
    
    brands: [
        "ALEXANDER MCQUEEN",
        "Azzedine Alaia",
        "BOTTEGA VENETA",
        "BOUCHERON",
        "Balenciaga",
        "CARTIER",
        "Chloe",
        "DUNHILL",
        "GANT",
        "GUCCI",
        "MCQ",
        "Montblanc",
        "PLAYMOBIL",
        "PUMA",
        "Pomellato",
        "SAINT LAURENT",
        "VALENTINO",
        "Lombia"
    ],
    
    customers: [
        // Mohammed Noor & Shahil Gajoo customers
        { id: 1, name: "320 WEST OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 2, name: "A. W. OSMAN OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 3, name: "A.M. OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 4, name: "A.R HASSIM OPTOMETRIST", area: "POLOKWANE", province: "LIMPOPO", salesRepIds: [4, 5] },
        { id: 5, name: "ABDURAZAAK ABDOL OPTOMETRIST", area: "GQEBERHA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 6, name: "ADAM OPTICAL", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 7, name: "BADAT OPTOMETRIST", area: "HEIDELBERG", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 8, name: "BENJAMIN LISS OPTOMETRIST AND SUNGLASS BOUTIQUE", area: "GQEBERHA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 9, name: "CEWA EYES", area: "HEIDELBERG", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 10, name: "CHAVOOS OPTOMETRIST", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 11, name: "CLASSIQUE OPTICAL", area: "BEDFORDVIEW", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 12, name: "CLASSIQUE OPTICAL EASTGATE", area: "BEDFORDVIEW", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 13, name: "CLASSIQUE OPTICAL GREENSTONE", area: "GREENSTONE", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 14, name: "COMARO VIEW OPTOMETRISTS", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 15, name: "DURBAN NORTH OPTOMETRISTS INCORPORATED", area: "MOUNT EDGECOMBE", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 16, name: "DVN EAST RAND MALL OPTOMETRIST -LUXURY", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 17, name: "DVN PARKRAND OPTOMETRIST-PUMA", area: "PARKRAND", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 18, name: "DVN VHUTSHILO OPTOMETRIST", area: "THOHOYANDOU", province: "LIMPOPO", salesRepIds: [4, 5] },
        { id: 19, name: "DYNAMIC SPECS OPTOMETRIST", area: "VANDERBIJLPARK", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 20, name: "EAGLE EYES OPTOMETRY", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 21, name: "EUAN F. GLOVER OPTOMETRIST", area: "BEREA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 22, name: "EXECUSPECS BEDFORD", area: "BEDFORDVIEW", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 23, name: "EXECUSPECS LA LUCIA", area: "UMHLANGA", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 24, name: "EXECUSPECS MALL OF THE SOUTH", area: "ASPEN HILLS", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 25, name: "EXECUSPECS THE NEIGHBORHOOD", area: "LINKSFIELD", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 26, name: "EYEDEAL OPTICAL", area: "VERULAM", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 27, name: "EYELAND SUNWARD PARK INC", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 28, name: "EYEPHORIA OPTOMETRIST", area: "BENONI", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 29, name: "EYES FOR YOU", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 30, name: "FALCON EYELAB", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 31, name: "FRANCIS OPTOMETRISTS", area: "SPRUITVIEW", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 32, name: "FRANCOIS SENEKAL OPTOMETRIST", area: "KEMPTON PARK", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 33, name: "GLOBAL EYES - ILLOVO", area: "SANDTON", province: "GAUTENG CENTRAL", salesRepIds: [4, 5] },
        { id: 34, name: "GRANT CARELSE OPTOMETRIST", area: "HUMANSDORP", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 35, name: "HADEBE OPTOMETRIST", area: "NEWCASTLE", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 36, name: "ICARE OPTOMETRIST", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 37, name: "IKASI VISION", area: "UMLAZI", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 38, name: "IMRAN TILLY OPTOMETRIST", area: "VEREENIGING", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 39, name: "INTEROPTIKA", area: "MIDRAND", province: "GAUTENG NORTH", salesRepIds: [4, 5] },
        { id: 40, name: "ISMAIL OPTICALS", area: "SOWETO", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 41, name: "J & N OPTOMETRIST INC", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 42, name: "JAN VORSTER OPTOMETRISTS", area: "MEYERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 43, name: "K A KASOOJEE OPTOMETRIST", area: "MOUNT EDGECOMBE", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 44, name: "K.B. BOURKE OPTOMETRISTS", area: "EAST LONDON", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 45, name: "KHALIQUES HEAD OFFICE", area: "SANDTON", province: "GAUTENG CENTRAL", salesRepIds: [4, 5] },
        { id: 46, name: "KIJK OPTOMETRISTS", area: "BALLITO", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 47, name: "KIRK & PARTNERS INC.", area: "UMHLANGA", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 48, name: "KRIEL & NEWCOMBE OPTOMETRISTS", area: "EAST LONDON", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 49, name: "LANE OPTOMETRIST", area: "KEMPTON PARK", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 50, name: "LATHI THA EYECARE", area: "EAST LONDON", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 51, name: "LATHI THA EYECARE - BIZANA", area: "BIZANA", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 52, name: "LEANE CILLIERS OPTOMETRISTS", area: "JEFFREYS BAY", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 53, name: "LOMBARD, VERSTER & PHEIFFER", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 54, name: "LOOKER EYEWEAR-PUMA", area: "WALMER", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 55, name: "LUBBE OPTOMETRISTS", area: "EAST LONDON", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 56, name: "LUMINA-EYE CARE BY VISION CENTRE", area: "SANDTON", province: "GAUTENG CENTRAL", salesRepIds: [4, 5] },
        { id: 57, name: "LUTHULI ST & ASSOCIATE", area: "GERMISTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 58, name: "M H MOOLA OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 59, name: "MAGNIFEYE OPTOMETRIST INC", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 60, name: "MAKWELA OPTOMETRIST", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 61, name: "MH CASSIMJEE", area: "PIETERMARITZBURG", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 62, name: "MH MOOLLA OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 63, name: "MODERN EYES", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 64, name: "MOFFATT OPTICAL HILLCREST", area: "HILLCREST", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 65, name: "MUMTAZ KHAN OPTO", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 66, name: "N. N. BHAGWANDAS OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 67, name: "NARINDI JANSEN OPTOMETRISTS", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 68, name: "NB EYECARE", area: "MATATIELE", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 69, name: "NEOVISION GOLDEN WALK", area: "GERMISTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 70, name: "OPTIC EXCLUSIVE", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 71, name: "OPTISPEC OPTOMETRIST", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 72, name: "OPTITEK OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 73, name: "OSMANS KEMPTON PARK", area: "KEMPTON PARK", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 74, name: "OSMANS OPTICAL BENONI", area: "BENONI", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 75, name: "OSMANS OPTICAL CARNIVAL", area: "BRAKPAN", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 76, name: "OSMANS OPTICAL DAVEYTON", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 77, name: "OSMANS OPTICAL EDENVALE", area: "EDENVALE", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 78, name: "OSMANS OPTICAL ELS PARK", area: "GERMISTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 79, name: "OSMANS OPTICAL KEMPTON GATE", area: "KEMPTON PARK", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 80, name: "OSMANS OPTICAL KWA-THEMA", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 81, name: "OSMANS OPTICAL MEYERTON", area: "MEYERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 82, name: "OSMANS OPTICAL NORTHMEAD", area: "NORTHMEAD", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 83, name: "OSMANS OPTICAL PARKMEADOWS", area: "KENSINGTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 84, name: "OSMANS OPTICAL PIETERMARITZBURG", area: "PIETERMARITZBURG", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 85, name: "OSMANS OPTICAL RAILWAY STREET GERMISTON", area: "GERMISTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 86, name: "OSMANS OPTICAL SKY CITY", area: "VEREENIGING", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 87, name: "OSMANS OPTICAL SOUTHGATE", area: "MONDEOR", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 88, name: "OSMANS OPTICAL STATION BAZAAR", area: "ALBERTON", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 89, name: "OSMANS OPTICAL WESTWOOD", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 90, name: "OSMANS PALM SPRINGS", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 91, name: "PARUKS OPTOMETRIST", area: "GQEBERHA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 92, name: "PAUL RAMKISSOON OPTOMETRIST", area: "NEWCASTLE", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 93, name: "PEER OPTOMETRIST INC", area: "EAST LONDON", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 94, name: "PERFECT EYES OPTOMETRIST", area: "MALVERN", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 95, name: "PHYLLIS OPTOMETRIST", area: "MUSINA", province: "LIMPOPO", salesRepIds: [4, 5] },
        { id: 96, name: "PLOWS OPTOMETRIST", area: "ESTCOURT", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 97, name: "R&R OPTICAL", area: "BEREA", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 98, name: "R.C VAN ROOYEN INC T/A VAN ROOYEN VISION CENTRE", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 99, name: "RAMMUTLA OPTOMETRISTS", area: "GERMISTON", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 100, name: "RANDY OPTOMETRIST", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 101, name: "RAVENDREE PATHER OPTOMETRIST (PTY) LTD", area: "PHOENIX", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 102, name: "SANDRA STARK OPTOMETRISTS", area: "VEREENIGING", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 103, name: "SARDIWALLA OPTOMETRISTS", area: "LADYSMITH", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 104, name: "SARDIWWALLA OPTOMETRIST - HOWICK", area: "HOWICK", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 105, name: "SEDGARS", area: "VEREENIGING", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 106, name: "SI VARACHIA OPTOMETRIST", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 107, name: "SOS OPTOMETRISTS", area: "UMHLANGA", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 108, name: "SPECTACLE HUT SPRINGS", area: "SPRINGS", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 109, name: "STEFAN VAN ROOYEN OPTOMETRISTS", area: "LICHTENBURG", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 110, name: "SUJEES OPTOMETRIST", area: "VEREENIGING", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 111, name: "SUNSTOPPERS", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 112, name: "THE EYE SHOP", area: "LADYSMITH", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 113, name: "THE GHETTO", area: "BOKSBURG", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 114, name: "THE GLEN OPTOMETRIST", area: "OAKDENE", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 115, name: "THE OPTIK STUDIO", area: "BENONI", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 116, name: "THE SPECTACLE BOUTIQUE", area: "SANDTON", province: "GAUTENG CENTRAL", salesRepIds: [4, 5] },
        { id: 117, name: "THE VERGE OPTOMETRIST", area: "EDENVALE", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 118, name: "TRADE ROUTE OPTICAL", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 119, name: "V.C BUDHIA OPTOMETRIST", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 120, name: "VINAY N. DOOKHI", area: "CHARTSWORTH", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 121, name: "VISION WORKS CAPE ROAD", area: "GQEBERHA", province: "EASTERN CAPE", salesRepIds: [4, 5] },
        { id: 122, name: "VISION WORKS MALL OF THE SOUTH", area: "JOHANNESBURG", province: "GAUTENG SOUTH", salesRepIds: [4, 5] },
        { id: 123, name: "WINDERMERE OPTOMETRISTS", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 124, name: "YD OPTICAL", area: "GREENSTONE", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 125, name: "YOUR EYE TEAM", area: "KEMPTON PARK", province: "GAUTENG EAST", salesRepIds: [4, 5] },
        { id: 126, name: "ZA KHAN OPTOM", area: "DURBAN", province: "KWAZULU-NATAL", salesRepIds: [4, 5] },
        { id: 127, name: "ZEENAT SALOOJEE OPTOMITRIST", area: "LENASIA", province: "GAUTENG SOUTH", salesRepIds: [4, 5] }
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
        this.updateProgressBar();
    }

    loadSalesReps() {
        const salesRepSelect = document.getElementById('salesRep');
        appData.salesReps.forEach(rep => {
            const option = document.createElement('option');
            option.value = rep.id;
            option.textContent = rep.name;
            salesRepSelect.appendChild(option);
        });
    }

    loadAreas(salesRepId) {
        const areaSelect = document.getElementById('area');
        areaSelect.innerHTML = '<option value="">Choose Area...</option>';
        
        // Get unique areas for this sales rep
        const areas = [...new Set(
            appData.customers
                .filter(customer => customer.salesRepIds.includes(parseInt(salesRepId)))
                .map(customer => customer.area)
        )].sort();
        
        areas.forEach(area => {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    }

    loadCustomers(area) {
        const customerSelect = document.getElementById('customer');
        customerSelect.innerHTML = '<option value="">Choose Customer...</option>';
        
        const salesRepId = parseInt(this.formData.salesRep);
        const filteredCustomers = appData.customers.filter(customer => 
            customer.area === area && customer.salesRepIds.includes(salesRepId)
        );
        
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
            appData.brands.forEach(brand => {
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

        document.getElementById('downloadCSV').addEventListener('click', () => {
            this.downloadCSV();
        });
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
        appData.brands.forEach(brand => {
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

        // Save to localStorage
        this.saveToLocalStorage();
        
        // Show success message
        this.goToStep(7);
    }

    saveToLocalStorage() {
        // Get existing data or initialize empty array
        const existingData = JSON.parse(localStorage.getItem('customerVisits') || '[]');
        
        // Add customer details
        const customer = appData.customers.find(c => c.id == this.formData.customer);
        const salesRep = appData.salesReps.find(r => r.id == this.formData.salesRep);
        
        // Add new visit data
        const visitData = {
            ...this.formData,
            customerName: customer ? customer.name : '',
            customerArea: customer ? customer.area : '',
            customerProvince: customer ? customer.province : '',
            salesRepName: salesRep ? salesRep.name : '',
            timestamp: new Date().toISOString(),
            id: Date.now()
        };
        
        existingData.push(visitData);
        localStorage.setItem('customerVisits', JSON.stringify(existingData));
        
        console.log('Data saved:', visitData);
    }

    downloadCSV() {
        const visits = JSON.parse(localStorage.getItem('customerVisits') || '[]');
        if (visits.length === 0) {
            alert('No data available to download');
            return;
        }

        // Create CSV header
        let csv = 'Sales Rep,Area,Province,Customer,Visit Date,Brand,Optical Stock,Sunglass Stock,Marketing Needed,Marketing Notes,Followup Needed,Followup Date,Followup Reason,Timestamp\n';
        
        // Add data rows
        visits.forEach(visit => {
            if (visit.stock && visit.stock.length > 0) {
                visit.stock.forEach(stock => {
                    csv += `"${visit.salesRepName}","${visit.customerArea}","${visit.customerProvince}","${visit.customerName}","${visit.visitDate}","${stock.brand}",${stock.optical},${stock.sunglass},${visit.marketing.needed},"${visit.marketing.notes}",${visit.followup.needed},"${visit.followup.date}","${visit.followup.reason}","${visit.timestamp}"\n`;
                });
            } else {
                csv += `"${visit.salesRepName}","${visit.customerArea}","${visit.customerProvince}","${visit.customerName}","${visit.visitDate}","",0,0,${visit.marketing.needed},"${visit.marketing.notes}",${visit.followup.needed},"${visit.followup.date}","${visit.followup.reason}","${visit.timestamp}"\n`;
            }
        });

        // Create and download file
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `customer_visits_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
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
