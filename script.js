// ====== CONFIG ======
const API_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL"; // Replace with your deployed Apps Script Web App URL

// ====== INITIAL LOAD ======
document.addEventListener('DOMContentLoaded', () => {
  loadSalesReps();
  loadBrands();
  document.getElementById('visitDate').valueAsDate = new Date();

  document.getElementById('salesRep').addEventListener('change', loadCustomers);
  document.getElementById('customer').addEventListener('change', loadLastVisit);
  document.getElementById('addBrandRow').addEventListener('click', addBrandRow);
  document.getElementById('isNewCustomer').addEventListener('change', toggleNewCustomerFields);
  document.getElementById('visitForm').addEventListener('submit', submitForm);
});

function showMessage(msg, success=true) {
  const div = document.getElementById('message');
  div.textContent = msg;
  div.style.color = success ? "green" : "red";
  setTimeout(() => { div.textContent = ""; }, 5000);
}

// ====== LOAD SALES REPS ======
function loadSalesReps() {
  fetch(`${API_URL}?action=getSalesReps`)
    .then(res => res.json())
    .then(data => {
      const repSel = document.getElementById('salesRep');
      repSel.innerHTML = '<option value="">Select rep</option>' +
        data.reps.map(rep => `<option value="${rep}">${rep}</option>`).join('');
    })
    .catch(() => showMessage("Failed to load sales reps", false));
}

// ====== LOAD CUSTOMERS ======
function loadCustomers() {
  const rep = document.getElementById('salesRep').value;
  if (!rep) return;
  fetch(`${API_URL}?action=getCustomersByRep&rep=${encodeURIComponent(rep)}`)
    .then(res => res.json())
    .then(data => {
      const custSel = document.getElementById('customer');
      custSel.innerHTML = '<option value="">Select customer</option>' +
        data.customers.map(c => `<option value="${c}">${c}</option>`).join('');
      loadLastVisit(); // Clear last visit
    })
    .catch(() => showMessage("Failed to load customers", false));
}

// ====== LOAD BRANDS ======
function loadBrands() {
  fetch(`${API_URL}?action=getBrands`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('.brandSelect').forEach(sel => {
        sel.innerHTML = '<option value="">Select brand</option>' +
          data.brands.map(b => `<option value="${b}">${b}</option>`).join('');
      });
    })
    .catch(() => showMessage("Failed to load brands", false));
}

// ====== LOAD LAST VISIT ======
function loadLastVisit() {
  const customer = document.getElementById('customer').value;
  const div = document.getElementById('lastVisitDiv');
  if (!customer) { div.textContent = ""; return; }
  fetch(`${API_URL}?action=getCustomerLastVisit&customer=${encodeURIComponent(customer)}`)
    .then(res => res.json())
    .then(data => {
      div.textContent = data.lastVisit ? `Last Visit: ${data.lastVisit}` : '';
    });
}

// ====== BRAND ROWS ======
function addBrandRow() {
  const tbody = document.getElementById('brandsBody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><select class="brandSelect" required></select></td>
    <td><input type="number" min="0" class="unitsInput" required/></td>
  `;
  tbody.appendChild(row);
  loadBrands();
}

// ====== TOGGLE NEW CUSTOMER FIELDS ======
function toggleNewCustomerFields() {
  const isNew = document.getElementById('isNewCustomer').checked;
  document.getElementById('newCustomerFields').style.display = isNew ? '' : 'none';
  document.getElementById('existingCustomerFields').style.display = isNew ? 'none' : '';
}

// ====== FORM SUBMIT ======
function submitForm(e) {
  e.preventDefault();
  const isNew = document.getElementById('isNewCustomer').checked;

  // Collect form data
  const data = {
    rep: document.getElementById('salesRep').value,
    date: document.getElementById('visitDate').value,
    brands: Array.from(document.querySelectorAll('#brandsBody tr')).map(row => ({
      brand: row.querySelector('.brandSelect').value,
      units: row.querySelector('.unitsInput').value
    })),
    notes: document.getElementById('notes').value,
    followUp: document.getElementById('followUp').checked,
    isNewCustomer: isNew
  };
  if (isNew) {
    data.customer = document.getElementById('newCustomerName').value;
    data.area = document.getElementById('newCustomerArea').value;
    data.province = document.getElementById('newCustomerProvince').value;
  } else {
    data.customer = document.getElementById('customer').value;
  }

  // Basic validation
  if (!data.rep || !data.customer || !data.date || data.brands.some(b => !b.brand || !b.units)) {
    showMessage("Fill all required fields", false);
    return;
  }

  fetch(`${API_URL}?action=recordVisit`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(resp => {
    if (resp.success) {
      showMessage("Visit recorded successfully!");
      document.getElementById('visitForm').reset();
      loadBrands();
      // Reset brand rows
      const tbody = document.getElementById('brandsBody');
      tbody.innerHTML = '';
      addBrandRow();
    } else {
      showMessage(resp.message || "Submission failed", false);
    }
  })
  .catch(() => showMessage("Submission failed", false));
}
