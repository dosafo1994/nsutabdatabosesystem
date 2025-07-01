// Role-based access control for protected pages

const sessionRole = sessionStorage.getItem("role");

// Map expected page type to required role
const pageRoleMap = {
  "Headteacher Dashboard": "headteacher",
  "Teacher Score Entry": "teacher",
  "Manage Teacher Accounts": "headteacher",
  "Review Scores": "headteacher",
  "Print Reports": "headteacher",
  "Term Settings": "headteacher",
  "Manage Teachers": "headteacher",
  "Enroll Students": "headteacher",
  "Update Profile": "headteacher",
  "Login": null,
  "Welcome to Nsuta Portal": null
};

const currentTitle = document.title.trim();
const requiredRole = pageRoleMap[currentTitle];

// 🔐 If page requires a role and user is not logged in or mismatched, redirect to homepage
if (
  requiredRole &&
  (!sessionRole || sessionRole !== requiredRole)
) {
  location.href = "index.html"; // Welcome page is now index.html
}