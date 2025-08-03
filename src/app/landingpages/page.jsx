"use client";

import Aurora from "@/componentes/Aurora";
import SplashCursor from "@/componentes/Splash";
import Image from "next/image";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
import AccordionUsage from "@/componentes/Acordeon";
import BotonMui from "@/componentes/BotonMui";
import Threads from "@/componentes/Threads";

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
grid-rows-1
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
            <br />
            <br /><br /><br /><br />
            <div>
              <Image
                height={2000}
                width={1000}
                src="/landing.jpg"
                alt="foto landing"
                className="rounded-3xl hidden md:block"
              />
            </div>
          </div>

          <div>
            <div className="flex-row">
              <div className=" flex flex-col justify-center space-y-8">
                <h2 className={`${michroma.className} titulosResponsive`}>
                  Plan Starter
                </h2>
                <div className="estiloPlanes">
                  <ul className="textoResponsive">
                    <li>1 landing page profesional</li>
                    <li>Hosting y dominio incluido (primer año)</li>
                    <li>1 modificación menor al mes</li>
                    <li>Soporte básico (respuesta en 48h)</li>
                    <li>Optimización básica SEO</li>
                    <br />
                    <li>
                      <h6>VALOR : $99.000 CLP</h6>
                    </li>
                  </ul>
                  <br />
                  <BotonMui contenido={"Contratar"} />
                </div>

                <h2 className={`${michroma.className} titulosResponsive`}>
                  Plan Hero
                </h2>
                <div className="estiloPlanes">
                  <ul className="textoResponsive">
                    <li>Todo lo del plan Starter</li>
                    <li>Hasta 4 modificaciones al año</li>
                    <li>Soporte prioritario (24h)</li>
                    <li>Formularios de contacto y WhatsApp</li>
                    <li>Reporte trimestral de visitas</li>
                    <li>
                      <h6>VALOR : $150.000 CLP</h6>
                    </li>
                  </ul>
                  <br />
                  <BotonMui contenido={"Contratar"} />
                </div>

                <h2 className={`${michroma.className} titulosResponsive`}>
                  Plan PRO
                </h2>
                <div className="estiloPlanes">
                  <ul className="textoResponsive">
                    <li>Todo lo del plan Pro</li>
                    <li>Hasta 12 modificaciones al año (1 por mes)</li>
                    <li>Soporte premium (respuesta en el mismo día)</li>
                    <li>Actualización de diseño anual</li>
                    <li>Mantenimiento y monitoreo de seguridad</li>
                    <li>Reporte trimestral de visitas</li>
                    <li>
                      <h6>VALOR : $250.000 CLP</h6>
                    </li>
                  </ul>
                  <br />
                  <BotonMui contenido={"Contratar"} />

                  <p className="text-sm mt-2 text-gray-300">
                    Incluye 1 mes de marcha blanca con ajustes ilimitados.
                  </p>
                </div><br /><br /><br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

   
  );
}
