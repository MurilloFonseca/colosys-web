function validateName(name) {
  if (name.length <= 0) {
    alert("Nome inválido");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Email inválido");
    return false;
  }

  const user = users.find((u) => u.email === email);
  if (user !== undefined) {
    alert("Email já cadastrado");
    return false;
  }

  return true;
}

function validatePassword(password) {
  const pwRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!pwRegex.test(password)) {
    alert("Senha inválida");
    return false;
  }

  return true;
}

function validateInfo(name, email, password) {
  return (
    validateName(name) && validateEmail(email) && validatePassword(password)
  );
}
