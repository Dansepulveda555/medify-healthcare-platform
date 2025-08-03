import Link from "next/link"



export default function NavbarTai(){
    return(
        <div className="
        flex 
        justify-center 
        p-8 
        space-x-8
        text-2xl
        font-bold

         ">
        
        <h5 className="hover:text-blue-900 transition duration-300">Precios</h5>
        <h5 className="hover:text-blue-900 transition duration-300">Servicios</h5>
        <h5 className="hover:text-blue-900 transition duration-300">Proyectos</h5>
        
        </div>
    )
}