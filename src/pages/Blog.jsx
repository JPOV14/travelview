// src/pages/Blog.jsx
import "./blog.css";

import blog01Img from "../assets/img/blog01.jpg";
import blog02Img from "../assets/img/blog02.jpg";
import blog03Img from "../assets/img/blog03.jpg";
import blog04Img from "../assets/img/blog04.jpg";
import blog05Img from "../assets/img/blog05.jpg";
// Si en alguno sale error de módulo, cambia SOLO ese .jpg por .png

const blogData = [
  {
    id: 1,
    titulo: "5 destinos imperdibles para tu próximo viaje",
    categoria: "Inspiración",
    img: blog01Img,
    resumen:
      "Descubre los lugares que todo viajero debe visitar al menos una vez en la vida. Naturaleza, cultura y experiencias únicas.",
  },
  {
    id: 2,
    titulo: "Cómo encontrar vuelos baratos sin complicarte",
    categoria: "Tips de viaje",
    img: blog02Img,
    resumen:
      "Aprende a usar alertas, comparadores y estrategias para conseguir los mejores precios del mercado.",
  },
  {
    id: 3,
    titulo: "Viajar solo: una experiencia que te cambia la vida",
    categoria: "Inspiración",
    img: blog03Img,
    resumen:
      "Viajar solo no es estar solo. Es una oportunidad para conectar contigo mismo y con personas increíbles alrededor del mundo.",
  },
  {
    id: 4,
    titulo: "10 cosas que debes saber antes de visitar el Caribe",
    categoria: "Guías",
    img: blog04Img,
    resumen:
      "Playas, clima, actividades y recomendaciones para que vivas un viaje perfecto sin contratiempos.",
  },
  {
    id: 5,
    titulo: "Planea tu viaje con bajo presupuesto",
    categoria: "Tips de viaje",
    img: blog05Img,
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
