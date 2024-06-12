import React from "react";

function Contacto(){
    return(
        <section id="contacto">
            <div class="content d-flex flex-column align-items-center">
                <div  data-aos="fade-right" data-aos-delay="50"><h1>CONTACTO</h1></div>
                <div class="icon mt-5"  data-aos="fade-right" data-aos-delay="50">
                    <a href="mailto:letifossemale@gmail.com"><i class="bi bi-envelope m-5"></i></a>
                    <a href="https://wa.me/59894451482" target="_blank"><i class="bi bi-whatsapp m-5"></i></a>
                </div>
                <div class="mt-4">
                    <p class="fs-4 text-center p-4">Comunicate vía email o whatsapp por presupuestos, consultas y más información</p>
                </div>
            </div>
    </section>

    )
}

export default Contacto;