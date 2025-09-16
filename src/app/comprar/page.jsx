"use client"
import Stepper, { Step } from "@/componentes/Stepper"
import Aurora from "@/componentes/Aurora";

export default function Comprar(){
    return(
        <div className="
           ">
                  <div>
                    <Aurora></Aurora>
                  </div>
                   <div>

                   </div>
<div className="p-10 text-center">
  <h2 className="tituloResponsive">💳 Cómo contratar nuestros servicios</h2>
  <p className="mt-6 text-lg text-gray-200">
    Para contratar nuestros servicios debes realizar una transferencia bancaria indicando el servicio que deseas adquirir. 
    Luego, envía el comprobante junto con el motivo de la transferencia a 
    <strong> desarrollo.native.code@gmail.com</strong> o al WhatsApp 
    <strong> +56 9 9322 39282</strong>. Te contactaremos en breve para que nos especifiques tus necesidades.
  </p>
</div>

        </div>
    )
}