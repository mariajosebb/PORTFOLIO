const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-sm fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-center gap-8 w-full p-4 font-semibold">
        <a
          className="px-2 hover:text-[#b47655] transition duration-300 ease-in-out"
          href="#experiencia"
        >
          Experiencia
        </a>
        <a
          className="px-2 hover:text-[#b47655] transition duration-300 ease-in-out"
          href="#proyectos"
        >
          Proyectos
        </a>
        <a
          className="px-2 hover:text-[#b47655] transition duration-300 ease-in-out"
          href="#contacto"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
