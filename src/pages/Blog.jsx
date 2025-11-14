import React from "react";
import "./blog.css";

const blogData = [
  {
    id: 1,
    titulo: "5 destinos imperdibles para tu próximo viaje",
    categoria: "Inspiración",
    img: "/img/blog01.jpg",
    resumen:
      "Descubre los lugares que todo viajero debe visitar al menos una vez en la vida. Naturaleza, cultura y experiencias únicas.",
  },
  {
    id: 2,
    titulo: "Cómo encontrar vuelos baratos sin complicarte",
    categoria: "Tips de viaje",
    img: "/img/blog02.jpg",
    resumen:
      "Aprende a usar alertas, comparadores y estrategias para conseguir los mejores precios del mercado.",
  },
  {
    id: 3,
    titulo: "Viajar solo: una experiencia que te cambia la vida",
    categoria: "Inspiración",
    img: "/img/blog03.jpg",
    resumen:
      "Viajar solo no es estar solo. Es una oportunidad para conectar contigo mismo y con personas increíbles alrededor del mundo.",
  },
  {
    id: 4,
    titulo: "10 cosas que debes saber antes de visitar el Caribe",
    categoria: "Guías",
    img: "/img/blog04.jpg",
    resumen:
      "Playas, clima, actividades y recomendaciones para que vivas un viaje perfecto sin contratiempos.",
  },
  {
    id: 5,
    titulo: "Planea tu viaje con bajo presupuesto",
    categoria: "Tips de viaje",
    img: "/img/blog05.jpg",
    resumen:
      "No necesitas gastar tanto para vivir un viaje inolvidable. Aquí te mostramos cómo optimizar tu presupuesto.",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">TravelView Magazine</h1>
      <p className="blog-subtitle">
        Inspiración, guías, tips y experiencias para viajeros reales.
      </p>

      <div className="blog-grid">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.img} alt={post.titulo} className="blog-img" />

            <div className="blog-info">
              <span className="blog-cat">{post.categoria}</span>
              <h3 className="blog-item-title">{post.titulo}</h3>
              <p className="blog-resumen">{post.resumen}</p>

              <button className="blog-btn">Leer más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
