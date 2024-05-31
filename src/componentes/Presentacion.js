import React from "react";
import fotolinkedin from '../imagenes/linkedin.jpg'
import curriculum from '../imagenes/cvleticiafossemale.pdf'
import certificados from '../imagenes/certificados.pdf'

function Presentacion(){
    return(
        <>
    <div id="presentacion">
        <div className="content d-flex flex-column align-items-center justify-content-center flex-md-row">
            <img src={fotolinkedin} alt="foto leticia fossemale" width="190" className="ml-3 imagenprincipal"/>
            <div className="d-flex flex-column justify-content-center p-4">
                <h1 className="text-center major-mono-display-regular">LETICIA FOSSEMALE</h1>
                <h4 className="text-left mw-100">Bienvenidos a mi portfolio. Aquí conocerás un poco más sobre mí, mis estudios, conocimientos y te mostraré algunos de mis proyectos. </h4>
                <h4 className="text-left mw-100">Soy <b className="texto-animado"><i>desarrolladora full stack</i></b>, con enfoque en el desarrollo <b>front-end</b>, utilizando React principalmente.</h4>
                <h4>Tengo 28 años y soy de Uruguay. </h4>
                <h4>Soy una persona muy comprometida, responsable y siempre dispuesta a seguir aprendiendo. </h4>
            </div>
        </div>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center masinfo">
        <h3>Más sobre mí ...</h3>
        <h4><a href={curriculum} target="_blank">Curriculum vitae</a> </h4>
        <h4><a href={certificados} target="_blank">Ver certificados/diplomas</a></h4>
    </div>
    </>
    );
}

export default Presentacion;
