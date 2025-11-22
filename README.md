# Customer Visit App

A web-based application for sales representatives to record customer visits, stock counts, and follow-up requirements.

## Features

- **Multi-step Form**: Guided process for data entry
- **Sales Rep Management**: Load customers based on sales rep and area
- **Stock Counting**: Track optical and sunglass stock for multiple brands
- **Marketing Support**: Record marketing needs and notes
- **Follow-up Management**: Schedule follow-up visits with reasons
- **Data Export**: Automatic CSV generation for Excel compatibility

## Setup for GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. The app will be available at `https://[username].github.io/[repository-name]`

## Data Storage

- Data is stored in browser's localStorage
- CSV data can be downloaded using `downloadCSV()` function in browser console
- For production use, integrate with a backend service

## Customization

- Edit JSON files in `/data` folder to add your sales reps, areas, and customers
- Modify brands list in `script.js`
- Customize styling in `styles.css`
