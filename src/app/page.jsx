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
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
        <Portada></Portada>
      </div>
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
      <div
  className="
    relative overflow-hidden
    bg-[url('/digital.jpg')] bg-cover bg-center w-full ring-0 ring-white/10 rounded-0xl shadow-1xl"
>
  <div
    className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/05 via-[#0B0F1A]/10 to-black"
    aria-hidden="true"
  ></div>

  <div className="relative">
    {/* Black gradient overlay at bottom */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

    <div className="relative grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-10 lg:px-14 py-16 md:py-32">
      <div className="col-span-6">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
          ¿Necesitas <strong className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">digitalizar</strong> tu práctica médica?
        </h2>
        <p className="mt-6 text-justify md:text-2xl text-white/85 leading-relaxed max-w-3xl">
          Moderniza tu consulta con tecnología médica especializada. Desde sistemas de gestión de pacientes hasta reservas en linea: todas nuestras soluciones están diseñadas para optimizar la atención médica, proteger datos sensibles y darte la mejor herramienta para llevar tu gestión médica al siguiente nivel.
        </p>

        <div className="mt-12 flex justify-center md:justify-end">
          <Link href={"/comprar"}>
            <BotonBlanco contenido={"Solicitar demostración"} />
          </Link>
        </div>
      </div>
      <div className="hidden md:block"></div>
    </div>
  </div>
</div>
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 mb-32">
        <Servicios></Servicios>
      </div>

      <div className="my-32">
        <Portafolio></Portafolio>
      </div>

      <SobreNosotros></SobreNosotros>

{/* Bloque 3: Actualización continua - Fondo wallet 
      <div
  className="
    relative overflow-hidden
    bg-[url('/wallet.png')] bg-cover bg-center
    w-full
    ring-1 ring-white/10 rounded-4xl shadow-2xl
    my-32
  "
>
*/}

{/*
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"
    aria-hidden="true"
  ></div>

  <div className="relative grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-10 lg:px-14 py-16 md:py-24">
    <div className="col-span-4">
      <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
        Tu sistema médico <strong className="text-blue-300">se actualiza</strong> contigo
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl">
        No te dejamos solo después de la implementación. Nuestro compromiso es
        acompañarte constantemente, adaptando el sistema a los cambios en tu práctica médica,
        actualizaciones regulatorias y nuevas necesidades de atención al paciente.
      </p>

      <div className="mt-10 flex md:justify-end">
        <Link href={"/soporte"}>
          <BotonBlanco contenido={"Soporte Médico Especializado"} />
        </Link>
      </div>
    </div>
    <div className="hidden md:block"></div>
  </div>
</div>


      <div
  className="
    relative overflow-hidden
    bg-[url('/morado1.png')] bg-cover bg-center
    w-full
    ring-1 ring-white/10 rounded-4xl shadow-2xl
    px-6 md:px-10 lg:px-14 py-24 md:py-32
  "
>
*/}



      <div></div>
      </div>
    </div>
  );
}
