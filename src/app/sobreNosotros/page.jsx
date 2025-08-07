"use client"
import Image from "next/image";
import Threads from "@/componentes/Threads";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 p-10 
     ">
        <div>
          <h1 className="titulosResponsive">Sobre Nosotros</h1>
          <br />
          <p className="textoResponsive">
            Somos una agencia de desarrollo web conformada por un equipo
            multidisciplinario, enfocado en ofrecer soluciones de alto nivel y
            personalizadas para profesionales y empresas que buscan soluciones
            digitales.
          </p>
          <br />

          <br />
          <p className="textoResponsive">
            Nuestro objetivo es llevar su imagen y negocio al siguiente nivel,
            creando plataformas que transmitan profesionalismo y brinden a sus
            clientes una experiencia excepcional, reflejando la calidad y
            dedicación de su trabajo.
          </p><br /><br /><br />
        </div>
        <div>
          <Image
            src="webstorm.svg"
            width={600}
            height={400}
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-4xl w-200 h-auto object-cover"
          />
        </div>
      </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 p-10">
          <div>
            <video
              src={"/exito.mp4"}
              className="w-full h-auto rounded-4xl hidden md:block lg:block"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>

          <div>
            <p className="textoResponsive">
              No utilizamos plantillas ni soluciones genéricas, usamos todo el
              poder de la ingeniería de software, trabajando con lenguajes de
              programacion y frameworks de alta performance para crear
              plataformas únicas que se adaptan a las necesidades de cada
              cliente.
            </p>
          </div>
        </div>


        <div>

          <div style={{ width: '100%', height: '300px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
  />
  <h2 
    className={`${michroma.className} subtitulosResponsive`}

  >
    ¿Estas listo para avanzar al siguiente nivel de tu negocio?
  </h2>
</div>
        
  </div>
    </div>
  );
}
