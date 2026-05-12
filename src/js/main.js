const user = JSON.parse(localStorage.getItem("user"));
if (user === null) window.location.replace("../../index.html");

document.getElementById("todo").innerHTML = `
  <p>username: ${user.username}</p>
  <p>email: ${user.email}</p>`;

function logout() {
  localStorage.removeItem("user");

  window.location.replace("../../index.html");
}
