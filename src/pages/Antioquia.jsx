import { Link } from "react-router-dom";
import "../styles/destinos.css";

// IMÁGENES
import imgPrin from "../assets/img/Antioquiaimgprin.png";
import sec1 from "../assets/img/Antioquiaimgsec1.png";
import sec2 from "../assets/img/Antioquiaimgsec2.png";
import sec3 from "../assets/img/Antioquiaimgsec3.png";
import sec4 from "../assets/img/Antioquiaimgsec4.png";

export default function Antioquia() {
  return (
    <div className="destino-page">

      <section className="destino-hero">
        <h1>Full Day Antioquía + Cieneguilla</h1>
        <p className="precio">S/ 60.00 <span>por persona</span></p>

        <a 
          href="https://wa.me/51938540706?text=Hola,%20quiero%20información%20del%20tour%20a%20Antioquía"
          className="btn-principal"
          target="_blank"
          rel="noreferrer"
        >
          Reservar ahora
        </a>
      </section>

      <section className="galeria-principal">
        <img src={imgPrin} alt="Antioquia" className="img-principal" />

        <div className="galeria-secundaria">
          <img src={sec1} alt="Antioquía sec1" />
          <img src={sec2} alt="Antioquía sec2" />
          <img src={sec3} alt="Antioquía sec3" />
          <img src={sec4} alt="Antioquía sec4" />
        </div>
      </section>

      <section className="destino-info">

        <div className="columna">
          <h2>Incluye</h2>
          <ul>
            <li>Transporte turístico</li>
            <li>Guía de turismo</li>
            <li>Visita al pueblito de colores</li>
            <li>Visita a Sisicaya</li>
            <li>Zona arqueológica Inca</li>
            <li>Degustaciones locales</li>
            <li>Botiquín + SOAT turístico</li>
          </ul>
        </div>

        <div className="columna">
          <h2>No incluye</h2>
          <ul>
            <li>Alimentación</li>
            <li>Pagos en zonas arqueológicas</li>
          </ul>

          <h2>Importante</h2>
          <ul>
            <li>Apto para adultos y niños.</li>
          </ul>

          <div className="destino-btns">
            <Link to="/paquetes" className="btn-sec">Ver más paquetes</Link>
          </div>
        </div>

      </section>

    </div>
  );
}
