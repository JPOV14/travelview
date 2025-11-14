import React, { useState } from "react";
import "./suscripcion.css";

function Suscripcion() {
  const [form, setForm] = useState({ nombre: "", email: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const validarEmail = (email) => {
    // Regex simple: valida formato correo@dominio.com
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.nombre.trim().length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.");
      return;
    }

    if (!validarEmail(form.email)) {
      setError("El correo no tiene un formato válido.");
      return;
    }

    setSuccess("¡Suscripción exitosa! Gracias por unirte.");
    setForm({ nombre: "", email: "" });
  };

  return (
    <div className="sus-container">
      <h1 className="sus-title">Suscríbete a TravelView</h1>
      <p className="sus-subtitle">
        Recibe descuentos, paquetes exclusivos y novedades de viajes.
      </p>

      <form className="sus-form" onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej: Abel J."
          value={form.nombre}
          onChange={handleChange}
        />

        <label>Correo electrónico</label>
        <input
          type="text"
          name="email"
          placeholder="Ej: correo@ejemplo.com"
          value={form.email}
          onChange={handleChange}
        />

        {error && <p className="sus-error">{error}</p>}
        {success && <p className="sus-success">{success}</p>}

        <button type="submit" className="sus-btn">
          Suscribirme
        </button>
      </form>
    </div>
  );
}

export default Suscripcion;
