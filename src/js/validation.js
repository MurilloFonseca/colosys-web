function validateName(name) {
  return name.length > 0 ? true : false;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return false;

  const user = users.find((u) => u.email === email);
  if (user !== undefined) return false;

  return true;
}

function validatePassword(password) {
  const pwRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!pwRegex.test(password)) return false;

  return true;
}

function validateInfo(name, email, password) {
  return (
    validateName(name) && validateEmail(email) && validatePassword(password)
  );
}
