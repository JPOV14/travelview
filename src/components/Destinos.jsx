// src/components/Destinos.jsx

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <section className="destinos">
      <h2 className="titulo-destinos">Destinos más buscados</h2>

      <Slider {...settings}>
        <div className="destino-card">
          <img src="/img/image 1.png" alt="Paracas" />
          <h3>Paracas</h3>
          <a href="/pages/Paracas.html" className="btn-ver">Ver más</a>
        </div>

        <div className="destino-card">
          <img src="/img/image 2.png" alt="Machu Picchu" />
          <h3>Machu Picchu</h3>
          <a href="#" className="btn-ver">Ver más</a>
        </div>

        <div className="destino-card">
          <img src="/img/image 3.png" alt="Antioquía" />
          <h3>Antioquía</h3>
          <a href="/pages/Antioquia.html" className="btn-ver">Ver más</a>
        </div>

        <div className="destino-card">
          <img src="/img/image 4.png" alt="Chancay" />
          <h3>Castillo de Chancay</h3>
          <a href="/pages/Chancay.html" className="btn-ver">Ver más</a>
        </div>

        <div className="destino-card">
          <img src="/img/image 5.png" alt="Tarapoto" />
          <h3>Tarapoto</h3>
          <a href="#" className="btn-ver">Ver más</a>
        </div>
      </Slider>
    </section>
  );
}
