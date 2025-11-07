"use client";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });

import Image from "next/image";
import { HandThumbUpIcon, BoltIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Carousel from '../../componentes/Carousel';

export default function Portada() {
  return (
    <div className="relative w-full min-h-[88vh] sm:min-h-screen overflow-hidden">
      <Image
        src="/doctorfondo.jpg"
        alt="Fondo portada"
        fill
        priority
        quality={85}
        className="object-cover object-center -z-10"
        style={{
          willChange: 'auto',
          transform: 'translateZ(0)',
        }}
      />
      {/* Fondo pro: gradiente + patrón sutil */}
      <div className="absolute inset-0" style={{ willChange: 'auto' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/70 via-[#0B0F1A]/80 to-black" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
        {/* Cinta/top badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            El control total de tu propia consulta Médica
          </span>
        </div>

        {/* Contenido centrado */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h1
            className={`${michroma.className} antialiased text-[clamp(2rem,8.5vw,6rem)] md:text-[clamp(3rem,6.5vw,7rem)] lg:text-[clamp(3.5rem,5vw,8rem)] leading-[1.05] tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] mb-8`}
            style={{ fontFamily: michroma.style.fontFamily }}
          >
            M e d i f y
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Es la herramienta para tener el control de tus consultas médicas, pacientes y reservas,
            adaptando tus necesidades a tu servicio y manteniendo tus horarios de forma profesional.
          </p>

          {/* CTA centrados */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/56977889900?text=Quiero%20cotizar%20una%20solución%20médica%20de%20Medify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.8)] ring-1 ring-blue-400/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Cotizar solución médica por WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 .06 11.94 11.94 0 0 0 3.48 3.48C.51 6.46-.52 10.73.6 14.64L.03 23.97l9.33-.57a11.94 11.94 0 0 0 4.91 1.02h.01c3.19 0 6.2-1.24 8.46-3.5A11.94 11.94 0 0 0 24 12a11.94 11.94 0 0 0-3.48-8.52ZM12 21.5h-.01a9.9 9.9 0 0 1-4.45-1.05l-.32-.15-5.53.34.35-5.5-.15-.33A9.9 9.9 0 0 1 2.5 12 9.5 9.5 0 1 1 12 21.5Zm5.21-7.16c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.08-.29-.15-1.22-.45-2.33-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.77.36-.26.29-1.01.98-1.01 2.39 0 1.41 1.03 2.77 1.18 2.96.15.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
              </svg>
              Solicitar consulta
            </a>

            <a
              href="/servicios"
              className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-semibold text-blue-100 border border-blue-400/40 bg-white/5 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:bg-white/10 hover:text-white transition-all"
            >
              Ver soluciones
            </a>
          </div>
        </div>

        {/* Franja de logotipos / confianza (placeholders) */}

      </div>
    </div>
  );
}
