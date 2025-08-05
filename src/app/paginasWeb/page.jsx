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
export default function PaginasWeb() {
  return (
    <div>
      <div>
        <div>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <h1 className={`${michroma.className} titulosResponsive`}>
            Planes para paginas Web
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>

            <div>
                          <h2 className="textoResponsive">¿Por qué tu negocio necesita una plataforma web?</h2><br /><br />
            <p className="textoResponsive">
              Una página web es la carta de presentación digital de tu negocio.
              Te permite <strong>llegar a más clientes</strong>, generar
              confianza y proyectar una imagen profesional las 24 horas del día.
              Este servicio está dirigido a{" "}
              <strong>emprendedores, pequeñas y medianas empresas</strong> que
              desean crecer, aumentar su visibilidad y ofrecer información clara
              y accesible de sus productos o servicios.
            </p>
            </div><br /><br /><br /><br />

            <div>
              <Image
              src={'/web3.jpg'}
              alt="web1"
              height={1500}
              width={900}
              className="rounded-3xl"/>
              <br /><br />

        
            </div>

          </div>

          <div className="flex-col justify-items-center space-y-8 ">
            <h3 className={`${michroma.className} titulosResponsive`}>Plan Esencial</h3>
            <div className="flex-1 estiloPlanesCayan">
              <ul>
                <li>
                  Incluye <strong>4 secciones</strong>: Inicio, Servicios,
                  Contacto y Acerca de Nosotros.
                </li>
                <li>
                  <strong>Soporte ilimitado</strong> incluido desde el primer
                  día.
                </li>
                <li>
                  Hasta <strong>6 modificaciones adicionales</strong>{" "}
                  posteriores a la entrega.
                </li>
                <li>
                  Ideal para negocios que buscan presencia online profesional y
                  accesible.
                </li>
              </ul>
              <br />
              <h3>Valor : $300.000</h3>
              <br />
              <br />
              <BotonMui contenido={"Comprar"} />
            </div>

            <h3 className={`${michroma.className} titulosResponsive`} >Plan Platinum</h3>
            <div className="flex-1 estiloPlanesCayan">
              <ul>
                <li>
                  De <strong>6 a 8 secciones</strong> con diseño más detallado.
                </li>
                <li>
                  <strong>Soporte ilimitado</strong> para cualquier necesidad.
                </li>
                <li>
                  Hasta <strong>6 modificaciones posteriores</strong> incluidas.
                </li>
                <li>
                  Opciones avanzadas: formularios, galerías, funciones
                  personalizadas.
                </li>
              </ul>
              <br />
              <br />
              <br />
              <BotonMui contenido={"Comprar"} />
            </div>

            <h3 className={`${michroma.className} titulosResponsive`}>Plan Premium</h3>
            <div className="flex-1 estiloPlanesCayan">
              <ul>
                <li>
                  Desde <strong>8 secciones</strong> y posibilidad de expansión
                  sin límites.
                </li>
                <li>
                  <strong>Soporte ilimitado</strong> garantizado.
                </li>
                <li>
                  <strong>6 modificaciones incluidas</strong> en el desarrollo
                  inicial.
                </li>
                <li>
                  Funcionalidades especiales y diseño a medida según tus
                  necesidades.
                </li>
              </ul>
              <br />
              <br />
              <br />
              <BotonMui contenido={"Comprar"} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
