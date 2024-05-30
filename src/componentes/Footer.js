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
        <div className="d-flex flex-column align-items-center ">
          <h6>Contáctame!</h6>
          <p>+(598) 94451482</p>
          <p><i class="bi bi-envelope mr-2"></i>letifossemale@gmail.com</p>
          <p>Montevideo, Uruguay</p>
        </div>
      </footer>
    )
  }
  

export default Footer;