// src/components/Destinos.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img/image 1.png"; // Paracas
import img2 from "../assets/img/image 2.png"; // Machu Picchu
import img3 from "../assets/img/image 3.png"; // Antioquía
import img4 from "../assets/img/image 4.png"; // Chancay
import img5 from "../assets/img/image 5.png"; // Tarapoto

export default function Destinos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: false,
  };

  // Funciones de navegación compatibles con HashRouter + slick
  const goTo = (ruta) => {
    window.location.hash = ruta;           // navega dentro del SPA
    window.scrollTo(0, 0);                // sube al inicio
  };

  return (
    <section className="destinos">
      <h2 className="titulo-destinos">Destinos más buscados</h2>

      <Slider {...settings}>
        {/* PARACAS */}
        <div className="destino-card">
          <img src={img1} alt="Paracas" />
          <h3>Paracas</h3>
          <div className="btn-ver" onClick={() => goTo("#/paracas")}>
            Ver más
          </div>
        </div>

        {/* MACHU PICCHU */}
        <div className="destino-card">
          <img src={img2} alt="Machu Picchu" />
          <h3>Machu Picchu</h3>
          <div className="btn-ver" onClick={() => alert("Próximamente disponible")}>
            Ver más
          </div>
        </div>

        {/* ANTIOQUIA */}
        <div className="destino-card">
          <img src={img3} alt="Antioquía" />
          <h3>Antioquía</h3>
          <div className="btn-ver" onClick={() => goTo("#/antioquia")}>
            Ver más
          </div>
        </div>

        {/* CHANCAY */}
        <div className="destino-card">
          <img src={img4} alt="Castillo de Chancay" />
          <h3>Castillo de Chancay</h3>
          <div className="btn-ver" onClick={() => goTo("#/chancay")}>
            Ver más
          </div>
        </div>

        {/* TARAPOTO */}
        <div className="destino-card">
          <img src={img5} alt="Tarapoto" />
          <h3>Tarapoto</h3>
          <div className="btn-ver" onClick={() => alert("Próximamente disponible")}>
            Ver más
          </div>
        </div>
      </Slider>
    </section>
  );
}
