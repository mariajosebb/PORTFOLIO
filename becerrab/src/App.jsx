import "./App.css";
import Picture from "./assets/img/profilepicture.jpg";
import Logo from "./assets/img/1.svg";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <div className="bg-[#F6F6F3] w-full h-full">
        <Header />
        <main className="mt-12 w-full h-full">
          <section className="grid max-w-screen-2xl mx-auto md:grid-cols-3 gap-4">
            <h1 className="text-3xl md:text-5xl font-normal border-b-2 border-[#b47655] md:col-span-2 p-4 relative md:before:content-[''] md:before:absolute md:before:w-[50px] md:before:h-[130px] md:before:left-[-60px] md:before:top-[15px] md:before:bg-[#b47655]">
              Maria José Becerra Borrero
            </h1>
            <div
              className="col-span-1 row-span-2 w-full h-0 pb-[100%] rounded-full bg-cover bg-no-repeat bg-top border-[30px] border-[#F6F6F3] -mb-[50px] z-0"
              style={{
                backgroundImage: `url(${Picture})`,
              }}
            />
            <p className="text-right font-bold text-lg md:text-2xl col-span-2">
              FRONTEND JUNIOR <br />
              DEVELOPER
            </p>
            <div className="col-span-1 flex flex-col gap-4 text-lg">
              {/* <div><i class="fa-solid fa-phone mr-2"></i> +573005524216</div> */}
              <div>
                <i className="fa-solid fa-location-dot mr-2" /> Medellin -
                Colombia
              </div>
              <div>
                <i className="fa-solid fa-envelope mr-2" /> maria@becerrab.dev
              </div>
            </div>
            <div className="bg-[#d0dbdd] p-4 rounded-lg col-span-3 text-justify">
              <div className="flex justify-center items-center gap-4">
                <i className="fa-regular fa-user fa-lg" />
                <h2 className="text-3xl font-bold">Sobre mí</h2>
              </div>
              <p className="text-lg">
                Desarrolladora Frontend Junior con experiencia en creación de
                páginas web estáticas, apasionada por el diseño web y la
                implementación de interfaces de usuario intuitivas y eficientes.
                Con sólidos conocimientos en HTML, CSS, JavaScript y actualmente
                profundizando en React. Comprometida con el aprendizaje continuo
                y la aplicación de nuevas tecnologías para desarrollar
                soluciones digitales que mejoren la experiencia del usuario.
              </p>
            </div>
          </section>
          <section className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2
                id="experiencia"
                className="text-3xl text-[#b47655] font-bold"
              >
                Experiencia Laboral
              </h2>
              <p className="font-bold text-lg">Desarrollador Web Freelance</p>
              <p>(Julio 2023 - Presente) Umana Consultants</p>
              <ul className="space-y-2 text-lg">
                <li>
                  Desarrollé y mantuve páginas web estáticas, asegurando
                  compatibilidad cross-browser y optimización para motores de
                  búsqueda.
                </li>
                <li>
                  Colaboré estrechamente con el equipo de diseño para
                  implementar interfaces visuales según los requerimientos del
                  proyecto, utilizando HTML, CSS y JavaScript.
                </li>
                <li>
                  Contribuí en la mejora continua del sitio web mediante la
                  implementación de mejores prácticas de desarrollo y código
                  limpio.
                </li>
              </ul>
              <div className="border-b-2 border-[#b47655] w-[200px]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl text-[#b47655] font-bold">Educación</h2>
              <p className="font-bold text-lg">Abogado</p>
              <p className="text-lg">
                (2014 - 2019) Universidad Católica del Táchira, Venezuela
              </p>
              <div className="border-b-2 border-[#b47655] w-[200px]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl text-[#b47655] font-bold">
                Certificaciones
              </h2>
              <ul className="space-y-2 text-lg">
                <li>Curso Profesional de CSS Grid Layout, Platzi, mar. 2024</li>
                <li>Curso Práctico de HTML y CSS, Platzi, mar. 2024</li>
                <li>Curso de CSS Grid Básico, Platzi, mar. 2024</li>
                <li>
                  Curso de Responsive Design: Maquetación Mobile First, Platzi,
                  mar. 2024
                </li>
                <li>Curso Definitivo de HTML y CSS, Platzi, feb. 2024</li>
                <li>Curso Práctico de Frontend Developer, Platzi, feb. 2024</li>
                <li>Curso de Frontend Developer, Platzi, feb. 2024</li>
                <li>
                  Front End Development Libraries, freeCodeCamp, sept. 2023
                </li>
                <li>Responsive Web Design, freeCodeCamp, ago. 2023</li>
                <li>
                  JavaScript Algorithms and Data Structures, freeCodeCamp, jun.
                  2023
                </li>
              </ul>
              <div className="border-b-2 border-[#b47655] w-[200px]" />
            </div>
            <div className="space-y-4 col-span-1">
              <h2 className="text-3xl text-[#b47655] font-bold">Skills</h2>
              <ul className="space-y-2 text-lg">
                <li>Lenguajes de Programación: HTML, CSS, JavaScript</li>
                <li>Frameworks/Librerías: React</li>
                <li>
                  Herramientas y Prácticas: Diseño Responsive, Mobile First, CSS
                  Grid, Flexbox, Git, GitHub
                </li>
                <li>Idiomas: Español (Nativo), Inglés (B2)</li>
              </ul>
            </div>
          </section>
          <Projects />
          <img
            src={Logo}
            alt="logo"
            className="block mx-auto w-[350px] h-[350px]"
          />
          <button className="text-lg cursor-pointer mx-auto bg-green-400 w-12 h-12 rounded-lg">
            Disponible para trabajar
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
