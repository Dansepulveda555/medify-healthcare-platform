"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";
import { func } from 'prop-types';
import Image from 'next/image';
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });



export default function Portafolio(){
  return(
    <div>
      <h1 className={`${michroma.className} py-10 text-4xl md:text-5xl text-center font-bold text-white`}>
        Nuestro Portafolio
      </h1>
      <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400 text-lg">
        Algunos de los proyectos que ya confían en <span className="text-indigo-400">NativeCode</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
        <a href="/proyecto/denisse" target="_blank" rel="noopener noreferrer" className="group block">
          <div className="overflow-hidden rounded-lg border-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/deniss.png"
              alt="Proyecto Denisse"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4 text-center text-white font-semibold">Deniss Beltran / Psicologa </p>
        </a>
        <a href="/proyecto/jpa" target="_blank" rel="noopener noreferrer" className="group block">
          <div className="overflow-hidden rounded-lg border-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/jpa.png"
              alt="Proyecto JPA"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4 text-center text-white font-semibold">JPA Ingenieria</p>
        </a>
      </div>
    </div>
  )
}