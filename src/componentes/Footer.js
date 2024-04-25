import React from "react";

function Footer(){
    return(
        <footer class="row footer">
            <div class="col-6 col-md-3 d-flex flex-column align-items-center">
                <a href="" style={{color: 'black'}}>Volver al inicio</a>
                <a href="" style={{color: 'black'}}>Proyectos</a>
                <a href="" style={{color: 'black'}}>Contacto</a>
            </div>
            <div class="col-6 col-md-4 d-flex flex-column align-items-center">
                <h6>Contáctame!</h6>
                <p>+(598) 94451482</p>
                <p>Montevideo, Uruguay </p>
            </div>
        </footer>
    )
}

export default Footer;