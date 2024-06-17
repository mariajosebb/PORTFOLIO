const SIDE_PROJECT = [
  {
    title: "Travel App",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    github: "https://github.com/mariajosebb/random-frases",
    preview: "https://travelapp.becerrab.dev",
    stack: ["React", "TailwindCSS", "API"],
  },
  {
    title: "Shopi",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    github: "https://github.com/mariajosebb/random-frases",
    preview: "https://travelapp.becerrab.dev",
  },
  {
    title: "Google Clone",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    github: "https://github.com/mariajosebb/random-frases",
    preview: "https://travelapp.becerrab.dev",
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
              href={project.preview}
              target="_blank"
              type="button"
              className="inline-block  rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-800 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Github
            </a>
            <a
              href={project.preview}
              className="col-span-1 p-4 bg-[#d0dbdd] rounded cursor-pointer"
            >
              <i className="fa-solid fa-shop" />
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
