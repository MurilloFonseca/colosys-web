import { Link } from "react-router-dom";
import navLinks from "../data/navLinks";
import Logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none p-3 sm:p-5">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 pointer-events-auto">
        
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={Logo}
            alt="Logo Jovi"
            className="w-8 h-8 md:w-9.5 md:h-9.5 object-contain"
          />
          <h1 className="font-le text-lg md:text-xl font-normal text-texto-principal hidden sm:block">
            Jovi
          </h1>
        </div>

        <nav
          className="
            flex items-center justify-center gap-0.5 sm:gap-2
            bg-transparente-escuro backdrop-blur-md rounded-full border border-borda 
            px-2 py-1.5 sm:px-6 sm:py-2.5 font-dream text-[11px] sm:text-sm
            min-w-0 overflow-x-auto whitespace-nowrap
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                px-1.5 py-1 sm:px-3 sm:py-2 no-underline text-texto-principal bg-transparent 
                transition-colors duration-500 hover:text-azul-hover shrink-0
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/"
          className="
            shrink-0 px-3 py-1.5 sm:px-5 sm:py-2 
            text-texto-principal bg-transparente-escuro backdrop-blur-md 
            rounded-full border border-borda font-dream text-[11px] sm:text-sm no-underline 
            transition-colors duration-500 hover:bg-azul-hover hover:text-[#3f4b57]
          "
        >
          Sair
        </Link>

      </div>
    </header>
  );
}

export default Header;