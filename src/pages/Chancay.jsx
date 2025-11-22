import { Link } from "react-router-dom";
import "../styles/destinos.css";

// IMÁGENES
import imgPrin from "../assets/img/Chancayimgprin.png";
import sec1 from "../assets/img/Chancayimgsec1.png";
import sec2 from "../assets/img/Chancayimgsec2.png";
import sec3 from "../assets/img/Chancayimgsec3.png";
import sec4 from "../assets/img/Chancayimgsec4.png";

export default function Chancay() {
  return (
    <div className="destino-page">

      <section className="destino-hero">
        <h1>Full Day Chancay + Huaral</h1>
        <p className="precio">S/ 100.00 <span>por persona</span></p>

        <a 
          href="https://wa.me/51938540706?text=Hola,%20quiero%20información%20del%20tour%20a%20Chancay"
          className="btn-principal"
          target="_blank"
          rel="noreferrer"
        >
          Reservar ahora
        </a>
      </section>

      <section className="galeria-principal">
        <img src={imgPrin} alt="Chancay" className="img-principal" />

        <div className="galeria-secundaria">
          <img src={sec1} alt="Chancay sec1" />
          <img src={sec2} alt="Chancay sec2" />
          <img src={sec3} alt="Chancay sec3" />
          <img src={sec4} alt="Chancay sec4" />
        </div>
      </section>

      <section className="destino-info">

        <div className="columna">
          <h2>Incluye</h2>
          <ul>
            <li>Transporte turístico ida y vuelta</li>
            <li>Guía de turismo</li>
            <li>Visita al Castillo de Chancay</li>
            <li>Visita Eco Truly Park</li>
            <li>Show pirata</li>
            <li>Degustación de vinos y piscos</li>
          </ul>
        </div>

        <div className="columna">
          <h2>No incluye</h2>
          <ul>
            <li>Almuerzo</li>
            <li>Entrada Eco Truly Park S/ 18</li>
            <li>Entrada Huando S/ 3</li>
          </ul>

          <h2>Importante</h2>
          <ul>
            <li>Niños menores de 4 años no pagan, pero van cargados.</li>
          </ul>

          <div className="destino-btns">
            <Link to="/paquetes" className="btn-sec">Ver más paquetes</Link>
          </div>
        </div>

      </section>

    </div>
  );
}
