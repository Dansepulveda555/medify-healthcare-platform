"use client"
import Image from "next/image";
import Threads from "@/componentes/Threads";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      {/* Bloque 1: Intro */}
      <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-3xl md:rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          <h1 className={`${michroma.className} leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white`}>
            Sobre Medify
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Somos especialistas en desarrollo de soluciones tecnológicas para el sector salud, 
            enfocados en crear sistemas seguros, intuitivos y conformes con los más altos 
            estándares de confidencialidad médica.
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Nuestro objetivo es modernizar la práctica médica con herramientas digitales 
            que optimizan la gestión clínica, mejoran la atención al paciente y simplifican 
            los procesos administrativos, siempre priorizando la seguridad de los datos médicos.
          </p>
        </div>
        <div className="order-first md:order-none">
          <Image
            src="/webstorm.svg"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
            alt="Profesionales médicos usando tecnología de Medify"
            className="rounded-2xl md:rounded-3xl w-full h-auto object-cover ring-1 ring-white/10 shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Bloque 2: Video + texto */}
      <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-3xl md:rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          {/* Video visible en md+ */}
          <video
            src="/exito.mp4"
            className="w-full h-auto rounded-2xl md:rounded-3xl ring-1 ring-white/10 shadow-xl hidden md:block"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Desarrollamos soluciones exclusivamente para el sector salud. Cada sistema 
            que creamos cumple con estrictos protocolos de seguridad, incluyendo 
            cumplimiento HIPAA, cifrado de extremo a extremo y auditorías de seguridad 
            continuas para proteger la información sensible de los pacientes.
          </p>
        </div>
      </section>

      {/* Bloque 3: Misión / Visión / Valores / Propuesta de Valor */}
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-3xl md:rounded-4xl shadow-2xl backdrop-blur-sm">
        <h2 className={`${michroma.className} leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center`}>
          Nuestro Compromiso con la Salud
        </h2>
        <p className="mt-4 sm:mt-6 text-center text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Especializados en tecnología médica que combina innovación, seguridad y cumplimiento 
          normativo para entregar soluciones que transforman la práctica médica.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Misión */}
          <div className="group rounded-2xl ring-1 ring-white/10 bg-black/30 p-6 hover:ring-blue-400/40 transition">
            <h3 className={`${michroma.className} text-xl sm:text-2xl text-white flex items-center gap-2`}>
              <span aria-hidden>�</span> Misión
            </h3>
            <p className="mt-3 text-white/85">
              Desarrollar sistemas médicos digitales seguros que optimizan la gestión clínica, 
              mejoran la experiencia del paciente y empoderan a los profesionales de la salud 
              con herramientas tecnológicas de vanguardia.
            </p>
          </div>

          {/* Visión */}
          <div className="group rounded-2xl ring-1 ring-white/10 bg-black/30 p-6 hover:ring-blue-400/40 transition">
            <h3 className={`${michroma.className} text-xl sm:text-2xl text-white flex items-center gap-2`}>
              <span aria-hidden>�</span> Visión
            </h3>
            <p className="mt-3 text-white/85">
              Ser líderes en Latinoamérica en tecnología médica, democratizando el acceso 
              a soluciones digitales avanzadas para clínicas, hospitales y profesionales 
              de la salud independientes.
            </p>
          </div>

          {/* Valores */}
          <div className="group rounded-2xl ring-1 ring-white/10 bg-black/30 p-6 hover:ring-blue-400/40 transition">
            <h3 className={`${michroma.className} text-xl sm:text-2xl text-white flex items-center gap-2`}>
              <span aria-hidden>�</span> Valores
            </h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li><strong className="text-white">Confidencialidad:</strong> protección absoluta de datos médicos.</li>
              <li><strong className="text-white">Precisión:</strong> sistemas confiables para decisiones críticas.</li>
              <li><strong className="text-white">Cumplimiento:</strong> adherencia estricta a regulaciones médicas.</li>
              <li><strong className="text-white">Innovación:</strong> tecnología de punta para el sector salud.</li>
              <li><strong className="text-white">Empatía:</strong> soluciones centradas en el bienestar.</li>
            </ul>
          </div>

          {/* Propuesta de Valor */}
          <div className="group rounded-2xl ring-1 ring-white/10 bg-black/30 p-6 hover:ring-blue-400/40 transition">
            <h3 className={`${michroma.className} text-xl sm:text-2xl text-white flex items-center gap-2`}>
              <span aria-hidden>⚕️</span> Propuesta de Valor
            </h3>
            <p className="mt-3 text-white/85">
              Sistemas médicos personalizados que garantizan seguridad de datos, cumplimiento 
              HIPAA y optimización de flujos de trabajo clínicos, permitiendo que los médicos 
              se enfoquen en lo más importante: sus pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 4: CTA con fondo dinámico */}
      <section className="relative overflow-hidden rounded-3xl md:rounded-4xl ring-1 ring-white/10 shadow-2xl px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24 lg:py-28 text-center">
        {/* Contenedor para Threads como fondo absoluto */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0">
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </div>
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>

        <h2 className={`${michroma.className} leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white`}>
          ¿Listo para modernizar tu práctica médica?
        </h2>
      </section>
    </div>
  );
}
