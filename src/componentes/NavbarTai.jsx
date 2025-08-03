import Link from "next/link"
import BotoinMui from "@/componentes/BotonMui";


export default function NavbarTai(){

    const precios = 'Precios'
    const Servicios = 'Servicios'
    const contacto = 'Proyectos'
    return(
        <div className="
        flex flex-row
        justify-center 
        p-8 
        space-x-8
        text-base md:text-2xl
        font-bold
         ">
        
  <BotoinMui contenido={precios}></BotoinMui>
   <BotoinMui contenido={Servicios}></BotoinMui>
    <BotoinMui contenido={contacto}></BotoinMui>
        
        </div>
    )
}