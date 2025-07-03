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
  "Terminal Report": "headteacher",        // ✅ Newly added for report.html

  // Teacher-only pages
  "Teacher Dashboard": "teacher",
  "Teacher Score Entry": "teacher",
  "SBA Entry Panel": "teacher",
  "Exam Score Entry": "teacher",
  "Assignment Publisher": "teacher",       // ✅ If this page has its own title
  "Student Score Viewer": "teacher",       // ✅ For review pages if any

  // Student-only pages
  "Student Dashboard": "student",          // ✅ Protect student-dashboard.html
  "Student Login": null,                   // Login is shared, no role

  // Shared / public pages
  "Login": null,
  "Welcome | Nkawkaw Nsuta B Basic School": null // ✅ Match your actual index.html title
};

// Determine the role required for the current page
const currentTitle = document.title.trim();
const requiredRole = pageRoleMap[currentTitle];

// Warn if title isn’t recognized (developer awareness)
if (requiredRole === undefined) {
  console.warn(`⚠️ Unrecognized page title in guard.js: "${currentTitle}"`);
}

// Redirect if session role mismatched
if (requiredRole && (!sessionRole || sessionRole !== requiredRole)) {
  console.warn(`🔒 Access denied to "${currentTitle}" for role: ${sessionRole}`);
  location.href = "index.html"; // Redirect to welcome/login
}
