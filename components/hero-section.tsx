"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 px-4 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-purple-500 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-cyan-500 blur-3xl"></div>
        </div>

        <div className="z-10 flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-16">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Yacine Kahlis</h1>
            <h2 className="mb-6 text-2xl font-medium text-slate-300 sm:text-3xl">Ingénieur Logiciel</h2>
            <p className="mb-8 max-w-lg text-lg text-slate-300">
              Diplômé en génie logiciel passionné par le développement, l'architecture, les applications cloud et l'intelligence
              artificielle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
              >
                Me Contacter
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white/10"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects")
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
              >
                Voir Mes Projets
              </Button>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/20 shadow-xl md:h-80 md:w-80"
          >
            {/* Placeholder pour votre photo */}
              <div className="flex h-[800px] w-[800px] items-center justify-center bg-slate-700 text-center text-sm text-white">
                  <div className="w-full h-full">
                      <Image
                          src="/me.jpg"
                          alt=""
                          layout="fill"
                          objectFit="cover"
                      />
                  </div>
              </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:bg-white/10"
                onClick={scrollToAbout}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
  )
}

