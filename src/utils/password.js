export const hashPassword = async (password) => {
  const encoder = new TextEncoder();

  const hash = await crypto.subtle.digest("SHA-256", encoder.encode(password));

  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const validateHash = async (password, hash) => {
  const hashed = await hashPassword(password);

  return hashed === hash;
};
