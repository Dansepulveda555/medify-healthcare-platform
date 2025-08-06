'use client'
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";
import ScrollReveal from "../componentes/ScrollReveal";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <div>
        <Portada></Portada>
      </div>
      <div className=" relative w-full  ">
<Image
src={'/portada12.png'}
alt="Portada pagina 2"
    width={1920}  
    height={1090}
className="object-cover w-full h-auto"/>
      </div>
      <div>
        <Servicios></Servicios>
      </div>
      <div>
        <Portafolio></Portafolio>
      </div>
      <div>
        <SobreNosotros></SobreNosotros>
      </div>
  
    </div>
  );
}
