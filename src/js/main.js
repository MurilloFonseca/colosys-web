const user = JSON.parse(localStorage.getItem("user"));
if (user === null) window.location.replace("../../index.html");

function logout() {
  localStorage.removeItem("user");

  window.location.replace("../../index.html");
}
