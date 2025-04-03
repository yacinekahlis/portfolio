"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Assurez-vous que les liens de navigation correspondent exactement aux IDs des sections
  const navLinks = [
    { name: "À Propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "CV", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  // Ajoutez cette fonction pour gérer le défilement en douceur
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Ajoutez un petit décalage pour tenir compte de la barre de navigation fixe
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setIsOpen(false)
    }
  }

  return (
      <nav
          className={cn(
              "fixed left-0 top-0 z-50 w-full transition-all duration-300",
              scrolled ? "bg-white shadow-md" : "bg-transparent",
          )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a
                  href="#"
                  className={cn(
                      "text-xl font-bold transition-colors duration-300",
                      scrolled ? "text-slate-900" : "text-white",
                  )}
              >
                Yacine Kahlis
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300",
                            scrolled
                                ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                : "text-white hover:bg-white/10 hover:text-white",
                        )}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                      "transition-colors duration-300",
                      scrolled
                          ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                          : "text-white hover:bg-white/10 hover:text-white",
                  )}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
            <div className="md:hidden">
              <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                ))}
              </div>
            </div>
        )}
      </nav>
  )
}

