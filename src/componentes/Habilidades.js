import React from "react";
import "../styles/Habilidades.css";
import logohtml from "../imagenes/logohtml.svg"
import logocss from "../imagenes/logocss.svg"
import logoreact from "../imagenes/logoreact.svg"
import logosql from "../imagenes/logosql.png"
import logojs from "../imagenes/logojs.svg"
import logopython from "../imagenes/logopython.png"
import logodjango from "../imagenes/logodjango.svg"
import logogit from "../imagenes/logogit.png"
import logogithub from "../imagenes/logogithub.png"

function Habilidades(){
    return(
    <section id="habilidades">
        <div class="content d-flex flex-column justify-content-center ">
        <div className="d-flex justify-content-center"><h1>HABILIDADES</h1></div>
        <div className="habilidades">
        <div className="iconoshabilidades d-flex justify-content-around">
            <div className="imagen-container">
                <img src={logohtml} alt="icono html" width="100px"  className="imagen-habilidad"/>
                <span className="name">HTML</span>
             </div>
            <div className="imagen-container">
            <img src={logocss} alt="icono css" width="300px" className="imagen-habilidad"/>
                <span className="name">CSS</span>
            </div>
            <div className="imagen-container">
            <img src={logojs} alt="icono Javascript" width="100px" className="imagen-habilidad"/>
                <span className="name">Javascript</span>
            </div>
            <div className="imagen-container">
            <img src={logoreact} alt="icono react" width="100px" className="imagen-habilidad"/>
                <span className="name">React</span>
                </div>
            <div className="imagen-container">
            <img src={logosql} alt="icono sql" width="100px" className="imagen-habilidad"/>
                <span className="name">SQL</span>
                </div>
            <div className="imagen-container">
            <img src={logopython} alt="icono phyton" width="100p" className="imagen-habilidad"/>
                <span className="name">Python</span>
            </div>
        </div>
        <div className="iconoshabilidades d-flex justify-content-center">
        <div className="imagen-container m-5">
            <img src={logodjango} alt="icono django" width="100px" className="imagen-habilidad"/>
                <span className="name">Django</span>
                </div>
            <div className="imagen-container m-5">
            <img src={logogit} alt="icono git" width="100px" className="imagen-habilidad"/>
                <span className="name">Git</span>
                </div>
            <div className="imagen-container m-5">
            <img src={logogithub} alt="icono github" width="100p" className="imagen-habilidad"/>
                <span className="name">Github</span>
            </div>
        </div>
    </div>
        </div>
    </section>
    )
}

export default Habilidades;