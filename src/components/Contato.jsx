function Contato() {
    return (
        <>
            <section className="colosys py-20 px-5" id="form">
                <div className="max-w-5xl mx-auto">

                    <h1 className="text-texto-principal font-le text-5xl text-center mb-4">
                        Entre em contato
                    </h1>

                    <p className="text-texto-principal font-calm text-[20px] text-center mb-12">
                        Ficou com alguma dúvida? Fale com a nossa equipe.
                    </p>

                    <form className="flex-1 flex flex-col gap-5">

                        <div className="flex gap-5">
                            <input
                                type="text"
                                placeholder="Seu nome"
                                className="flex-1 p-4 rounded-xl border border-texto-principal text-texto-principal outline-none focus:ring-2 focus:ring-black"
                            />

                            <input
                                type="text"
                                placeholder="Seu sobrenome"
                                className="flex-1 p-4 rounded-xl border border-texto-principal text-texto-principal outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="p-4 rounded-xl border border-texto-principal text-texto-principal outline-none focus:ring-2 focus:ring-black"
                        />

                        <textarea
                            placeholder="Digite sua mensagem..."
                            rows="5"
                            className="p-4 rounded-xl border border-texto-principal text-texto-principal outline-none focus:ring-2 focus:ring-black"
                        ></textarea>

                        <button
                            type="submit"
                            className="p-4 rounded-xl bg-texto-principal text-azul-profundo font-calm hover:bg-transparente-escuro hover:text-azul-hover duration-500"
                        >
                            Enviar mensagem
                        </button>

                    </form>

                </div>
            </section>
        </>
    );
}

export default Contato;