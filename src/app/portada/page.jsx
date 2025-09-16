"use client";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import NavbarTai from "@/componentes/NavbarTai";
import Aurora from "@/componentes/Aurora";
import Image from "next/image";

export default function Portada() {
  return (
    <div className="relative w-full min-h-screen bg-[url('/portada.png')] bg-no-repeat bg-cover bg-center sm:min-h-[80vh] sm:px-4 sm:py-10">
      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Encabezado sólo para móviles con portada2 */}
      <div className="block md:hidden mb-8">
        <div className="pt-8 pb-6 px-2">
          <div className="text-center mb-3">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Agencia de desarrollo web premium
            </span>
          </div>

          <h1 className={`${michroma.className} text-center text-2xl sm:text-3xl leading-tight font-bold text-white`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              NativeCode
            </span>
          </h1>

          <div className="mt-4 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-fuchsia-500/20 blur-2xl rounded-2xl" aria-hidden="true"></div>
              <Image
                src={"/portada5.png"}
                alt="Portada NativeCode"
                width={360}
                height={140}
                className="relative h-auto w-64 sm:w-72 object-contain rounded-xl ring-1 ring-white/10 shadow-xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 items-center">
          {/* Columna de texto */}
          <div className="md:col-span-3">
            <div className="text-2xl hidden md:inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Agencia de Desarrollo Web
            </div>

            <h1
              className={`${michroma.className} mt-4 text-2xl sm:text-3xl md:text-6xl leading-tight font-bold text-white hidden md:block`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                NativeCode
              </span>
            </h1>

            <p
              className={`${michroma.className} mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-white/80 max-w-2xl`}
            >
              Disfrute de una plataforma web hecha a su medida, sin plantillas genéricas, con
              interfaces claras y fáciles de usar. Rendimiento, seguridad y soporte profesional.
            </p>

            {/* Botones de acción */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur transition hover:bg-white/15 hover:shadow-black/30"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-xl border border-violet-400/30 bg-violet-500/20 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 backdrop-blur transition hover:bg-violet-500/30"
              >
                Cotizar proyecto
              </a>
            </div>

            {/* Navbar (si quieres que siga visible aquí) */}
    
          </div>

          {/* Columna de imagen */}
          <div className="hidden md:flex md:col-span-2 justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet-500/30 via-fuchsia-400/20 to-indigo-400/30 blur-2xl" />
              <Image
                src={"/portada2.png"}
                alt="imagenProgramador"
                height={800}
                width={400}
                className="relative rounded-3xl ring-1 ring-white/15 shadow-2xl w-[200px] sm:w-[250px] md:w-[320px] lg:w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}
