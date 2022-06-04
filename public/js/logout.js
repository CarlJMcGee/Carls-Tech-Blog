const logoutHandler = async (e) => {
  e.preventDefault();

  console.log("Button pressed");

  try {
    const logout = await fetch("/api/users/logout", {
      method: "POST",
    });

    logout.ok ? document.location.replace("/") : window.alert("Logout Failed");
  } catch (err) {
    if (err) throw err;
  }
};

$(".logout-btn").click(logoutHandler);
