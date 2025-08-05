# Affordmed Campus Hiring Evaluation – Frontend Submission

**Roll Number**: `223j1a04a5`

This repository contains my submission for the **Affordmed Campus Hiring Evaluation – Frontend Track**. It includes:

- ✅ A **URL Shortener React Web Application**
- ✅ A **Standalone Logging Middleware**

---

## 📁 Project Structure

223j1a04a5/
├── Logging Middleware/ # Contains the logging middleware implementation
│ ├── logger.js
│ ├── package.json
│ └── README.md
├── Frontend Test Submission/ # React-based URL Shortener App
│ └── url-shortener-app/
│ ├── public/
│ ├── src/
│ ├── vite.config.js
│ ├── index.html
│ ├── package.json
│ └── README.md
└── README.md # Main documentation (this file)

markdown
Copy
Edit

---

## 🔧 1. Logging Middleware

### 📌 Overview

This is a standalone **JavaScript logging module** built to simulate sending logs to a backend API. It adheres to Affordmed’s evaluation specifications and supports multiple:

- **Stacks** – e.g., `frontend`
- **Levels** – `info`, `debug`, `warn`, `error`, `fatal`
- **Packages** – e.g., `controller`, `route`, `service`, etc.

### 📂 Files

- `logger.js` – Core logging logic
- `package.json` – Defines module info and dependencies
- `README.md` – Documentation and usage

### 🚀 Usage Example

```javascript
import log from '../Logging Middleware/logger.js';

// Log an informational message
log("frontend", "info", "User successfully logged in.");

// Log an error message
log("frontend", "error", "Failed to fetch data from API.");
🔍 For more details, refer to Logging Middleware/README.md

🌐 2. URL Shortener React Web Application
📌 Overview
A user-friendly URL Shortener built entirely using React and Material UI. It allows shortening of URLs, tracking clicks, setting expiry durations, and viewing URL statistics. All data is stored locally using localStorage.

✅ Features
🔗 URL Shortening – Convert long URLs into short links

🔠 Custom Shortcodes – Optional user-defined shortcodes with validation

⏳ Validity Periods – Set expiry time for each URL

📈 Click Tracking – Tracks click timestamp, location, and referrer

📊 Statistics Dashboard – View click count and details per URL

⚛️ Client-side Routing – Fast navigation using React Router

💅 Material UI Only – Fully styled using Material UI components

🧪 Client-side Validation – Robust input handling and user feedback

📂 Directory
bash
Copy
Edit
Frontend Test Submission/url-shortener-app/
├── public/              # Static assets
├── src/                 # Source code (components, pages, logic)
├── index.html           # Main HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # App-specific documentation
⚙️ Installation & Running Instructions
🖥️ Logging Middleware (Standalone Module)
bash
Copy
Edit
cd "Logging Middleware"
npm install
# Import and use `logger.js` in any JavaScript/React project
🌐 Frontend App Setup
bash
Copy
Edit
cd "Frontend Test Submission/url-shortener-app"
npm install               # Install all dependencies
npm run dev               # Start development server
Once the dev server starts, open your browser and go to:

👉 http://localhost:3000

🧪 Usage Guide
🔗 Shortening URLs
Enter a long URL

(Optional) Enter a custom shortcode and/or set a validity duration

Click Shorten URL

📊 Viewing Statistics
Click the "Statistics" tab

View all shortened URLs and analytics

Click on a row to expand detailed view

🔁 URL Redirection
Access any shortened URL directly:

arduino
Copy
Edit
http://localhost:3000/<shortcode>
You’ll be redirected to the original URL and click will be recorded.

📝 Notes
✅ Built using React, Material UI, Vite

✅ Fully client-side: No backend required

✅ Adheres to Affordmed's requirement to use only Material UI components

✅ Codebase follows clean folder structure and naming conventions

✅ No personal or company names hardcoded in the codebase

🧠 Conclusion
This submission demonstrates a complete and compliant solution to the frontend challenge. The logging middleware showcases integration capabilities and adherence to specifications, while the React application demonstrates strong grasp of UI/UX principles, data handling, and frontend architecture.
