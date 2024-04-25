import React from "react";
import fotolinkedin from '../imagenes/fotolinkedin.jpg'

function Presentacion(){
    return(
    <div id="presentacion">
        <div className="content d-flex justify-content-center align-items-center">
            <img src={fotolinkedin} alt="foto leticia fossemale" width="260"/>
            <div className="d-flex flex-column align-items-center text-right">
                <h1 className="text-center">Leticia Fossemale</h1>
                <h5 className="">Bienvenidos a mi portfolio. Aquí conocerás un poco más sobre mí, mis estudios y te mostraré algunos de mis proyectos. </h5>
                <h5> Soy <b><i>desarrolladora full stack</i></b>, aunque mi enfoque está en el desarrollo frontend.</h5>
            </div>
        </div>
    </div>
    );
}

export default Presentacion;
