"use client"
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });


import Navbar from "@/componentes/navbar";
import Orb from "@/componentes/orbe";

export default function Portada(){
  return(
<div>
<Navbar></Navbar>
  <div>
    <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false}/>
      <h1 className={michroma.className} style={{ position: 'absolute', color: '#fff', fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold' }}>NexusDev</h1>
    </div>
  </div>





</div>
  )
}