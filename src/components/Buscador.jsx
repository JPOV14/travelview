// src/components/Buscador.jsx
export default function Buscador() {
  return (
    <section className="buscador">
      <div className="search-container glass-card">
        <h2 className="titulo-buscador">Encuentra tu próximo destino</h2>

        <form
          id="travelForm"
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            const query = document
              .getElementById("destino")
              .value.toLowerCase()
              .trim();

            const cards = document.querySelectorAll(".destino-card");

            cards.forEach((card) => {
              const nombre = card.querySelector("h3").textContent.toLowerCase();
              const match = query === "" || nombre.includes(query);
              card.style.display = match ? "block" : "none";
            });
          }}
        >
          <div className="form-group">
            <label htmlFor="origen">Origen</label>
            <input type="text" id="origen" placeholder="Ej: Lima, Perú" />
          </div>

          <div className="form-group">
            <label htmlFor="destino">Destino</label>
            <input type="text" id="destino" placeholder="Ej: Cusco, Perú" />
          </div>

          <div className="form-group">
            <label htmlFor="fecha-ida">Fecha de salida</label>
            <input type="date" id="fecha-ida" />
          </div>

          <div className="form-group">
            <label htmlFor="fecha-vuelta">Fecha de retorno</label>
            <input type="date" id="fecha-vuelta" />
          </div>

          <div className="form-group">
            <label htmlFor="personas">Personas</label>
            <input type="number" id="personas" min="1" defaultValue="1" />
          </div>

          <div className="btns-buscador">
            <button type="submit" className="btn-buscar">Buscar</button>

            <button
              type="button"
              className="btn-limpiar"
              onClick={() => {
                document.getElementById("travelForm").reset();
                const cards = document.querySelectorAll(".destino-card");
                cards.forEach((card) => (card.style.display = "block"));
              }}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
