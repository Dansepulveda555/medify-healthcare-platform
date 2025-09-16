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
            Sobre Nosotros
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Somos una agencia de desarrollo web, enfocada en ofrecer soluciones de alto nivel y
            personalizadas para profesionales y empresas que buscan soluciones
            digitales.
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Nuestro objetivo es llevar su imagen y negocio al siguiente nivel,
            creando plataformas que transmitan profesionalismo y brinden a sus
            clientes una experiencia excepcional, reflejando la calidad y
            dedicación de su trabajo.
          </p>
        </div>
        <div className="order-first md:order-none">
          <Image
            src="/webstorm.svg"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
            alt="Equipo de desarrollo trabajando en soluciones web"
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
            No utilizamos plantillas ni soluciones genéricas. Usamos todo el
            poder de la ingeniería de software, trabajando con lenguajes de
            programación y frameworks de alta performance para crear
            plataformas únicas que se adaptan a las necesidades de cada
            cliente.
          </p>
        </div>
      </section>

      {/* Bloque 3: CTA con fondo dinámico */}
      <section className="relative overflow-hidden rounded-3xl md:rounded-4xl ring-1 ring-white/10 shadow-2xl px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24 lg:py-28 text-center">
        {/* Contenedor para Threads como fondo absoluto */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0">
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </div>
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>

        <h2 className={`${michroma.className} leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white`}>
          ¿Estás listo para avanzar al siguiente nivel?
        </h2>
      </section>
    </div>
  );
}
