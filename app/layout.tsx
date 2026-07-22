import type React from "react";
import type { Metadata } from "next";
import { Archivo, Spline_Sans_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-splinemono",
});

export const metadata: Metadata = {
  title: "Yacine Kahlis — Ingénieur logiciel",
  description:
    "Portfolio de Yacine Kahlis, ingénieur logiciel à Québec. Produits complets livrés : apps mobiles sur l'App Store, SaaS, sites clients — .NET, React, Next.js, React Native.",
  openGraph: {
    title: "Yacine Kahlis — Ingénieur logiciel",
    description:
      "Produits complets livrés : apps mobiles sur l'App Store, SaaS, sites clients.",
    images: ["/me.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${archivo.variable} ${splineMono.variable} grain`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
