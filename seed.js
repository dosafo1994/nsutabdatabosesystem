const seeded = localStorage.getItem("seededFromRemote");

if (!seeded) {
  fetch("accounts.json")
    .then(res => res.json())
    .then(users => {
      const existing = JSON.parse(localStorage.getItem("userAccounts")) || [];
      if (existing.length === 0) {
        localStorage.setItem("userAccounts", JSON.stringify(users));
        localStorage.setItem("seededFromRemote", "yes");
        console.log("🌱 Headteacher account seeded from GitHub.");
      }
    })
    .catch(err => {
      console.warn("🌐 Could not fetch accounts.json:", err);
    });
}
