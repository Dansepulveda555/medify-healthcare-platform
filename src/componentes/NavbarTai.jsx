import Link from "next/link"
import BotoinMui from "@/componentes/BotonMui";


export default function NavbarTai(){

    const precios = 'Precios'
    const Servicios = 'Proyectos'
    const contacto = 'Servicios'
    return(
        <div className="
        flex flex-row
        justify-center 
        p-8 
        space-x-8
        text-base md:text-2xl
        font-bold
         ">
        <div>
  <BotoinMui contenido={precios}></BotoinMui>
        </div>
<div>
     <BotoinMui contenido={Servicios}></BotoinMui>
</div>
  
  <div className="hidden md:block">
 <BotoinMui contenido={contacto}></BotoinMui>
  </div>
   
        
        </div>
    )
}