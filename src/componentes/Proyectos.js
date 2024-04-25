import React from "react";
import logocalculadora from "../imagenes/logocalculadora.jpg"
import logonetflix from "../imagenes/logonetflix.jpg"

function Proyectos(){
    return(
    <section id="proyectos">
        <div class="content d-flex flex-column align-items-center ">
            <h1>MIS PROYECTOS</h1>
            <div className="d-flex mt-5">
                <div>
                    <div className="proyecto overflow-hidden">
                        <img src={logocalculadora} alt="proyecto calculadora" width="260" height="270"/>
                    </div>
                    <h5 className="text-center mt-3">Proyecto calculadora</h5>
                </div>
                <div>
                    <div className="proyecto overflow-hidden">
                        <img src={logonetflix} alt="proyecto pagina netflix" width="260" height="160" />
                    </div>
                    <h5 className="text-center mt-3">Proyecto página Netflix</h5>
                </div>
                <div className="proyecto"></div>
                <div className="proyecto"></div>
            </div>
        </div>
    </section>        
    )
}

export default Proyectos;