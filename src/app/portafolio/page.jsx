"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";
import { func } from 'prop-types';
import Image from 'next/image';
import { Michroma, Space_Grotesk } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function Portafolio(){
  return(
    <div>
      {/* PÁGINA COMPLETAMENTE COMENTADA - NO SE MUESTRA NADA */}
      
      {/* 
      TODO: Página de portafolio temporalmente deshabilitada 
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
            Portafolio en Construcción
          </h1>
          <p className={`text-gray-400 text-lg ${spaceGrotesk.className}`}>
            Esta sección estará disponible próximamente
          </p>
        </div>
      </div>
      
      CÓDIGO ORIGINAL COMENTADO - NO BORRAR
      
      <h1 className={`${spaceGrotesk.className} py-10 text-4xl md:text-5xl text-center font-bold text-white`}>
        Casos de Éxito Médico
      </h1>
      <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400 text-lg">
        Profesionales de la salud que ya transformaron su práctica con <span className="text-blue-400">Medify</span>
      </p>

      <section className="relative bg-neutral-900/40 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
              ¿Por qué los médicos eligen <span className="text-blue-400">Medify</span>?
            </h3>
            <p className="text-white/80 text-base md:text-lg">
              Combinamos tecnología médica avanzada con interfaces intuitivas para entregar sistemas seguros, 
              escalables y conformes con regulaciones de salud. Entendemos tus necesidades clínicas y las transformamos en soluciones que mejoran la atención al paciente.
              entendemos tus necesidades clínicas y las transformamos en soluciones que mejoran la atención al paciente.
            </p>
            <p className="text-white/80 text-base md:text-lg">
              Cumplimiento HIPAA, sistemas confiables y soporte médico especializado. Nuestro compromiso es que 
              tu práctica sea más eficiente hoy y esté preparada para el futuro de la medicina digital.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 blur-2xl rounded-3xl" aria-hidden="true"></div>
              <Image
                src="/ico2.png"
                alt="Medify logo médico"
                width={140}
                height={140}
                className="relative w-28 h-28 md:w-36 md:h-36 object-contain rounded-2xl ring-1 ring-white/10 shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <a href="/proyecto/denisse" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/deniss.png"
                alt="Sistema médico para psicóloga"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="relative h-full w-full flex items-end justify-center p-6">
                  <p className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.35)] text-lg md:text-xl font-semibold text-center">
                    Dra. Deniss Beltrán / Sistema de Gestión Psicológica
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://jpaingenieriasolutions.cl/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/jpa.png"
                alt="Plataforma de telemedicina"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="relative h-full w-full flex items-end justify-center p-6">
                  <p className="text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.35)] text-lg md:text-xl font-semibold text-center">
                    Centro Médico Integral / Plataforma de Telemedicina
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      
      FIN DEL CÓDIGO ORIGINAL COMENTADO
      */}
    </div>
  )
} 