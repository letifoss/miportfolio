import React from "react";
import fotolinkedin from '../imagenes/fotolinkedin.jpg'

function Presentacion(){
    return(
    <div id="presentacion">
        <div className="content d-flex justify-content-center align-items-center">
            <img src={fotolinkedin} alt="foto leticia fossemale" width="260"/>
            <div className="d-flex flex-column">
                <h1 className="text-center">Leticia Fossemale</h1>
                <h4 className="text-rigth">Bienvenidos a mi portfolio. Aquí conocerás un poco más sobre mí, mis estudios y te mostraré algunos de mis proyectos. </h4>
                <h4 className="text-rigth">Soy de Uruguay, tengo 28 años y soy <b><i>desarrolladora full stack</i></b>. Actualmente me estoy enfocando más en el desarrollo frontend, especificamente en React.</h4>
            </div>
        </div>
    </div>
    );
}

export default Presentacion;
