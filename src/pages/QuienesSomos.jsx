// src/pages/QuienesSomos.jsx
import "./QuienesSomos.css";

// usamos una sola imagen para todo el equipo (team01)
// Si te sale error en la consola, cambia SOLO la extensión a .png
import teamImg1 from "../assets/img/team01.jpg";
import teamImg2 from "../assets/img/team02.jpg";
import teamImg3 from "../assets/img/team03.jpg";
import teamImg4 from "../assets/img/team04.jpg";

function QuienesSomos() {
  return (
    <div className="nos-container">
      <section className="nos-hero">
        <h1 className="nos-title">Sobre TravelView</h1>
        <p className="nos-subtitle">
          Creamos experiencias de viaje únicas, accesibles y diseñadas para todo
          tipo de viajeros.
        </p>
      </section>

      <section className="nos-section">
        <h2 className="nos-header">Nuestra misión</h2>
        <p className="nos-text">
          Conectar a las personas con los destinos más increíbles del mundo a
          través de una plataforma intuitiva, confiable y visualmente atractiva.
          Buscamos democratizar los viajes, facilitando la toma de decisiones
          mediante contenido relevante, inspiración, herramientas digitales y
          servicios prácticos.
        </p>
      </section>

      <section className="nos-section">
        <h2 className="nos-header">Nuestra visión</h2>
        <p className="nos-text">
          Ser la plataforma de viajes más confiable de Latinoamérica, reconocida
          por ofrecer experiencias completas que combinan inspiración,
          planificación inteligente y una comunidad global de viajeros.
        </p>
      </section>

      <section className="nos-team">
        <h2 className="nos-header">Nuestro equipo</h2>
        <div className="nos-grid">
          <div className="nos-card">
            <img src={teamImg1} alt="Miembro del equipo" />
            <h3>Jesús Abel Ochoa Mendoza</h3>
            <p>
              Coordinador de proyecto, diseño de la experiencia y visión del
              proyecto TravelView.
            </p>
          </div>

          <div className="nos-card">
            <img src={teamImg2} alt="Miembro del equipo" />
            <h3>David Nestor Piedra Bustamante </h3>
            <p>Desarrollo Frontend, React y estructura del sitio.</p>
          </div>

          <div className="nos-card">
            <img src={teamImg3} alt="Miembro del equipo" />
            <h3>Fiorela Clariza Quispe Quispe</h3>
            <p>Contenido visual, redacción, diseño responsivo.</p>
          </div>

          <div className="nos-card">
            <img src={teamImg4} alt="Miembro del equipo" />
            <h3>Jhan Carlos Parra Narciso</h3>
            <p>Validación, pruebas funcionales y documentación del proyecto.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;
