// src/components/Hero.jsx
import bannerPrincipal from "../assets/img/banner-principal.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={bannerPrincipal}
        alt="Explora Perú"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h1>Vive el Perú, Vive la Aventura</h1>
        <p>Descubre los mejores destinos con nosotros</p>
      </div>
    </section>
  );
}
