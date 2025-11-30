// src/App.js

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/home.css";

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Buscador from "./components/Buscador";
import Destinos from "./components/Destinos";
import Pregunta from "./components/Pregunta";
import MetodosPago from "./components/MetodosPago";
import Footer from "./components/Footer";
import WhatsAppBoton from "./components/WhatsAppBoton";
import Paracas from "./pages/Paracas";
import Antioquia from "./pages/Antioquia";
import Chancay from "./pages/Chancay";

// Pages
import QuienesSomos from "./pages/QuienesSomos";
import Paquetes from "./pages/Paquetes";
import Blog from "./pages/Blog";
import Suscripcion from "./pages/Suscripcion";

function App() {
  return (
    <Router>
      {/* ENVOLTORIO GLOBAL */}
      <div className="app-wrapper">

        <Header />

        {/* CONTENIDO EXPANDIBLE */}
        <div className="content-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Buscador />
                  <Destinos />
                  <Pregunta />
                  <MetodosPago />
                </>
              }
            />

            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/suscripcion" element={<Suscripcion />} />
            <Route path="/paracas" element={<Paracas />} />
            <Route path="/antioquia" element={<Antioquia />} />
            <Route path="/chancay" element={<Chancay />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppBoton />
      </div>
    </Router>
  );
}

export default App;
