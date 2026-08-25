import navLinks from "../data/navLinks";
import Logo from "../assets/img/logo.png";

function Header() {
  return (
    <header>
      <div className="absolute z-10 top-5 left-7.5 flex items-center gap-3">
        <img
          src={Logo}
          alt="Logo Jovi"
          className="w-9.5 h-9.5 object-contain"
        />
        <h1 className="font-le text-xl font-normal text-texto-principal">
          Jovi
        </h1>
      </div>

      <nav
        className="
          z-10 fixed flex justify-center items-center top-5 left-1/2 -translate-x-1/2 
          bg-transparente-escuro backdrop-blur-md rounded-full border border-borda 
          max-md:w-[90vw] max-md:p-2.5 max-md:gap-1.5 max-md:flex-wrap font-dream
        "
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="
              p-5 no-underline text-texto-principal bg-transparent transition-colors 
              duration-500 hover:text-azul-hover max-md:text-sm max-md:p-2.5
            "
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
