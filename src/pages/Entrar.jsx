import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../assets/img/logo.png';

function Entrar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/principal');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-aurora">
      <main className="flex flex-col justify-center items-center h-screen text-texto-principal">

        <header className="absolute top-5 left-7.5 flex items-center gap-3">
          <img src={logoImg} alt="Logo Colosys" className="w-9.5 h-9.5 object-contain m-0" />
          <h1 className="font-le text-[20px] font-normal text-texto-principal">Entrar</h1>
        </header>

        <section className="w-[90vw] md:w-[35vw] h-auto md:h-[70vh] p-10 flex flex-col justify-center items-center rounded-[10px] bg-transparente-escuro backdrop-blur-[10px] border border-borda">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h1 className="mb-6 mt-5 font-le text-[28px] md:text-[32.5px] font-normal leading-tight">
              DIGITE SEU NOME DE USUÁRIO E A SUA SENHA:
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full text-left font-dream">
              <label htmlFor="email" className="text-[14px]">Email:</label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="h-7.5 text-center text-texto-principal bg-transparente-escuro rounded-[50px] border border-borda focus:outline-none"
              />

              <label htmlFor="password" className="text-[14px]">Senha:</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                className="h-7.5 text-center text-texto-principal bg-transparente-escuro rounded-[50px] border border-borda focus:outline-none"
              />

              <button
                type="submit"
                className="mt-2.5 h-10 text-texto-principal bg-transparente-escuro rounded-[100px] border border-borda cursor-pointer transition-colors duration-500 hover:text-[#3f4b57] hover:bg-azul-hover"
              >
                Entrar
              </button>
            </form>

            <div className="mt-5 text-center">
              <Link
                to="/"
                className="text-texto-principal text-[20px] no-underline font-dream transition-colors duration-500 hover:text-azul-hover"
              >
                Sair
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Entrar;