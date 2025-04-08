import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Yacine Kahlis | Développeur Full Stack",
    description:
        "Portfolio de Yacine Kahlis, développeur full stack spécialisé en React, Next.js, .NET et technologies cloud.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}
        <Analytics/>
        <Toaster position="bottom-right" />
        </body>
        </html>
    )
}

