import { Link } from 'react-router-dom';
import logoImg from '../assets/img/logo.png';
import celularImg from '../assets/img/CelularInicio.png';

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-aurora">

      <header className="absolute top-5 left-7.5 flex items-center gap-3">
        <img src={logoImg} alt="Logo Colosys" className="w-9.5 h-9.5 object-contain m-0" />
        <h1 className="font-le text-[20px] font-normal text-texto-principal">Colosys</h1>
      </header>

    
      <main className="flex flex-col justify-center items-center h-screen text-texto-principal">
        <section className="w-[90vw] md:w-[70vw] h-auto md:h-[70vh] p-10 flex flex-col md:flex-row justify-between items-center text-left rounded-[10px] bg-transparente-escuro backdrop-blur-[10px] border border-borda gap-7.5 md:gap-0">
       
          <div className="flex flex-col">
            <h1 className="ml-0 md:ml-7.5 font-le text-[42px] md:text-[65px] font-normal leading-tight">
              SEJA BEM-VINDO(A)!
            </h1>
            <p className="ml-0 md:ml-7.5 mt-2.5 mb-5 font-dream text-[20px] md:text-[30px] font-normal">
              "Capture momentos com simplicidade."
            </p>

            <div className="flex gap-2.5 font-calm font-normal">
              <Link
                to="/entrar"
                className="ml-0 md:ml-7.5 p-3 text-texto-principal no-underline text-[35px] font-bold transition-colors duration-500 hover:text-azul-hover"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="ml-0 md:ml-7.5 p-3 text-texto-principal no-underline text-[35px] font-bold transition-colors duration-500 hover:text-azul-hover"
              >
                Cadastro
              </Link>
            </div>
          </div>

          <div className="imagem">
            <img
              src={celularImg}
              alt="Preview do Celular"
              className="w-full max-w-55 md:max-w-87.5 h-auto object-contain"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Index;