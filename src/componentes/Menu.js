import React from "react";
import '../styles/Menu.css';
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";
import Menudesplegable from "./Menudesplegable";


function Menu() {
    const [scroll, setScroll] = useState(false);
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setScroll(true); // El scroll es mayor a 100, se activa la clase "scrolled"
            } else {
                setScroll(false); // El scroll es menor o igual a 100, se desactiva la clase "scrolled"
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    
    
    
    return(
        <div className="menu">
        <nav className={`navbar navbar-expand-lg sticky-top navbar-light ${scroll ? 'scrolled' : ''}`}>
            <li><Link to="presentacion"><h2>MI PORTFOLIO</h2></Link></li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"  onClick={Menudesplegable}>
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <li className="mr-4 nav-item"><Link to="presentacion" smooth={true}>Inicio</Link></li>
                <li className="mr-4 nav-item"><Link to="habilidades" smooth={true}>Habilidades</Link></li>
                <li className="mr-4 nav-item"><Link to="proyectos" smooth={true}>Proyectos</Link></li>
                <li className="mr-4 nav-item"><Link to="contacto" smooth={true}>Contacto</Link></li>
            </ul>
        </div>
        </nav>     
        </div>       
    );
}   

export default Menu;