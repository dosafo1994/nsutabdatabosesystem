// Role-based access control for protected pages

const sessionRole = sessionStorage.getItem("role");

// Map expected page title to required role
const pageRoleMap = {
  // Headteacher-only pages
  "Headteacher Dashboard": "headteacher",
  "Manage Teacher Accounts": "headteacher",
  "Enroll Students": "headteacher",
  "Manage Teachers": "headteacher",
  "Term Settings": "headteacher",
  "Print Reports": "headteacher",
  "Update Profile": "headteacher",
  "Merged Score Review": "headteacher",

  // Teacher-only pages
  "Teacher Dashboard": "teacher",
  "Teacher Score Entry": "teacher",
  "SBA Entry Panel": "teacher",
  "Exam Score Entry": "teacher",

  // Shared / public pages
  "Login": null,
  "Welcome to Nsuta Portal": null
};

// Determine the role required for the current page
const currentTitle = document.title.trim();
const requiredRole = pageRoleMap[currentTitle];

// If page isn't listed, warn in console for dev awareness
if (requiredRole === undefined) {
  console.warn(`⚠️ Unrecognized page title in guard.js: "${currentTitle}"`);
}

// If page requires a role and session is missing or mismatched
if (requiredRole && (!sessionRole || sessionRole !== requiredRole)) {
  console.warn(`🔒 Access denied to "${currentTitle}" for role: ${sessionRole}`);
  location.href = "index.html"; // Redirect to welcome/login
}