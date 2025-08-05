/**
 * Simple Logging Middleware for Affordmed Evaluation.
 * This function simulates sending logs to a backend API.
 *
 * @param {string} stack - The stack from which the log originates (e.g., "frontend", "backend").
 * @param {string} level - The severity level of the log (e.g., "debug", "info", "warn", "error", "fatal").
 * @param {string} message - The log message.
 * @param {string} [pkg] - Optional: The package/module name (e.g., "cache", "controller"). Required for backend logs.
 */
const log = async (stack, level, message, pkg = null) => {
  const logData = {
    stack,
    level,
    message,
  };

  if (pkg) {
    logData.package = pkg;
  }

  // In a real application, you would send this data to the log API:
  // http://20.244.56.144/evaluation-service/logs
  console.log("--- LOGGING --- ");
  console.log(JSON.stringify(logData, null, 2));
  console.log("-----------------");

  try {
    // This is a placeholder for the actual API call.
    // const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Add Authorization header if required by the log API
    //   },
    //   body: JSON.stringify(logData),
    // });

    // if (!response.ok) {
    //   console.error(`Failed to send log: ${response.status} ${response.statusText}`);
    // }
  } catch (error) {
    console.error("Error sending log:", error);
  }
};

// Example Usage (for demonstration purposes):
// log("frontend", "info", "User navigated to home page.");
// log("backend", "error", "Database connection failed.", "db");

export default log;


