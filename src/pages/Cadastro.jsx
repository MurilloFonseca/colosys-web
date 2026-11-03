import { useNavigate, Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";
import { hashPassword } from "../utils/password";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("email inválido");

      setSenha("");

      return;
    }

    if (!validatePassword(senha)) {
      alert("senha inválida");

      setSenha("");

      return;
    }

    const hashedPassword = await hashPassword(senha);

    users.push({ nome, email, senha: hashedPassword });
    localStorage.setItem("users", JSON.stringify(users));

    const loggedUser = { nome: nome, email: email };
    localStorage.setItem("user", JSON.stringify(loggedUser));

    navigate("/principal");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-aurora">
      <main className="flex flex-col justify-center items-center h-screen text-texto-principal">
        <header className="absolute top-5 left-7.5 flex items-center gap-3">
          <img
            src={logoImg}
            alt="Logo Colosys"
            className="w-9.5 h-9.5 object-contain m-0"
          />
          <h1 className="font-le text-[20px] font-normal text-texto-principal">
            Cadastro
          </h1>
        </header>

        <section className="w-[90vw] md:w-[35vw] h-auto md:h-[70vh] p-10 flex flex-col justify-center items-center rounded-[10px] bg-transparente-escuro backdrop-blur-[10px] border border-borda">
          <h1 className="m-2.5 text-center font-le text-[28px] md:text-[32.5px] font-normal leading-tight">
            Crie sua conta:
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2.5 w-full font-dream text-left"
          >
            <label htmlFor="username" className="text-[14px]">
              Nome de usuário:
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setNome(e.target.value)}
              autoComplete="username"
              className="h-7.5 text-center text-texto-principal bg-transparente-escuro rounded-[50px] border border-borda focus:outline-none"
            />

            <label htmlFor="email" className="text-[14px]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-7.5 text-center text-texto-principal bg-transparente-escuro rounded-[50px] border border-borda focus:outline-none"
            />

            <label htmlFor="password" className="text-[14px]">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="off"
              className="h-7.5 text-center text-texto-principal bg-transparente-escuro rounded-[50px] border border-borda focus:outline-none"
            />

            <button
              type="submit"
              className="mt-2.5 h-10 text-texto-principal bg-transparente-escuro rounded-[100px] border border-borda cursor-pointer transition-colors duration-500 hover:text-[#3f4b57] hover:bg-azul-hover"
            >
              Criar Conta
            </button>
          </form>

          <Link
            to="/"
            className="mt-5 text-texto-principal text-[20px] no-underline font-dream transition-colors duration-500 hover:text-azul-hover"
          >
            Sair
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Cadastro;
