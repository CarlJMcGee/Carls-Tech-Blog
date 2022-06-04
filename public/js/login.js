const loginFormHandeler = async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" },
      });

      res.ok ? document.location.replace("/") : window.alert("Failed to Login");
    } catch (err) {
      if (err) throw err;
    }
  }
};

$(".login-form").submit(loginFormHandeler);
