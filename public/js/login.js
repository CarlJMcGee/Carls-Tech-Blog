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

const signupFormHandeler = async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#pass-signup").value.trim();
  const passVerf = document.querySelector("#pass-verf").value.trim();

  if (email && username && password && passVerf) {
    console.log(`${email}, ${username}, ${password}, ${passVerf}`);
    if (password != passVerf) {
      alert(`Please Fill All Sign-Up Fields`);
      return;
    }
    try {
      const res = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      res.ok
        ? document.location.replace("/")
        : window.alert("Failed to Sign-Up");
    } catch (err) {
      if (err) throw err;
    }
  }
};

$(".login-form").submit(loginFormHandeler);

$(".signup-form").submit(signupFormHandeler);
