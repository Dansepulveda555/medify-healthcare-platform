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
      <div className="mb-32">
        <Portada></Portada>
      </div>
      <div
  className="
    relative overflow-hidden
    bg-[url('/wall3.png')] bg-cover bg-center
    w-full
    ring-1 ring-white/10 rounded-4xl shadow-2xl
  "
>
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
    aria-hidden="true"
  ></div>

  <div className="relative grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-10 lg:px-14 py-16 md:py-24">
    <div className="col-span-4">
      <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
        ¿Buscas una <strong>Página web</strong> para tu empresa?
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl">
        Impulsa tu proyecto con tecnología de alto rendimiento. Desde
        arquitecturas escalables hasta experiencias digitales ultra
        rápidas: todas nuestras soluciones están diseñadas para maximizar
        el rendimiento, optimizar procesos y escalar tu negocio con
        eficiencia.
      </p>

      <div className="mt-10 flex md:justify-end">
        <Link href={"/comprar"}>
          <BotonBlanco contenido={"Comprar pagina web"} />
        </Link>
      </div>
    </div>
    <div className="hidden md:block"></div>
  </div>
</div>

      <div className="my-32">
        <Servicios></Servicios>
      </div>

      <div className="my-32">
        <Portafolio></Portafolio>
      </div>

      <div
  className="
    relative overflow-hidden
    bg-[url('/wallet.png')] bg-cover bg-center
    w-full
    ring-1 ring-white/10 rounded-4xl shadow-2xl
    my-32
  "
>
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"
    aria-hidden="true"
  ></div>

  <div className="relative grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-10 lg:px-14 py-16 md:py-24">
    <div className="col-span-4">
      <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
        Tu proyecto <strong className="text-cyan-300">No Termina</strong> en la entrega
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl">
        No te dejamos solo después de la puesta en marcha. Nuestro compromiso es
        acompañarte de forma constante, escuchando tus necesidades y
        aplicando las mejoras que desees para que tu proyecto evolucione y
        se mantenga siempre a la vanguardia.
      </p>

      <div className="mt-10 flex md:justify-end">
        <Link href={"/soporte"}>
          <BotonBlanco contenido={"Plan de Soporte"} />
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
  <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
  <div className="relative">
    <SobreNosotros></SobreNosotros>
  </div>
</div>

      <div></div>
    </div>
  );
}
