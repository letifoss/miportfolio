import React from "react";
import logocalculadora from "../imagenes/logocalculadora.jpg"
import logonetflix from "../imagenes/logonetflix.jpg"
import logogaceta from "../imagenes/logogaceta.png"
import logoropa from "../imagenes/logoropa.png"

function Proyectos(){
    return(
    <section id="proyectos" >
        <div class="content d-flex flex-column align-items-center">
            <h1  data-aos="fade-right" data-aos-delay="50">MIS PROYECTOS</h1>
            <div className="d-flex flex-column flex-md-row flex-lg-row flex-wrap justify-content-center mw-100 mt-5"  data-aos="fade-right" data-aos-delay="50">
                <div>
                    <div className="proyecto overflow-hidden">
                    <a href="https://proyectomicalculadora.netlify.app/" target="blank"><img src={logocalculadora} alt="proyecto calculadora" width="260" height="270"/></a>
                    </div>
                    <h6 className="text-center mt-3">Proyecto calculadora</h6>
                </div>
                <div>
                    <div className="proyecto overflow-hidden">
                        <a href="https://proyectonetf.vercel.app/" target="blank"> <img src={logonetflix} alt="proyecto pagina netflix" width="260" height="160" /></a>
                    </div>
                    <h6 className="text-center mt-3">Proyecto página Netflix</h6>
                </div>
                <div>
                    <div className="proyecto overflow-hidden">
                        <a href="https://gacetasite.netlify.app/" target="blank"> <img src={logogaceta} alt="proyecto pagina gacetaplay" width="260" height="160" /></a>
                    </div>
                    <h6 className="text-center mt-3">Sitio web Produccion musical</h6>
                    <p className="text-center mt-3"> (en construcción)</p>
                </div>
                <div>
                    <div className="proyecto overflow-hidden">
                        <a href="https://clothesstore-mu.vercel.app/" target="blank"> <img src={logoropa} alt="proyecto venta de ropa" width="260" height="160" /></a>
                    </div>
                    <h6 className="text-center mt-3">Página ecommerce, venta de ropa</h6>
                    <p className="text-center mt-3"> (en construcción)</p>
                </div>
            </div>
        </div>
    </section>        
    )
}

export default Proyectos;