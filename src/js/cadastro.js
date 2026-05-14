const users = JSON.parse(localStorage.getItem("users")) || [];
localStorage.setItem("users", JSON.stringify(users));

function addToUsers(item) {
  users.push(item);
  localStorage.setItem("users", JSON.stringify(users));
}

async function createUser(e) {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validateInfo(name, email, password)) {
    e.preventDefault();

    return;
  }

  const hashedPassword = await hashPassword(password);

  addToUsers({ name, email, password: hashedPassword });
}

const user = JSON.parse(localStorage.getItem("user"));
if (user !== null) window.location.replace("../pages/principal.html");
