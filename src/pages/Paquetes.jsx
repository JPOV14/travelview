// src/pages/Paquetes.jsx
import "./paquetes.css";

import cuscoImg from "../assets/img/cusco.jpg";
import cancunImg from "../assets/img/cancun.jpg";
import cartagenaImg from "../assets/img/cartagena.jpg";
import rioImg from "../assets/img/rio.jpg";
// Si en alguno te marca error, cambia .jpg por .png SOLO en ese import.

const paquetesData = [
  {
    id: 1,
    titulo: "Cusco Imperial",
    precio: 899,
    dias: 4,
    img: cuscoImg,
    descripcion: "Incluye Machu Picchu, city tour y valle sagrado.",
  },
  {
    id: 2,
    titulo: "Cancún All Inclusive",
    precio: 1499,
    dias: 5,
    img: cancunImg,
    descripcion: "Playas, hotel todo incluido y tours acuáticos.",
  },
  {
    id: 3,
    titulo: "Cartagena Histórica",
    precio: 1199,
    dias: 4,
    img: cartagenaImg,
    descripcion: "Murallas, centro histórico y playas caribeñas.",
  },
  {
    id: 4,
    titulo: "Rio de Janeiro",
    precio: 1099,
    dias: 4,
    img: rioImg,
    descripcion: "Cristo Redentor, Pan de Azúcar y Copacabana.",
  },
];

function Paquetes() {
  return (
    <div className="paq-container">
      <h1 className="paq-title">Paquetes de Viaje</h1>
      <p className="paq-subtitle">
        Descubre los destinos más solicitados del año.
      </p>

      <div className="paq-grid">
        {paquetesData.map((p) => (
          <div key={p.id} className="paq-card">
            <img src={p.img} alt={p.titulo} className="paq-img" />

            <div className="paq-info">
              <h3>{p.titulo}</h3>
              <p className="paq-desc">{p.descripcion}</p>

              <div className="paq-meta">
                <span>{p.dias} días</span>
                <span className="paq-precio">USD {p.precio}</span>
              </div>

              <button className="paq-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paquetes;
