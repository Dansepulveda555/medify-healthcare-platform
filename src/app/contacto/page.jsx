"use client";
import Aurora from "@/componentes/Aurora";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

import Navbar from "@/componentes/Navbar";
import Orb from "@/componentes/Orbe";
import SplashCursor from "@/componentes/Splash";
import GooeyNav from "@/componentes/GooeyNav";
import ScrollVelocity from "@/componentes/InfiniteScroll";
import NavbarTai from "@/componentes/NavbarTai";
import BotonMui from "@/componentes/BotonMui";

export default function Contacto() {
  return (
    <div>
      <div>
        <Aurora />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center 
        bg-[url('/wall3.png')] bg-cover ">
        <div className="p-10">
          <h4 className="textoNormalResposivo">
            Únete a un equipo de desarrolladores experimentados. Transformamos
            ideas en productos reales, sin importar tu país ni huso horario.
          </h4>
        </div>

        <div className="p-8">
          <div className="my-14 flex">
            <Image
              src={'/contacto1.png'}
              alt="contact1"
              height={800}
              width={650}
              className="rounded-4xl"
            />    
          </div>
        </div>
      </div>
    </div>
  );
}
