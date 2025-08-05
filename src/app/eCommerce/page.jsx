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

export default function Ecommerce() {
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
          Planes E - Commerce
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
            <br />
            <br />
            <p className="textoResponsive">
              <h2>
                ¿Por qué una empresa debería tener un e-commerce desarrollado a
                medida?
              </h2>
              <br />
              En un mercado digital competitivo, las soluciones genéricas ya no
              son suficientes. Un{" "}
              <strong>e-commerce desarrollado a medida</strong> permite que tu
              negocio se diferencie, transmita confianza y se adapte 100% a tus
              procesos y necesidades.
              <br />
              <br />
              <strong>Ventajas clave de un desarrollo personalizado:</strong>
              <br />
              <br />
              <ul>
                <li>
                  • Adaptación total a tus procesos de venta, logística y
                  atención.
                </li>
                <br />
                <li>
                  • Mayor velocidad y rendimiento en comparación con plataformas
                  saturadas.
                </li>
                <br />
                <li>
                  • Mejor posicionamiento SEO y mayor control sobre tus datos.
                </li>
                <br />
                <li>
                  • Integraciones con sistemas internos (ERP, CRM, pasarelas de
                  pago, etc).
                </li>
                <br />
                <li>
                  • Escalabilidad real sin pagar más por plugins o funciones
                  básicas.
                </li>
                <br />
              </ul>
              Una tienda online a medida <strong>no es un gasto</strong>, es una
              inversión en la profesionalización, automatización y expansión de
              tu negocio.
            </p>{" "}
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <Image
                height={2000}
                width={1000}
                src="/ecomerce1.jpeg"
                alt="foto landing"
                className="rounded-3xl hidden md:block"
              />
            </div>
          </div>

          <div>
            <div className="flex-row">
              <div className=" flex flex-col justify-center space-y-8">
                <h2 className={`${michroma.className} titulosResponsive`}>
                  Plan E-Commerce Pro{" "}
                </h2>
                <div className="estiloPlanesFuccia">
                  <ul className="textoResponsive">
                    <li>Tienda personalizada con hasta 10 productos</li>
                    <li>
                      Integración con medios de pago (Transbank, MercadoPago,
                      etc.)
                    </li>
                    <li>Responsive (adaptada a celulares y tablets)</li>
                    <li>Soporte idefinido (respuesta en 48h)</li>
                    <li>2 modificaciones menores post-entrega</li>
                    <br />
                    <li>
                      <h6>$390.000 CLP</h6>
                    </li>
                  </ul>
                  <br />
                  <BotonMui contenido={"Contratar"} />
                </div>

                <h2 className={`${michroma.className} titulosResponsive`}>
                  Plan Ejecutivo{" "}
                </h2>
                <div className="estiloPlanesFuccia">
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
                  Plan Corporativo
                </h2>
                <div className="estiloPlanesFuccia">
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
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>

                   <div>
    
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
