"use client";

export default function Beneficios(){
    return(
        <div className="relative min-h-screen">
            {/* Deep Ocean Glow Background */}
            <div className="absolute inset-0" style={{
                background: "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%)"
            }} />
            
            <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="titulosResponsive text-white text-center">Beneficios</h1>
            </div>
        </div>
    )
}