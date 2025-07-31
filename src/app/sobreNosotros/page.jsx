import Image from "next/image";

export default function SobreNosotros() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 p-10">
      <div>
        <h1 className="titulosResponsive">Sobre Nosotros</h1>
        <br />
        <p className="textoResponsive">
          Somos una agencia de desarrollo web conformada por un equipo
          multidisciplinario, enfocado en ofrecer soluciones de alto nivel y
          totalmente personalizadas para profesionales y empresas que buscan
          soluciones reales.
        </p>
        <br />
        <p className="textoResponsive">
          No utilizamos plantillas ni soluciones genéricas; aprovechamos todo el
          poder de la ingeniería de software, trabajando con lenguajes de programacion y
          frameworks de alta eficiencia para crear plataformas únicas que se
          adaptan a las necesidades de cada cliente.
        </p>
        <br />
        <br />
        <p className="textoResponsive">
          Nuestro objetivo es llevar su imagen y negocio al siguiente nivel,
          creando plataformas que transmitan profesionalismo y brinden a sus
          clientes una experiencia excepcional, reflejando la calidad y
          dedicación de su trabajo.
        </p>
      </div>
      <div>
        <Image
          src="/portada1.jpg"
          width={600}
          height={600}
          className="w-full h-auto hidden md:block rounded-4xl"
        />
      </div>
    </div>
  );
}
