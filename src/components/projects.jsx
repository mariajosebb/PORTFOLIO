const SIDE_PROJECT = [
  {
    title: "Travel App",
    description:
      "Aplicación web diseñada para la renta de casas y apartamentos en diversos destinos turísticos. La plataforma ofrece una interfaz intuitiva y visualmente atractiva donde los usuarios pueden explorar y reservar alojamientos en ciudades icónicas y lugares exóticos.",
    github: "https://github.com/mariajosebb/CursoTravel",
    preview: "https://travel-app.becerrab.dev/",
    stack: ["React", "TailwindCSS", "API"],
  },
  {
    title: "Shopi",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    github: "https://github.com/mariajosebb/shopi",
    preview: "https://shopi.becerrab.dev/",
  },
  {
    title: "Google Clone",
    description:
      "Página web que replica la apariencia y el diseño de la página de inicio de Google. La página presenta el logotipo de Google, una barra de búsqueda simplificada y algunos elementos de diseño básicos que se encuentran en la página original.",
    github: "https://github.com/mariajosebb/Google-Clone",
    preview: "https://google.becerrab.dev/",
  },
  {
    title: "To Do App",
    description:
      "Aplicación web de tareas que permite a los usuarios organizar y gestionar sus pendientes de manera sencilla y efectiva.",
    github: "https://github.com/mariajosebb/Todo-app-",
    preview: "https://todo-app.becerrab.dev/",
  },
  {
    title: "Pomodoro",
    description:
      "Herramienta que implementa la Técnica Pomodoro, un método de gestión del tiempo popularizado por Francesco Cirillo. La herramienta permite a los usuarios establecer temporizadores para intervalos de trabajo enfocados de 25 minutos, seguidos de breves descansos de 5 minutos.",
    github: "https://github.com/mariajosebb/pomodoro",
    preview: "https://pomodoro.becerrab.dev/",
  },
  {
    title: "Calculator",
    description:
      "Calculadora web básica que permite a los usuarios realizar las operaciones matemáticas fundamentales: suma, resta, multiplicación y división. La calculadora presenta una interfaz simple y fácil de usar, ideal para usuarios que buscan una herramienta rápida y confiable para realizar cálculos básicos.",
    github: "https://github.com/mariajosebb/Calculator",
    preview: "https://calculator.becerrab.dev/",
  },
  {
    title: "Random Quotes",
    description:
      "Página web que muestra frases aleatorias al azar cada vez que se recarga la página o se hace click en 'New Quote'.",
    github: "https://github.com/mariajosebb/random-frases",
    preview: "https://random-phrases.becerrab.dev/",
  },
];

const Projects = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-laptop-code fa-xl" />
        <p id="proyectos" className="text-3xl text-[#b47655] font-bold p-4">
          Proyectos
        </p>
      </div>
      <div className="grid max-w-screen-2xl mx-auto grid-cols-2 gap-4 p-8">
        {SIDE_PROJECT.map((project, index) => (
          <div
            key={index}
            className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
          >
            <h5 className="mb-2 text-xl font-medium leading-tight">
              {project.title}
            </h5>
            <p className="mb-4 text-base">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              type="button"
              className="inline-block border border-[#d0dbdd] rounded p-2 mr-4 text-xs uppercase text-gray-800 "
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <i class="fa-brands fa-github mr-2"></i>
              Github
            </a>
            <a
              href={project.preview}
              className="p-2 border border-[#d0dbdd] bg-[#d0dbdd] rounded cursor-pointer text-xs uppercase"
            >
              <i className="fa-solid fa-code mr-2"></i>
              Preview
            </a>
          </div>
        ))}
        {/* <button className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer">
          <i className="fa-solid fa-shop" />
          Travel
        </button>
        <button className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer">
          <i className="fa-solid fa-store" />
          Shopi
        </button>
        <a
          href="https://github.com/mariajosebb/random-frases"
          className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer"
        >
          <i className="fa-solid fa-quote-left" />
          Random Quotes
        </a>
        <a
          href="https://mariajosebb.github.io/pomodoro/"
          className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer"
        >
          <i className="fa-regular fa-clock" />
          Pomodoro
        </a>
        <button className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer">
          <i className="fa-solid fa-list" />
          To Do app
        </button>
        <a
          href="https://mariajosebb.github.io/Google-Clone/"
          className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer"
        >
          <i className="fa-brands fa-google" />
          Clon Google
        </a> */}
      </div>
    </section>
  );
};
export default Projects;
