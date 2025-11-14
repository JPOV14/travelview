import React from "react";
import "./QuienesSomos.css";

function QuienesSomos() {
  return (
    <div className="nos-container">

      <section className="nos-hero">
        <h1 className="nos-title">Sobre TravelView</h1>
        <p className="nos-subtitle">
          Creamos experiencias de viaje únicas, accesibles y diseñadas para todo tipo de viajeros.
        </p>
      </section>

      <section className="nos-section">
        <h2 className="nos-header">Nuestra misión</h2>
        <p className="nos-text">
          Conectar a las personas con los destinos más increíbles del mundo a través de una
          plataforma intuitiva, confiable y visualmente atractiva. Buscamos democratizar los
          viajes, facilitando la toma de decisiones mediante contenido relevante, inspiración,
          herramientas digitales y servicios prácticos.
        </p>
      </section>

      <section className="nos-section">
        <h2 className="nos-header">Nuestra visión</h2>
        <p className="nos-text">
          Ser la plataforma de viajes más confiable de Latinoamérica, reconocida por ofrecer
          experiencias completas que combinan inspiración, planificación inteligente y una
          comunidad global de viajeros.
        </p>
      </section>

      <section className="nos-team">
        <h2 className="nos-header">Nuestro equipo</h2>
        <div className="nos-grid">
          <div className="nos-card">
            <img src="/img/team01.jpg" alt="Miembro del equipo" />
            <h3>Abel Ochoa (Integrante 1)</h3>
            <p>Coordinación general, diseño de la experiencia y visión del proyecto TravelView.</p>
          </div>

          <div className="nos-card">
            <img src="/img/team02.jpg" alt="Miembro del equipo" />
            <h3>Integrante 2</h3>
            <p>Desarrollo Frontend, React y estructura del sitio.</p>
          </div>

          <div className="nos-card">
            <img src="/img/team03.jpg" alt="Miembro del equipo" />
            <h3>Integrante 3</h3>
            <p>Contenido visual, redacción, diseño responsivo.</p>
          </div>

          <div className="nos-card">
            <img src="/img/team04.jpg" alt="Miembro del equipo" />
            <h3>Integrante 4</h3>
            <p>Validación, pruebas funcionales y documentación del proyecto.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;
