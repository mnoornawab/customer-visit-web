# Customer Visit Web (Plain HTML/JS Frontend)

A simple static web app for logging customer visits, hosted on GitHub Pages and connected to Google Sheets via a Google Apps Script Web App.

## Features

- Sales rep selection
- Loads assigned customers per rep
- Visit form (brands, units, notes, follow-up)
- Supports adding new customers
- Shows last visit date
- Deployable to GitHub Pages

## Setup

1. Clone this repo.
2. Deploy your [Google Apps Script Web App](https://developers.google.com/apps-script/guides/web) that exposes endpoints:
   - `getSalesReps`
   - `getCustomersByRep`
   - `getBrands`
   - `getCustomerLastVisit`
   - `recordVisit`
3. In `script.js`, set your `API_URL` to your Apps Script Web App URL.
4. Push to GitHub and enable GitHub Pages (e.g., from `main` branch `/root`).
5. Use your app at `https://YOUR_GITHUB_USERNAME.github.io/customer-visit-web/`.

## Backend Integration

- The backend is a Google Apps Script Web App that you control.
- See `/backend` or repo [customer-visit-management-scripts](https://github.com/YOUR_GITHUB_USERNAME/customer-visit-management-scripts) for Apps Script samples.

---

**Maintained by [YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)**
