"use client";

import Aurora from "@/componentes/Aurora";
import SplashCursor from "@/componentes/Splash";
import Image from "next/image";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
import AccordionUsage from "@/componentes/Acordeon";

export default function LandingPage() {
  return (
    <div>
     
      <div>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <h1 className={`${michroma.className} titulosResponsive`}>
          Landing Pages
        </h1>
      </div>
      <br />

<div className="
grid
grid-rows-2
gap-7
">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-16">
        <div className=" px-10">
          <p className="textoResponsive">
            Hoy, más que nunca, tu primera impresión ocurre en internet. Si
            alguien busca tu nombre, tu negocio o tu servicio, ¿qué encuentra?
          </p>
          <br />
          <br />
          <p className="textoResponsive">
            <h2>¿Qué es una landing page?</h2>
            <br />
            Es una página web única y enfocada en un solo objetivo: presentar tu
            producto, servicio o marca de forma clara y profesional, guiando al
            visitante a contactarte o comprar.
          </p>{" "}
          <br />
          <br />
          <p className="textoResponsive">
            Demuestra profesionalismo, autoridad y nivel con una página diseñada
            a tu medida, que deje claro que tu negocio está un paso adelante y
            que tus clientes están tratando con alguien serio y de confianza
          </p>
        </div>

        <div>
          <Image
            src={"/landing1.png"}
            alt="Imagen de ejemplo de una landing page"
            width={600}
            height={400}
            className="rounded-4xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16">
        <div className="flex flex-col gap-4 w-full px-10">
          <AccordionUsage
            titulo="Landing Básica"
            cuerpo1="Desde $100 USD."
            cuerpo2="Diseño sencillo de una página"
            cuerpo3="Dominio y hosting básico por 1 año"
            cuerpo4="Soporte inicial de 1 mes"
          />
          <AccordionUsage
            titulo="Landing Profesional"
            cuerpo1="Desde $250 USD."
            cuerpo2="Diseño personalizado con hasta 2 secciones adicionales"
            cuerpo3="Dominio y hosting por 1 año"
            cuerpo4="Soporte por 3 meses"
            cuerpo5="Optimización básica para SEO"
          />
          <AccordionUsage
            titulo="Landing Premium"
            cuerpo1="Desde $500 USD."
            cuerpo2="Diseño avanzado con animaciones e interacciones"
            cuerpo3="Hasta 5 secciones y formularios de contacto"
            cuerpo4="Dominio y hosting premium por 1 año"
            cuerpo5="Soporte por 6 meses"
            cuerpo6="Modulo de Agendamiento"
          />
        </div>
        <div>
          <Image
            src={"/landing2.png"}
            alt="Imagen de ejemplo de una landing page"
            width={600}
            height={400}
            className="rounded-4xl"
          />
        </div>
      </div>
</div>
    </div>
  );
}
