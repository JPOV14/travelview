// src/App.js

// **Dependencias**
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// **Estilos**
import "./styles/home.css";

// **Componentes principales**
import Header from "./components/Header";
import Hero from "./components/Hero";
import Buscador from "./components/Buscador";
import Destinos from "./components/Destinos";
import Pregunta from "./components/Pregunta";
import MetodosPago from "./components/MetodosPago";
import Footer from "./components/Footer";

// **Páginas**
import QuienesSomos from "./pages/QuienesSomos";
import Paquetes from "./pages/Paquetes";
import Blog from "./pages/Blog";
import Suscripcion from "./pages/Suscripcion";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* HOME */}
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

        {/* RUTAS DE PÁGINAS */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;