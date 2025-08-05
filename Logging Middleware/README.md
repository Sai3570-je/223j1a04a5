# Logging Middleware

This directory contains a simple logging middleware implementation for the Affordmed Campus Hiring Evaluation.

## Overview

The logging middleware provides a reusable function to capture and send logs to the evaluation server. It supports different log levels and can be used across both frontend and backend applications.

## Files

- `logger.js` - Main logging function implementation
- `package.json` - Node.js package configuration
- `README.md` - This documentation file

## Usage

### Basic Usage

```javascript
import log from './logger.js';

// Frontend logging
log("frontend", "info", "User clicked submit button");
log("frontend", "error", "Form validation failed");

// Backend logging (with package parameter)
log("backend", "fatal", "Database connection lost", "db");
log("backend", "warn", "High memory usage detected", "service");
```

### Log Levels

Supported log levels (must be lowercase):
- `debug` - Detailed information for debugging
- `info` - General information messages
- `warn` - Warning messages
- `error` - Error conditions
- `fatal` - Critical errors that may cause application failure

### Stack Types

- `frontend` - For client-side applications
- `backend` - For server-side applications

### Package Types (Backend Only)

When logging from backend, include the package parameter:
- `cache` - Caching related operations
- `controller` - Request controllers
- `cron` - Scheduled tasks
- `domain` - Business logic
- `handler` - Request handlers
- `repository` - Data access layer
- `route` - Routing logic
- `service` - Business services

## API Integration

The logger is designed to send logs to:
```
POST http://20.244.56.144/evaluation-service/logs
```

The actual API call is commented out in the implementation. To enable it:

1. Uncomment the fetch request in `logger.js`
2. Add proper authentication headers if required
3. Handle response appropriately

## Installation

```bash
npm install
```

## Example Integration

```javascript
// In your React component
import log from './path/to/logger.js';

const MyComponent = () => {
  const handleSubmit = async (data) => {
    try {
      log("frontend", "info", "Form submission started");
      
      // Your form submission logic
      const result = await submitForm(data);
      
      log("frontend", "info", "Form submitted successfully");
    } catch (error) {
      log("frontend", "error", `Form submission failed: ${error.message}`);
    }
  };

  return (
    // Your component JSX
  );
};
```

## Notes

- All log parameters must be in lowercase as per API constraints
- The package parameter is only required for backend logs
- Logs are currently output to console for demonstration
- In production, uncomment the API call section to send logs to the evaluation server

