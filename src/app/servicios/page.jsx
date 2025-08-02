"use client";

import CardLong from "@/componentes/CardLong";

export default function Servicios() {
  const titulo1 = "Creacion de Páginas Web";
  const descripcion1 =
    "Creamos sitios web modernos, funcionales y adaptados a cualquier dispositivo, asegurando una experiencia de usuario óptima y una presencia digital sólida para tu negocio.";
  const imagen1 = "/paginasweb.jpg";

  const titulo2 = "Landing Pages";
  const descripcion2 =
    "Desarrollamos landing pages atractivas y persuasivas para captar leads, promocionar productos o servicios específicos, y maximizar tus conversiones.";
  const imagen2 = "/landing.jpg";

  const titulo3 = "Tiendas E-commerce";
  const descripcion3 =
    "Construimos tiendas online seguras y escalables, con integración de métodos de pago y gestión de inventario, para que puedas vender en línea de manera efectiva.";
  const imagen3 = "/ecomerce.jpg";

  const titulo4 = "Publicidad Digital";
  const descripcion4 =
    "Gestionamos campañas de publicidad online en redes sociales y Google Ads, optimizando tu inversión para alcanzar a tu público objetivo con el mejor retorno posible.";
  const imagen4 = "/publicidad.jpg";

  const titulo5 = "Servicio Personalizado";
  const descripcion5 =
    "Ofrecemos soluciones de desarrollo a medida según tus necesidades, ya sea una aplicación web, una intranet o un proyecto especial que requiera innovación.";
  const imagen5 = "/images/servicios/personalizado.jpg";

  return (
    <div className="grid grid-cols-1 p-12">
      <h1 className="text text-4xl md:text-5xl lg:text-7xl font-black justify-center px-8 mb-8">
        Nuestros Servicios
      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-4
      lg:grid-cols-4
      xl:grid-cols-4
      justify-center
      gap-8

      px-2 sm:px-4 md:px-8
      py-2 sm:py-6 md:py-12
      


      ">
        <div>
          <CardLong
            imagen={imagen1}
            titulo={titulo1}
            descripcion={descripcion1}
            pagina={"/landingpages"}
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
            pagina={"/landingpages"}
          ></CardLong>
        </div>

        <div>
          <CardLong
            imagen={imagen4}
            titulo={titulo4}
            descripcion={descripcion4}
            pagina={"/landingpages"}
          ></CardLong>
        </div>
      </div>
    </div>
  );
}
