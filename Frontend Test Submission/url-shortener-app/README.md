Below is the reformatted and polished version of the provided README for the URL Shortener React Web Application. The content remains unchanged, but the formatting has been improved for clarity, consistency, and readability. I've standardized headings, code blocks, lists, and spacing, and ensured a professional tone throughout.

URL Shortener - React Web Application
A user-friendly URL Shortener application built with React and Material UI, offering core URL shortening functionality and analytical insights, all managed client-side.
Features
Core Functionality

URL Shortening: Converts long URLs into short, manageable links.
Custom Shortcodes: Supports optional custom shortcodes (3-20 characters, alphanumeric).
Validity Periods: Configurable expiry times (default: 30 minutes).
Unique Link Management: Ensures all generated short links are unique.
Client-side Validation: Comprehensive input validation and error handling.

Analytics & Statistics

Click Tracking: Tracks total clicks for each shortened URL.
Detailed Analytics: Displays click timestamps, sources, and geographical data.
URL Status: Monitors active/expired status of shortened URLs.
Historical Data: Persists all shortened URLs and their statistics.

User Experience

Material UI Design: Clean, professional interface using Material UI components.
Responsive Design: Seamlessly works on desktop and mobile devices.
Client-side Routing: Fast navigation using React Router.
Real-time Updates: Instant feedback without page refreshes.
Copy to Clipboard: Easy copying of shortened URLs.

Technical Requirements
Mandatory Requirements

✅ Material UI Only: Uses exclusively Material UI for styling.
✅ React Application: Built with React 19.1.0.
✅ No Authentication: Pre-authorized access without user registration.
✅ Unique Short Links: Automatic uniqueness validation and management.
✅ Default Validity: 30-minute default expiry with custom options.
✅ Custom Shortcodes: Optional user-defined shortcodes with validation.
✅ URL Redirection: Automatic redirection with click tracking.
✅ localhost:3000: Configured to run on the specified port.

Application Architecture

Frontend: React with Material UI components.
Routing: React Router for client-side navigation.
Storage: localStorage for data persistence.
Validation: Client-side input validation and error handling.

Installation & Setup
Prerequisites

Node.js (version 18 or higher)
pnpm (recommended) or npm

Installation Steps

Extract the project files:
bashunzip url-shortener-app.zip
cd url-shortener-app

Install dependencies:
bashpnpm install
Or with npm:
bashnpm install

Start the development server:
bashpnpm run dev
Or with npm:
bashnpm run dev

Access the application:
Open your browser and navigate to http://localhost:3000.

Usage Guide
Shortening URLs

Navigate to the main page at http://localhost:3000.
Enter the URL to shorten in the "Enter URL to shorten" field.
(Optional) Add a custom shortcode (3-20 characters, letters and numbers only).
(Optional) Set a validity period in minutes (default: 30 minutes).
Click "Shorten URL" to generate the shortened link.
Copy the shortened URL using the copy button.

Viewing Statistics

Click the "Statistics" tab in the navigation.
View all shortened URLs with their analytics:

Original and shortened URLs
Creation and expiry dates
Active/Expired status
Total click count
Detailed click history with timestamps



URL Redirection

Access any shortened URL (e.g., http://localhost:3000/abc123).
Automatically redirects to the original URL (if not expired).
Click tracking is recorded automatically.
Handles errors for expired or non-existent URLs.

Project Structure
texturl-shortener-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Application assets
│   ├── components/        # Reusable components
│   │   └── ui/           # UI components from shadcn/ui
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── components.json        # shadcn/ui configuration
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
Key Components
URLShortenerPage

Main interface for URL shortening.
Handles form validation and submission.
Displays recently shortened URLs.
Includes copy-to-clipboard functionality.

StatisticsPage

Comprehensive analytics dashboard.
Monitors URL status.
Tracks clicks and history.
Features a responsive card-based layout.

RedirectHandler

Manages shortened URL redirection.
Tracks clicks and analytics.
Handles errors for expired/invalid URLs.
Automatically redirects to original URLs.

Data Storage
The application uses localStorage for data persistence:

shortenedUrls: Stores an array of all shortened URL objects.
Automatic Sync: Data is saved and loaded automatically.
Browser-based: Data persists across browser sessions.

Data Structure
javascript{
  id: timestamp,
  originalUrl: "https://example.com/long-url",
  shortcode: "abc123",
  shortUrl: "http://localhost:3000/abc123",
  createdAt: "2025-08-05T03:56:41.000Z",
  expiresAt: "2025-08-05T04:26:41.000Z",
  clicks: 2,
  clickData: [
    {
      timestamp: "2025-08-05T03:56:59.000Z",
      source: "Direct",
      location: "Unknown"
    }
  ]
}
Validation Rules
URL Validation

Must be a valid URL format.
Must include protocol (http:// or https://).
Required field.

Custom Shortcode Validation

3-20 characters in length.
Alphanumeric characters only (a-z, A-Z, 0-9).
Must be unique across all existing shortcodes.
Optional field.

Validity Period Validation

Must be a positive integer.
Represents minutes until expiry.
Defaults to 30 minutes if not specified.

Error Handling
Client-side Validation

Real-time form validation.
User-friendly error messages.
Input format verification.
Uniqueness checking.

Runtime Error Handling

Detects expired URLs.
Handles invalid shortcodes.
Manages network errors.
Provides graceful fallback behaviors.

Browser Compatibility

Modern Browsers: Chrome, Firefox, Safari, Edge.
Mobile Responsive: Works on all screen sizes.
JavaScript Required: Client-side application.
localStorage Support: Required for data persistence.

Development Scripts
bash# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
Production Deployment
Build the Application
bashpnpm run build
Deploy the dist Folder
The built application in the dist folder can be deployed to any static hosting service.
Troubleshooting
Common Issues

Port 3000 Already in Use:

Stop other applications using port 3000.
Alternatively, modify the port in vite.config.js.


Dependencies Not Installing:

Clear node_modules: rm -rf node_modules.
Clear package lock: rm pnpm-lock.yaml.
Reinstall: pnpm install.


Application Not Loading:

Check the browser console for errors.
Ensure JavaScript is enabled.
Clear browser cache and localStorage.


URLs Not Redirecting:

Verify the shortened URL format.
Check if the URL has expired.
Ensure localStorage contains the URL data.



Support
For technical issues or questions:

Check the browser console for error messages.
Verify all dependencies are installed.
Ensure the development server is running on port 3000.
Clear browser cache and localStorage for data issues.

License
This project is developed for Affordmed Technologies Private Limited as part of the Campus Hiring Evaluation.
