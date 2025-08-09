"use client";
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";
import ScrollReveal from "../componentes/ScrollReveal";
import Image from "next/image";
import BotonBlanco from "@/componentes/BotonBlanco";
import Link from "next/link";

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
      rounded-4xl
      "
      >
        <div className="col-span-4">
          <div className="mt-12">
            <h2 className="text-3xl md:text-6xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              ¿Buscas una <strong>Página web</strong> para tu empresa?
            </h2>
            <p className="text-2xl md:text-3xl   p-12">
              Impulsa tu proyecto con tecnología de alto rendimiento. Desde
              arquitecturas escalables hasta experiencias digitales ultra
              rápidas: todas nuestras soluciones están diseñadas para maximizar
              el rendimiento, optimizar procesos y escalar tu negocio con
              eficiencia.
            </p>
            <br />
            <br />
          </div>
          <div className="flex justify-end mr-6 mb-20">
            <Link href={"/comprar"}>
              <BotonBlanco contenido={"Comprar pagina web"} />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Servicios></Servicios>
      </div>
      <br />
      <br />

      <div>
        <Portafolio></Portafolio>
      </div>


 

      <div
        className="      bg-[url('/wallet.png')] bg-cover 
      w-full 
     
      grid grid-cols-1 md:grid-cols-5
      justify-center
      rounded-4xl
      my-60
      "
      >
        <div className="col-span-4 mt-12">
          <div className="mt-12">
            <h2 className="text-3xl md:text-6xl font-bold p-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Tu proyecto <strong className="text-cyan-300">No Termina</strong> en la entrga
            </h2>
            <p className="text-2xl md:text-3xl   p-12">
              Seguimos a tu lado después de la entrega, encontrando nuevas
              formas de optimizar y hacer crecer tu proyecto. <br /><br />
              Creemos en proyectos vivos que crecen y mejoran. Nuestro soporte postventa asegura esa evolución.
              
            </p>
            <br />
            <br />
          </div>
          <div className="flex justify-end mr-6 mb-20">
            <Link href={"/soporte"}>
              <BotonBlanco contenido={"Plan de Soporte"} />
            </Link>
          </div>
        </div>
    
      </div>

      <div
        className="
       bg-[url('/morado1.png')] bg-cover 
      w-full 
      "
      >
        <SobreNosotros></SobreNosotros>
      </div>

      <div></div>
    </div>
  );
}
