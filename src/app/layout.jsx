'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import FloatingActionButtons from "@/componentes/FloatingActionButtons";
import Footer from "./Footer/page";





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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FloatingActionButtons tooltip={'Hablar con Manager IT'} position={{ bottom: 16, right: 16 }} />
        {children}
            <div>
        <Footer></Footer>
      </div>
      </body>
    </html>
  );
}
