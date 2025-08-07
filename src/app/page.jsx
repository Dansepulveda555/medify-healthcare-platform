"use client";
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";
import ScrollReveal from "../componentes/ScrollReveal";
import Image from "next/image";
import BotonBlanco from "@/componentes/BotonBlanco";

export default function Home() {
  return (
    <div className="">
      <div>
        <Portada></Portada>
      </div>
      <div
        className=" 
      bg-[url('/wall.png')] bg-cover 
      w-full 
      h-[80vh]
      grid grid-cols-1 md:grid-cols-5
      justify-center
      "
      >
        <div className="col-span-4">
          <h2 className="text-3xl md:text-5xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Impulsa tu proyecto con tecnología de alto rendimiento
          </h2>
          <p className="text-2xl md:text-3xl p-12">
            Desde arquitecturas escalables hasta experiencias digitales ultra
            rápidas: todas nuestras soluciones están diseñadas para maximizar el
            rendimiento, optimizar procesos y escalar tu negocio con eficiencia.
          </p><br /><br />
          <div className="flex justify-end mr-6">
            <BotonBlanco contenido={'Impulsar Mi Negocio'}/>
          </div>
        </div>
        <div></div>
      </div><br /><br /><br /><br /><br /><br /><br />

      <div>
        <Servicios></Servicios>
      </div><br /><br />


      <div>
        <Portafolio></Portafolio>
      </div>

      <div className="
       bg-[url('/otro.png')] bg-cover 
      w-full 
      ">
        <SobreNosotros></SobreNosotros>
      </div>

      <div></div>
    </div>
  );
}
