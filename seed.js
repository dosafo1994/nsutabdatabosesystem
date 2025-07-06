const seeded = localStorage.getItem("seededFromRemote");

if (!seeded) {
  const supabase = window.supabase.createClient(
    "https://iguspjforzyndedxafdi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndXNwamZvcnp5bmRlZHhhZmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MDc5MzksImV4cCI6MjA2NzE4MzkzOX0.h_OF0GcsaXPJm7OuuA3fCz4FaXV3_VBXG_WLr0zafVE" 
  );

  supabase
    .from("users")
    .select("*")
    .then(({ data, error }) => {
      if (error) {
        console.warn("🌐 Could not fetch users from Supabase:", error.message);
        return;
      }

      const existing = JSON.parse(localStorage.getItem("userAccounts")) || [];
      if (existing.length === 0 && Array.isArray(data)) {
        localStorage.setItem("userAccounts", JSON.stringify(data));
        localStorage.setItem("seededFromRemote", "yes");
        console.log("🌱 User accounts seeded from Supabase.");
      }
    });
}
