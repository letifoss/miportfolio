import React from "react";
import { Link } from "react-scroll";

function Footer() {
    return (
      <footer className="row footer justify-content-around">
        <div className="d-flex flex-column align-items-center">
        <Link to="presentacion" smooth={true}>Volver al inicio</Link>
        <Link to="proyectos" smooth={true}>Proyectos</Link>
        <Link to="contacto" smooth={true}>Contacto</Link>

        </div>
        <div className="d-flex flex-column align-items-center">
          <i class="bi bi-geo-alt-fill"></i>
          <p>Montevideo, Uruguay</p>
        </div>
      </footer>
    )
  }
  

export default Footer;