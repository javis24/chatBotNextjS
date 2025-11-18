// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.restonwater.com.mx"),
  title: {
    default:
      "Reston Water | Agua purificada con ósmosis inversa en Monterrey y La Laguna",
    template: "%s | Reston Water",
  },
  description:
    "Contrata tu sistema de agua purificada con ósmosis inversa en modalidad de renta. Cobertura en Monterrey y La Laguna, instalación incluida, mantenimiento programado y asesoría por chatbot 24/7.",
  keywords: [
    "agua purificada",
    "ósmosis inversa",
    "filtros de agua",
    "purificador de agua",
    "renta de purificador",
    "agua potable en casa",
    "agua Monterrey",
    "agua La Laguna",
    "reston water",
    "filtros bajo tarja",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.restonwater.com.mx/",
    siteName: "Reston Water",
    title:
      "Reston Water | Agua purificada en tu hogar con ósmosis inversa",
    description:
      "Deja de cargar garrafones. Ten agua purificada al instante con nuestro sistema de ósmosis inversa en renta. Cobertura en Monterrey y La Laguna, instalación sin costo y chatbot para resolver tus dudas.",
    images: [
      {
        url: "/restonwater.png", 
        width: 1200,
        height: 630,
        alt: "Purificador de agua de ósmosis inversa de Reston Water instalado en una cocina moderna.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reston Water | Agua purificada con ósmosis inversa",
    description:
      "Sistema de agua purificada en modalidad de renta, sin plazos forzosos, con instalación y mantenimiento incluidos.",
    images: ["/restonwater.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
