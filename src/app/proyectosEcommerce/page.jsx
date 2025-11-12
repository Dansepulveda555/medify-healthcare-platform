"use client";

import Aurora from "@/componentes/Aurora";
import SplashCursor from "@/componentes/Splash";
import Image from "next/image";
import { Michroma, Space_Grotesk } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
import AccordionUsage from "@/componentes/Acordeon";
import BotonMui from "@/componentes/BotonMui";
import Threads from "@/componentes/Threads";
export default function ProyectosEcommerce() {
  return (
    <div>
      <div>
            <div>
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
              <h1 className={`${spaceGrotesk.className} titulosResponsive font-bold`}>
                Proyectos E - Commerce
              </h1>
            </div>
      </div>
    </div>
  );
}
