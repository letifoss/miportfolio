import React from "react";
import fotolinkedin from '../imagenes/linkedin.jpg'
import curriculum from '../imagenes/cvleticiafossemale.pdf'
import certificados from '../imagenes/certificados.pdf'

function Presentacion(){
    return(
        <>
    <div id="presentacion" className="w-100 d-flex justify-content-center ">
        <div className="content d-flex flex-column align-items-center flex-md-row">
            <div className="d-flex justify-content-center">
                <img src={fotolinkedin} alt="foto leticia fossemale" width="130" height={180} className="imagenprincipal rounded-circle mr-4"/>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="text-left chakra-petch-regular texto-animado " >FULL STACK DEVELOPER</h1>
                <h5 className="text-left" >Leticia Fossemale</h5>
                <h5 className="text-left mw-100">Bienvenidos a mi portfolio. Aquí conocerás un poco más sobre mí, mis estudios, conocimientos y te mostraré algunos de mis proyectos. </h5>
                <h5 className="text-left mw-100">Soy <b className="chakra-petch-regular" ><i>desarrolladora full stack</i></b>, con enfoque en el desarrollo <b className=" chakra-petch-regular">front-end</b>, utilizando React principalmente.</h5>
                <h5>Tengo 28 años y soy de Uruguay. </h5>
                <h5>Soy una persona muy comprometida, responsable y siempre dispuesta a seguir aprendiendo. </h5>
            </div>
        </div>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center masinfo" data-aos="fade-up">
        <h3>Más sobre mí ...</h3>
        <h4><a href={curriculum} target="_blank">Curriculum vitae</a> </h4>
        <h4><a href={certificados} target="_blank">Ver certificados/diplomas</a></h4>
    </div>
    </>
    );
}

export default Presentacion;
