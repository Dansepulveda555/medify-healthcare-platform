import Image from "next/image";

export default function SobreNosotros() {
  return (
<div className="grid grid-cols-2 gap-x-30 p-10">
      <div>
      <h1 className="titulosResponsive">Sobre Nosotros</h1><br />
      <p className="textoResponsive">
        En NexusDev somos una agencia de desarrollo especializada en productos
        web. Nuestro equipo combißna creatividad y tecnología para diseñar y
        desarrollar aplicaciones, landing pages y sitios web que reflejan la
        identidad de cada cliente y aportan verdadero valor a su presencia
        digital.
      </p>
      <br />
      <p className="textoResponsive">
        Nuestra especialización se centra en el desarrollo de aplicaciones a
        medida, la creación de landing pages estratégicas y el diseño de páginas
        web modernas. Nos distinguimos por combinar tecnología de vanguardia,
        diseño atractivo y una experiencia de usuario optimizada, ofreciendo
        soluciones digitales que impulsan el crecimiento y la presencia online
        de cada cliente.
      </p>
    </div>
      <div><Image src ="/portada1.jpg" width={600} height={600} className="w-full h-auto"/></div>
    
</div>
  );
}
