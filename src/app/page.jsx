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
      bg-[url('/wall3.png')] bg-cover 
      w-full 
     
      grid grid-cols-1 md:grid-cols-5
      justify-center
      rounded-2xl
      "
      >
        <div className="col-span-4">
      <div className="mt-12">
            <h2 className="text-3xl md:text-6xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
           ¿Buscas una página web para tu empresa?
          </h2>
          <p className="text-2xl md:text-3xl   p-12">
            Impulsa tu proyecto con tecnología de alto rendimiento. Desde arquitecturas escalables hasta experiencias digitales ultra
            rápidas: todas nuestras soluciones están diseñadas para maximizar el
            rendimiento, optimizar procesos y escalar tu negocio con eficiencia.
          </p><br /><br />
      </div>
          <div className="flex justify-end mr-6 mb-20">
            <BotonBlanco contenido={'CONTRATAR UN PLAN'}/>
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
       bg-[url('/wall.png')] bg-cover 
      w-full 
      ">
        <SobreNosotros></SobreNosotros>
      </div>

      <div></div>
    </div>
  );
}
