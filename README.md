Affordmed Campus Hiring Evaluation – Frontend Submission
Roll Number: 223j1a04a5
This repository contains my submission for the Affordmed Campus Hiring Evaluation – Frontend Track. It includes two components:

✅ A URL Shortener React Web Application
✅ A Standalone Logging Middleware

Project Structure
223j1a04a5/
├── Logging Middleware/              # Contains the logging middleware implementation
│   ├── logger.js                   # Core logging logic
│   ├── package.json                # Node.js package configuration
│   └── README.md                   # Documentation and usage
├── Frontend Test Submission/       # React-based URL Shortener Application
│   └── url-shortener-app/
│       ├── public/                 # Static assets
│       ├── src/                    # React source code
│       ├── index.html              # Main HTML entry point
│       ├── vite.config.js          # Vite configuration
│       ├── package.json            # Project dependencies
│       └── README.md               # Frontend README
└── README.md                       # Main documentation (this file)

1. Logging Middleware
Overview
A standalone JavaScript logging module designed to simulate sending logs to a backend API. It adheres to Affordmed’s evaluation specifications and supports:

Stacks: e.g., frontend
Levels: info, debug, warn, error, fatal
Packages: e.g., controller, route, service, etc.

Files

logger.js: Core logging logic
package.json: Defines module information and dependencies
README.md: Documentation and usage instructions

Usage Example
import log from '../Logging Middleware/logger.js';

// Log an informational message
log("frontend", "info", "User successfully logged in.");

// Log an error message
log("frontend", "error", "Failed to fetch data from API.");

🔍 For more details, refer to Logging Middleware/README.md.
2. URL Shortener React Web Application
Overview
A user-friendly URL Shortener built with React and Material UI, offering URL shortening, click tracking, expiry settings, and a statistics dashboard. All data is stored locally using localStorage.
Features

🔗 URL Shortening: Converts long URLs into short links.
🔠 Custom Shortcodes: Optional user-defined shortcodes with validation.
⏳ Validity Periods: Configurable expiry times for URLs.
📈 Click Tracking: Records click timestamps, locations, and referrers.
📊 Statistics Dashboard: Displays click counts and detailed analytics per URL.
⚛️ Client-side Routing: Fast navigation using React Router.
💅 Material UI Only: Fully styled with Material UI components.
🧪 Client-side Validation: Robust input handling and user feedback.

Directory
Frontend Test Submission/url-shortener-app/
├── public/                 # Static assets
├── src/                    # Source code (components, pages, logic)
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── README.md               # App-specific documentation

Installation & Running Instructions
Logging Middleware (Standalone Module)
cd "Logging Middleware"
npm install
# Import and use `logger.js` in any JavaScript/React project

Frontend App Setup
cd "Frontend Test Submission/url-shortener-app"
npm install               # Install all dependencies
npm run dev               # Start development server

Once the development server starts, open your browser and navigate to:👉 http://localhost:3000
Usage Guide
Shortening URLs

Enter a long URL.
(Optional) Enter a custom shortcode and/or set a validity duration.
Click "Shorten URL".

Viewing Statistics

Click the "Statistics" tab.
View all shortened URLs and their analytics.
Click a row to expand the detailed view.

URL Redirection
Access any shortened URL directly:  
http://localhost:3000/<shortcode>


Redirects to the original URL.
Records the click for analytics.

Notes

✅ Built using React, Material UI, and Vite.
✅ Fully client-side; no backend required.
✅ Uses only Material UI components as per Affordmed’s requirements.
✅ Follows clean folder structure and naming conventions.
✅ No personal or company names hardcoded in the codebase.

Conclusion
This submission demonstrates a complete and compliant solution to the frontend challenge. The Logging Middleware showcases integration capabilities and adherence to specifications, while the React URL Shortener Application highlights proficiency in UI/UX principles, data handling, and frontend architecture.

