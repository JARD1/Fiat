import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import FloatingWhatsApp from "./components/FloatingWhatsApp"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiat Venezuela | MVP",
  description: "Catálogo de vehículos Fiat en Venezuela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Navbar Global */}
        <Navbar />
        
        {/* Renderizamos las páginas directamente sin un div extra que estorbe */}
        {children}

        {/* Botón Flotante Global */}
        <FloatingWhatsApp />
        
      </body>
    </html>
  );
}