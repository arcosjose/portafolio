import './App.css';

const perfil = {
  nombre: "José Arcos",
  rol: "Estudiante de ing. en tecnología de software",
  descripcion:
    "Me gusta el clash royale, bring me the horizon, java y las bases de datos",
  foto: "/badomens.jpg",
  email: "josearcoszet@gmail.com",
  github: "https://github.com/arcosjose",
};

const tecnologias = [
  "Java",
  "Python",
  "MariaDB",
];

const proyectos = [
  {
    titulo: "Max AI",
    descripcion: "Chat bot de telegram que da consejos y recomendaciones sobre la educación ambiental",
    herramientas: ["Python"],
    githubUrl: "https://github.com/arcosjose/max-ai-bot",
  },
  {
    titulo: "Notepad con paint",
    descripcion: "App de notas con paint",
    herramientas: ["Java"],
    githubUrl: "https://github.com/arcosjose/notepad-paint",
  },
  {
    titulo: "App de citas",
    descripcion: "Maqueta de aplicación tipo tinder",
    herramientas: ["Java"],
    githubUrl: "https://github.com/arcosjose/proyecto-app-de-citas",
  },
];

function App() {
  return (
    <div className="app">
      <main className="contenedor">
        <section id="inicio" className="hero">
          <div className="foto-wrapper">
            <img
              src={perfil.foto}
              alt={perfil.nombre}
              className="foto-perfil"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338bdf8'><path d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z'/></svg>";
              }}
            />
          </div>

          <div className="hero-texto">
            <h1>{perfil.nombre}</h1>
            <h2>{perfil.rol}</h2>
            <p>{perfil.descripcion}</p>

            <div className="botones">
              <a href="#proyectos" className="btn-azul">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn-borde">
                Contactar
              </a>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="seccion">
          <h3 className="titulo-seccion">Tecnologías y Herramientas</h3>
          <div className="grid-skills">
            {tecnologias.map((item, index) => (
              <div key={index} className="skill-card">
                <span className="punto-azul"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="seccion">
          <h3 className="titulo-seccion">Proyectos</h3>
          <div className="grid-proyectos">
            {proyectos.map((proyecto, index) => (
              <article key={index} className="proyecto-card">
                <h4>{proyecto.titulo}</h4>
                <p>{proyecto.descripcion}</p>
                <div className="tags">
                  {proyecto.herramientas.map((tech, i) => (
                    <span key={i} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="proyecto-links">
                  <a href={proyecto.githubUrl} target="_blank" rel="noreferrer">
                    Ver en GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="seccion contacto">
          <h3 className="titulo-seccion">Contacto</h3>
          <p>¿Te interesa trabajar conmigo o tienes alguna consulta? Encuéntrame aquí:</p>
          <div className="contacto-links">
            <a href={`mailto:${perfil.email}`} className="btn-azul">
              {perfil.email}
            </a>
            <a href={perfil.github} target="_blank" rel="noreferrer" className="btn-borde">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{perfil.nombre}</p>
      </footer>
    </div>
  );
}

export default App;