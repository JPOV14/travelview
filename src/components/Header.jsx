// src/components/Header.jsx
import { Link } from "react-router-dom";
import logoImg from "../assets/img/LogoVT.png"; // ajusta a .jpg si fuera necesario

export default function Header() {
  return (
    <header className="header">
      <div className="container-header">
        <Link to="/">
          <img src={logoImg} alt="TravelView" className="logo" />
        </Link>


        <nav className="nav">
          <Link to="/quienes-somos">¿Quiénes Somos?</Link>
          <Link to="/paquetes">Paquetes</Link>

          <a
            href="https://wa.me/51938540706?text=Hola,%20Bienvenido%20a%20Viajerox%20Travel"
            target="_blank"
            rel="noreferrer"
          >
            Contáctanos
          </a>

          <Link to="/blog">Blog</Link>
          <Link to="/suscripcion">Suscripción</Link>
        </nav>
      </div>
    </header>
  );
}
