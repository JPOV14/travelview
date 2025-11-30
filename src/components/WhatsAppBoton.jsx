import React from 'react';
import '../styles/whatsapp-boton.css';
import whatsappIcono from '../assets/img/viajero-whatsapp.png'; 

function WhatsAppBoton() {
  const numeroCel = '+51933387652'; 
  const mensaje = 'Hola, me gustaría información sobre tus servicios de viajes.'; // Mensaje personalizado

  const abrirWhatsMsj = () => {
    const msjWhats = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/${numeroCel}?text=${msjWhats}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      className="whatsapp-boton"
      onClick={abrirWhatsMsj}
      title="¡Contáctanos por WhatsApp!"
    >
      <img src={whatsappIcono} alt="WhatsApp" className="whatsapp-icono" />
    </button>
  );
}

export default WhatsAppBoton;
