"use client";

import CardLong from "@/componentes/CardLong";

export default function Servicios() {
  const titulo1 = "Página Web Profesional Multipágina";
  const descripcion1 =
    "Sitio web moderno y multipágina con módulos adicionales para potenciar tu negocio: agendamiento online, pagos, blog, correo corporativo, entre otros. Pensado para quienes quieren destacarse con una experiencia digital completa.";
  const imagen1 = "/paginasweb.jpg";

  const titulo2 = "Página Web para Profesionales";
  const descripcion2 =
    "Una sola página 100% optimizada, con diseño profesional y llamados a la acción claros. Ideal para captar nuevos pacientes o clientes sin rodeos. ";
  const imagen2 = "/landing.jpg";

  const titulo3 = "E-commerce Profesional";
  const descripcion3 =
    "Solución web avanzada para negocios que quieren vender online, con integración total a sistemas de stock, pagos, inventario y análisis. Ideal para empresas que buscan digitalizar su operación comercial de forma robusta.";
  const imagen3 = "/ecomerce.jpg";



  const titulo5 = "Servicio Personalizado";
  const descripcion5 =
    "Ofrecemos soluciones de desarrollo a medida según tus necesidades, ya sea una aplicación web, una intranet o un proyecto especial que requiera innovación.";
  const imagen5 = "/images/servicios/personalizado.jpg";

  return (
    <div className="
    grid grid-cols-1 p-12
    w-full
    bg-#1A0
    ">
      <h1 className="text text-4xl md:text-5xl lg:text-7xl font-black justify-center px-8 mb-8">
        Nuestros Servicios
      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      justify-items-center
      gap-8
      bg-g

      px-2 sm:px-4 md:px-2
      py-2 sm:py-6 md:py-6

      ">
        <div>
          <CardLong
            imagen={imagen1}
            titulo={titulo1}
            descripcion={descripcion1}
            pagina={"/paginasWeb"}
          ></CardLong>
        </div>

        <div>
          <CardLong
            imagen={imagen2}
            titulo={titulo2}
            descripcion={descripcion2}
            pagina={"/landingpages"}
          ></CardLong>
        </div>

        <div>
          <CardLong
            imagen={imagen3}
            titulo={titulo3}
            descripcion={descripcion3}
            pagina={"/eCommerce"}
          ></CardLong>
        </div>

  
      </div>
    </div>
  );
}
