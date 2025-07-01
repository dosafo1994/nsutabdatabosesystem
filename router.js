// router.js — Central navigation helper for Nsuta Portal

function navigate(path) {
  // Optional: Verify session before navigating
  const role = sessionStorage.getItem("role");

  // If no role exists, block access to restricted pages
  const restrictedPages = [
    "dashboard.html",
    "score-entry.html",
    "report.html",
    "submission.html",
    "account.html",
    "term.html",
    "teachers.html",
    "profile.html"
  ];

  if (restrictedPages.includes(path) && !role) {
    alert("Please login first.");
    location.href = "index.html"; // homepage
    return;
  }

  // Navigate to requested page
  window.location.href = path;
}