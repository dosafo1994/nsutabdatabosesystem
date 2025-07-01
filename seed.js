const userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];

if (!userAccounts.some(u => u.role === "headteacher")) {
  userAccounts.push({
    name: "Nsuta Head",
    phone: "0277272737",
    pin: "1234",
    role: "headteacher"
  });
  localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
}
