import { useState } from "react";

function Contato() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [nome, setNome] = useState(user?.nome ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lista = JSON.parse(localStorage.getItem("mensagens") || "[]");

    lista.push({ nome, email, msg });

    localStorage.setItem("mensagens", JSON.stringify(lista));

    alert("Sua Mensagem foi enviada!\nMuito obrigado pelo seu feedback");
  };

  return (
    <>
      <section className="colosys py-20 px-5" id="form">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <h1 className="text-texto-principal font-le text-5xl text-center mb-4">
            Entre em contato
          </h1>

          <p className="text-texto-principal font-le text-[20px] text-center mb-12 ">
            Ficou com alguma dúvida? Fale com a nossa equipe.
          </p>

          <div className="flex-1 flex flex-col gap-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Seu nome"
                defaultValue={nome}
                onChange={(e) => setNome(e.target.value)}
                autoComplete="name"
                className="
                  flex-1 p-4 rounded-xl border border-texto-principal text-texto-principal 
                  outline-none focus:ring-2 focus:ring-azul-hover font-dream
                "
                required
              />
            </div>

            <input
              type="email"
              placeholder="Seu e-mail"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="
                p-4 rounded-xl border border-texto-principal text-texto-principal 
                outline-none focus:ring-2 focus:ring-azul-hover font-dream
              "
              required
            />

            <textarea
              placeholder="Digite sua mensagem..."
              rows="5"
              onChange={(e) => setMsg(e.target.value)}
              className="
                p-4 rounded-xl border border-texto-principal text-texto-principal 
                outline-none focus:ring-2 focus:ring-azul-hover font-dream
              "
            ></textarea>

            <button
              type="submit"
              className="
                p-4 rounded-xl bg-texto-principal text-azul-profundo font-le
                hover:bg-transparente-escuro hover:text-azul-hover duration-500 cursor-pointer  
              "
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contato;
