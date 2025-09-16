"use client"
import Image from "next/image";
import Threads from "@/componentes/Threads";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div className="space-y-24 md:space-y-32">
      <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-6 md:px-10 lg:px-14 py-16 md:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          <h1 className={`titulosResponsive ${michroma.className} leading-tight tracking-tight`}>Sobre Nosotros</h1>
          <p className="mt-6 text-lg md:text-2xl text-white/90">
            Somos una agencia de desarrollo web, enfocada en ofrecer soluciones de alto nivel y
            personalizadas para profesionales y empresas que buscan soluciones
            digitales.
          </p>
          <p className="mt-6 text-lg md:text-2xl text-white/90">
            Nuestro objetivo es llevar su imagen y negocio al siguiente nivel,
            creando plataformas que transmitan profesionalismo y brinden a sus
            clientes una experiencia excepcional, reflejando la calidad y
            dedicación de su trabajo.
          </p>
        </div>
        <div>
          <Image
            src="webstorm.svg"
            width={600}
            height={400}
            sizes="(min-width: 768px) 600px, 100vw"
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-3xl w-full h-auto object-cover ring-1 ring-white/10 shadow-xl"
          />
        </div>
      </div>

      <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-6 md:px-10 lg:px-14 py-16 md:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          <video
            src={"/exito.mp4"}
            className="w-full h-auto rounded-3xl ring-1 ring-white/10 shadow-xl hidden md:block lg:block"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        <div>
          <p className="text-lg md:text-2xl text-white/90">
            No utilizamos plantillas ni soluciones genéricas. Usamos todo el
            poder de la ingeniería de software, trabajando con lenguajes de
            programación y frameworks de alta performance para crear
            plataformas únicas que se adaptan a las necesidades de cada
            cliente.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-4xl ring-1 ring-white/10 shadow-2xl px-6 md:px-10 lg:px-14 py-20 md:py-28 text-center">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        </div>
        <h2
          className={`${michroma.className} subtitulosResponsive relative z-10 leading-tight tracking-tight`}
        >
          ¿Estás listo para avanzar al siguiente nivel?
        </h2>
      </div>
    </div>
  );
}
