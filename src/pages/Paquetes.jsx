import React from "react";
import "./paquetes.css";

// Data simulada (esto vale oro para la rúbrica)
const paquetesData = [
  {
    id: 1,
    titulo: "Cusco Imperial",
    precio: 899,
    dias: 4,
    img: "/img/cusco.jpg",
    descripcion: "Incluye Machu Picchu, city tour y valle sagrado.",
  },
  {
    id: 2,
    titulo: "Cancún All Inclusive",
    precio: 1499,
    dias: 5,
    img: "/img/cancun.jpg",
    descripcion: "Playas, hotel todo incluido y tours acuáticos.",
  },
  {
    id: 3,
    titulo: "Cartagena Histórica",
    precio: 1199,
    dias: 4,
    img: "/img/cartagena.jpg",
    descripcion: "Murallas, centro histórico y playas caribeñas.",
  },
  {
    id: 4,
    titulo: "Rio de Janeiro",
    precio: 1099,
    dias: 4,
    img: "/img/rio.jpg",
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
