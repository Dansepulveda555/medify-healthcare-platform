"use client";
import Stepper, { Step } from "@/componentes/Stepper";
import Aurora from "@/componentes/Aurora";
import BotonMui from "@/componentes/BotonMui";
import Image from "next/image";

export default function () {
  return (
    <div>
      <div>
        <Aurora />
      </div>

      <div
        className="
            grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-16
        bg-[url('/landingFondo.png')] bg-cover"
      >
        <div className="col-span-2 p-12">
          <div>
            <h3 className="text-sm md:text-4xl">
              <strong className="text-purple-500 text-4xl md:text-6xl">
                Desarrollo y Soporte
              </strong>
              <br />
              <br />
              Aquí encontrarás asistencia rápida y personalizada para resolver
              cualquier duda o problema.
            </h3>
            <br />
          </div>

          <div>
            <h4 className=" textoNormalResposivo font-bold">
              WhatsApp :{" "}
              <strong className="text-cyan-300">+569 32239282 </strong>
            </h4>
          </div>
          <div>
            <h4 className="textoNormalResposivo font-bold">
              Correo electrónico:{" "}
              <strong className="text-cyan-300">
                desarrollo@nexiodevelopers.com
              </strong>
            </h4>
          </div>
          <br />
        </div>

        <div className="md:justify-self-start">
          <Image
            alt="soporte"
            src={"/soporte.png"}
            height={"500"}
            width={"300"}
            className="rounded-4xl"
          ></Image>
          <br />

        </div>
      </div>
    </div>
  );
}
