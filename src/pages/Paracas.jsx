import { Link } from "react-router-dom";
import "../styles/destinos.css";

// IMÁGENES
import imgPrin from "../assets/img/Paracasimgprin.png";
import sec1 from "../assets/img/Paracasimgsec1.png";
import sec2 from "../assets/img/Paracasimgsec2.png";
import sec3 from "../assets/img/Paracasimgsec3.png";
import sec4 from "../assets/img/Paracasimgsec4.png";

export default function Paracas() {
  return (
    <div className="destino-page">

      <section className="destino-hero">
        <h1>Full Day Paracas – Ica</h1>
        <p className="precio">S/ 140.00 <span>por persona</span></p>

        <a 
          href="https://wa.me/51938540706?text=Hola,%20quiero%20información%20sobre%20el%20tour%20a%20Paracas"
          className="btn-principal"
          target="_blank"
          rel="noreferrer"
        >
          Reservar ahora
        </a>
      </section>

      <section className="galeria-principal">
        <img src={imgPrin} alt="Paracas" className="img-principal" />

        <div className="galeria-secundaria">
          <img src={sec1} alt="Paracas sec1" />
          <img src={sec2} alt="Paracas sec2" />
          <img src={sec3} alt="Paracas sec3" />
          <img src={sec4} alt="Paracas sec4" />
        </div>
      </section>

      <section className="destino-info">

        <div className="columna">
          <h2>Incluye</h2>
          <ul>
            <li>Transporte turístico ida y vuelta</li>
            <li>Guía oficial de turismo</li>
            <li>Desayuno a bordo</li>
            <li>Tour Islas Ballestas</li>
            <li>Visita al Candelabro</li>
            <li>Laguna Huacachina</li>
            <li>Tour en dunas de Ica</li>
            <li>Degustación en vitivinícola</li>
            <li>Botiquín + SOAT turístico</li>
          </ul>
        </div>

        <div className="columna">
          <h2>No incluye</h2>
          <ul>
            <li>Almuerzo</li>
            <li>Ingreso Islas Ballestas + SAT: S/ 20</li>
            <li>Paseo en tubulares S/ 35</li>
          </ul>

          <h2>Importante</h2>
          <ul>
            <li>Niños menores de 1 año no pueden ingresar a Ballestas.</li>
            <li>No apto para embarazadas en tubulares.</li>
          </ul>

          <div className="destino-btns">
            <Link to="/paquetes" className="btn-sec">Ver más paquetes</Link>
          </div>
        </div>

      </section>

    </div>
  );
}
