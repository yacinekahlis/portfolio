"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="mb-4 text-2xl font-bold text-slate-900">Qui suis-je?</h3>
        <p className="mb-4 text-slate-700">
          Je suis un diplômé en génie logiciel de l'Université Laval, passionné par le développement web, l'architecture logicielle,
          et les technologies cloud. J'adore coder, que ce soit pour concevoir des interfaces modernes côté frontend ou bâtir des architectures
          robustes côté backend. Issu d'une famille de développeurs, mon père étant architecte d'entreprise et mon frère développeur Java,
          j'ai toujours été entouré par une culture de programmation qui m'a poussé à explorer constamment de nouvelles technologies.
        </p>
        <p className="mb-4 text-slate-700">
          Mon parcours professionnel chez iA Groupe Financier ainsi que mes projets personnels m'ont permis de développer une solide
          expertise en développement full stack.
        </p>
        <p className="text-slate-700">
          Passionné par le cloud, j'aime explorer des solutions scalables et sécurisées, notamment en utilisant les services Azure. Je suis toujours
          à la recherche de nouveaux défis pour approfondir mes connaissances, améliorer mes compétences, et contribuer à des projets innovants.
        </p>
      </motion.div>

      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Éducation</h4>
                <p className="text-sm text-slate-700">Baccalauréat en génie logiciel</p>
                <p className="text-sm text-slate-500">Université Laval, Décembre 2024</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Expérience</h4>
                <p className="text-sm text-slate-700">Développeur Web et Backend</p>
                <p className="text-sm text-slate-500">iA Groupe Financier, 2022-2023</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Certifications</h4>
                <p className="text-sm text-slate-700">Microsoft Certified: Azure Fundamentals</p>
                <p className="text-sm text-slate-500">Février 2025</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

