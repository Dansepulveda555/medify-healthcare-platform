import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import FloatingActionButtons from "@/componentes/FloatingActionButtons";




const poppins = Poppins({
  subsets: ["latin"],       // puedes poner "latin", "latin-ext", etc.
  weight: ["400", "600"],   // los pesos que usarás
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"], // puedes ajustar los pesos que necesites
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        
      </header>
      <body className={`${poppins.className} antialiased`}>
        <FloatingActionButtons position={{ bottom: 16, right: 16 }} />
        {children}
      </body>
    </html>
  );
}
