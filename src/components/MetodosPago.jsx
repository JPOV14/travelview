// src/components/MetodosPago.jsx
import visaImg from "../assets/img/visa.png";
import masterCardImg from "../assets/img/master card.png";
import amexImg from "../assets/img/American Express.png";
// Si alguno falla, cambia .png a .jpg en ese import puntual.

function MetodosPago() {
  return (
    <section className="metodos-pago">
      <div className="pago">
        <h4>Formas de pago</h4>
        <p>Aceptamos todas las tarjetas de débito y crédito</p>
        <div className="metodos">
          <img src={visaImg} alt="Visa" />
          <img src={masterCardImg} alt="Mastercard" />
          <img src={amexImg} alt="Amex" />
        </div>
      </div>
    </section>
  );
}

export default MetodosPago;
