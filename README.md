Affordmed Campus Hiring Evaluation – Frontend Submission
Roll Number: 223j1a04a5
This repository contains my submission for the Affordmed Campus Hiring Evaluation – Frontend Track. It includes:

A URL Shortener React Web Application

A Standalone Logging Middleware

📁 Project Structure
graphql
Copy
Edit
2223j1a04a5/
├── Logging Middleware/          # Contains the logging middleware implementation
│   ├── logger.js
│   ├── package.json
│   └── README.md
├── Frontend Test Submission/    # React-based URL Shortener App
│   └── url-shortener-app/
│       ├── public/
│       ├── src/
│       ├── ... (other project files)
│       └── README.md
└── README.md                    # Main documentation (this file)

1. 🧩 Logging Middleware
Overview
This is a standalone JavaScript logging module built to simulate sending logs to a backend API. It adheres to Affordmed’s specification, supporting various:

Stacks: e.g., frontend

Levels: info, error, debug, warn, fatal

Packages: Supports types like controller, route, etc.

Files
Logging Middleware/logger.js: Core logging logic

Logging Middleware/README.md: Documentation and usage examples

Logging Middleware/package.json: Node package setup

Usage Example
javascript
Copy
Edit
import log from '../Logging Middleware/logger.js';

// Log an informational message
log("frontend", "info", "User successfully logged in.");

// Log an error
log("frontend", "error", "Failed to fetch data from API.");
For full usage instructions, refer to: Logging Middleware/README.md

2. 🌐 URL Shortener React Web Application
Overview
A React + Material UI based user-friendly URL Shortener. It runs fully on the frontend using localStorage for persistence.

✨ Features
✅ Shorten URLs with optional custom shortcodes

⏱️ Custom Validity Periods (expiry settings)

📈 Click Tracking (timestamp, location, etc.)

📊 Statistics Dashboard

🔄 Client-side Routing (React Router)

🎨 Material UI Design – responsive and clean

🔒 Input Validation – client-side

🔧 Installation & Setup
bash
Copy
Edit
# Step 1: Navigate to project directory
cd "Frontend Test Submission/url-shortener-app"

# Step 2: Install dependencies
npm install

# Step 3: Run the development server
npm start
🌍 Access
Open your browser and go to: http://localhost:3000

🚀 Usage Guide
Shorten a URL:
Enter the URL → Optional: custom shortcode + validity → Click “Shorten URL”.

View Statistics:
Navigate to the "Statistics" tab to view all shortened URLs with analytics.

Redirect via Short URL:
Visit: http://localhost:3000/{yourshortcode} to be redirected and log the click.

✅ Technical Highlights
Fully compliant with Material UI only requirement

All click and URL data managed client-side (no backend)

Built with scalability and responsiveness in mind

Logging middleware integrates cleanly into the frontend

Clean code structure and professional UI/UX

📎 Conclusion
This submission demonstrates:

✅ Strong command over React + MUI

✅ Client-side routing, validation, data handling

✅ Integration of custom logging middleware

✅ Compliance with Affordmed’s frontend track guidelines
