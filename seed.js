<script>
  const storedAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];

  const headExists = storedAccounts.some(u => u.role === "headteacher");

  if (!headExists) {
    storedAccounts.push({
      name: "Nsuta Head",
      phone: "0277272737",
      pin: "1234",
      role: "headteacher"
    });
    localStorage.setItem("userAccounts", JSON.stringify(storedAccounts));
    console.log("✅ Default headteacher account seeded.");
  }
</script>
