import Link from "next/link"
import BotoinMui from "@/componentes/BotonMui";


export default function NavbarTai(){

    const contratar = 'Contratar'
    const proyectos = 'Proyectos'
    const servicios = 'Servicios'
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
    <Link href={'/comprar'}><BotoinMui contenido={contratar}></BotoinMui></Link>
        </div>
<div>
       <Link href={'/portafolio'}><BotoinMui contenido={proyectos}></BotoinMui></Link>
       
     
</div>
  
  <div className="hidden md:block">
    <Link href={'/servicios'}><BotoinMui contenido={servicios}></BotoinMui></Link>
    
 
  </div>
   
        
        </div>
    )
}