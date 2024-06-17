const Header = () => {
  return (
    <header className="bg-white fixed top-0 z-10 w-full">
      <nav className="flex items-center justify-center gap-8 w-full p-4 font-semibold">
        <a className="px-2" href="#experiencia">
          Experiencia
        </a>
        <a className="px-2" href="#proyectos">
          Proyectos
        </a>
        <a className="px-2" href="#contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
