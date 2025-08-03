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

      <div
        className="
grid
grid-rows-2
gap-7
"
      >
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
              Es una página web única y enfocada en un solo objetivo: presentar
              tu producto, servicio o marca de forma clara y profesional,
              guiando al visitante a contactarte o comprar.
            </p>{" "}
            <br />
            <br />
            <p className="textoResponsive">
              Demuestra profesionalismo, autoridad y nivel con una página
              diseñada a tu medida, que deje claro que tu negocio está un paso
              adelante y que tus clientes están tratando con alguien serio y de
              confianza
            </p>
          </div>

          <div>
            <Image
              src={"/landing1.png"}
              alt="Imagen de ejemplo de una landing page"
              width={500}
              height={300}
              className="rounded-4xl"
            />
          </div>
        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className=" flex flex-col justify-center space-y-8">
            <h2 className={`${michroma.className} titulosResponsive`}>Plan Starter</h2>
            <div className="estiloPlanes">
              <ul className="">
                <li>1 landing page profesional</li>
                <li>Hosting y dominio incluido (primer año)</li>
                <li>1 modificación menor al mes</li>
                <li>Soporte básico (respuesta en 48h)</li>
                <li>Optimización básica SEO</li>
              </ul>
            </div>

           <h2 className={`${michroma.className} titulosResponsive`}>Plan Hero</h2>
            <div className="estiloPlanes">
              <ul className="">
                <li>Todo lo del plan Starter</li>
                <li>Hasta 4 modificaciones al año</li>
                <li>Soporte prioritario (24h)</li>
                <li>Formularios de contacto y WhatsApp</li>
                <li>Reporte trimestral de visitas</li>
              </ul>
            </div>


           <h2 className={`${michroma.className} titulosResponsive`}>Plan PRO</h2>
            <div className="estiloPlanes">
             
              <ul className="list-disc pl-5">
                <li>Todo lo del plan Pro</li>
                <li>Hasta 12 modificaciones al año (1 por mes)</li>
                <li>Soporte premium (respuesta en el mismo día)</li>
                <li>Actualización de diseño anual</li>
                <li>Mantenimiento y monitoreo de seguridad</li>
              </ul>
              <p className="text-sm mt-2 text-gray-300">
                Incluye 1 mes de marcha blanca con ajustes ilimitados.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/landing2.png"}
              alt="Imagen de ejemplo de una landing page"
        width={500}
              height={300}
              className="rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
