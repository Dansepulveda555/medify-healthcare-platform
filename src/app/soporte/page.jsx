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
            <h3 className="text-2xl md:text-4xl">
               <strong className="text-purple-500 text-4xl md:text-6xl">Desarrollo y Soporte</strong><br /><br />Aquí encontrarás asistencia
              rápida y personalizada para resolver cualquier duda o problema.
            </h3><br /><br />
          </div>

          <div>
            <h4 className=" md:text-2xl font-bold">WhatsApp : +569 32239282 </h4>
          </div>
            <div>
            <h4 className="md:text-2xl font-bold" >Correo electrónico:  desarrollo@nexiodevelopers.com</h4>
          </div>
          <div>
            <br /><br /><br />
            <p className="md:text-2xl font-bold" >Puedes dejarnos un correo contandonos un problema y te contactaremos en breve</p>
            <br /><br />

            <h4 className=" md:text-2xl font-bold" >¿Cual es tu Nombre?</h4>
            <br /><input className="bg-black border-2 border-purple-500 rounded-2xl w-120 h-12 text-2xl" type="text" name="nombre" id="nombre" /><br /><br />
            <h4 className="md:md:text-2xl font-bold" >¿Cual es el nombre de tu empresa?</h4>
                        <br /><input className="bg-black border-2 border-purple-500 rounded-2xl w-120 h-12 md:text-2xl" type="text" name="nombre" id="nombre" /><br /><br />

            <h4 className="md:md:text-2xl font-bold">¿Cual es tu numero de telefono ?</h4>
                        <br /><input className="bg-black border-2 border-purple-500 rounded-2xl w-120 h-12 md:text-2xl" type="tel" name="nombre" id="nombre" /><br /><br />

            <h4 className="md:text-2xl font-bold">¿Porfavor indicanos tu correo?</h4>
                        <br /><input className="bg-black border-2 border-purple-500 rounded-2xl w-120 h-12 md:text-2xl" type="email" name="nombre" id="nombre" /><br /><br />

            <h4 className="md:text-2xl font-bold">Cuentanos que problema tienes</h4><br />
                       <textarea className="bg-black border-2 border-purple-500 rounded-2xl w-120 h-60 md:text-2xl" name="" id=""></textarea><br /><br /><br />
                       <BotonMui contenido={'Enviar Consulta'} /> 

          </div><br />
        </div>

        <div className="md:justify-self-start">
          <Image
          alt="soporte"
          src={'/soporte.png'}
          height={'500'}
          width={'300'}
          className="rounded-4xl"
         ></Image><br /><br /><br />
        
        </div>
      </div>
    </div>
  );
}
