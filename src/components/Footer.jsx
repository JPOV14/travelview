// src/components/Footer.jsx
import minceturImg from "../assets/img/image 6.png";
import sierraVerdeImg from "../assets/img/image 8.png";
import libroImg from "../assets/img/image 7.png";

import facebookImg from "../assets/img/facebook.webp";
import whatsappImg from "../assets/img/whatsapp.webp";
import xImg from "../assets/img/x.webp";
import instagramImg from "../assets/img/instagram.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Contactos</h3>
          <p><strong>Dirección:</strong></p>
          <p>Av. La Encalada 1615, Oficina 109-B</p>
          <p>Lima, Perú</p>
          <p><strong>Teléfono:</strong></p>
          <p>(51) 938 540 706</p>
          <p><strong>Horario:</strong></p>
          <p>Lun - Vie: 8:30 am - 6:30 pm</p>
          <p>Sáb: 8:30 am - 4:00 pm</p>
        </div>

        <div className="footer-col">
          <h3>Certificaciones</h3>
          <div className="certificaciones">
            <a href="https://www.gob.pe/mincetur" target="_blank" rel="noreferrer">
              <img src={minceturImg} alt="Mincetur" />
            </a>
            <a href="https://sierraverdeperu.net/site/index.php/es/protegeme" target="_blank" rel="noreferrer">
              <img src={sierraVerdeImg} alt="Sierra Verde" />
            </a>
          </div>

          <h3>Libro de Reclamaciones</h3>
          <a
            href="https://consumidor.gob.pe/libro-de-reclamaciones/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={libroImg} className="libro-img" alt="Libro" />
          </a>
        </div>

        <div className="footer-col">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100063655416499"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookImg} alt="Facebook" />
            </a>
            <a
              href="https://wa.me/51938540706?text=Hola,%20Bienvenido%20a%20Viajerox%20Travel"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappImg} alt="WhatsApp" />
            </a>
            <a
              href="https://x.com/TRAVELGROUPERU"
              target="_blank"
              rel="noreferrer"
            >
              <img src={xImg} alt="X" />
            </a>
            <a
              href="https://www.instagram.com/travel.peru/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramImg} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TravelView. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
