async function hashPassword(password) {
  const encoder = new TextEncoder();

  const hash = await crypto.subtle.digest("SHA-256", encoder.encode(password));

  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function validateHash(password, hash) {
  const hashed = await hashPassword(password);

  return hashed === hash;
}
