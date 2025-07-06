function navigate(path) {
  const role = sessionStorage.getItem("role");

  const restrictedPages = [
    "dashboard.html",
    "score-entry.html",
    "report.html",
    "sba-entry.html",
    "student-dashboard.html",
    "merged-review.html",
    "term.html",
    "teachers.html",
    "profile.html"
  ];

  if (restrictedPages.includes(path) && !role) {
    alert("Please login first.");
    location.href = "index.html";
    return;
  }

  window.location.href = path;
}
const headteacherOnly = ["term.html", "teachers.html"];

if (headteacherOnly.includes(path) && role !== "headteacher") {
  alert("Access denied. Headteachers only.");
  return;
}

