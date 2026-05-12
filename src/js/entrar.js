const users = JSON.parse(localStorage.getItem("users")) || [];
localStorage.setItem("users", JSON.stringify(users));

async function loginUser(e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.email === email);

  if (user === undefined) {
    e.preventDefault();
    alert("Usuário inexistente");

    return;
  }

  const correctPw = await validateHash(password, user.password);

  if (!correctPw) {
    e.preventDefault();
    alert("Senha inválida");

    return;
  }

  const loggedUser = { username: user.name, email: user.email };
  localStorage.setItem("user", JSON.stringify(loggedUser));
}

const user = JSON.parse(localStorage.getItem("user"));
if (user !== null) window.location.replace("../pages/principal.html");
