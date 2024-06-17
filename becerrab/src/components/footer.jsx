const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-[#b47655] w-full h-[50px] pt-2 text-center"
    >
      <ul className="list-none p-0 space-x-4 inline-flex">
        <li>
          <a
            href="https://www.linkedin.com/in/maria-jose-becerra-547762253/"
            className="text-antiquewhite flex items-center"
          >
            <i className="icon fab fa-linkedin mr-2" /> Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mariajosebb"
            className="text-antiquewhite flex items-center"
          >
            <i className="icon fab fa-github mr-2" /> GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
