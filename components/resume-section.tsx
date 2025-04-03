"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumeSection() {
  const experiences = [
    {
      title: "Développeur Web",
      company: "iA Groupe Financier (Secteur du marketing numérique)",
      period: "Avril 2023 – Septembre 2023",
      description: [
        "Contribution à la refonte complète de pages principales du site web ia.ca",
        "Développement frontend (HTML, CSS, JavaScript) en collaboration avec l'équipe UX/UI",
        "Développement backend en C# afin d'ajouter des composants dynamiques",
        "Déploiement des nouvelles fonctionnalités sur les environnements de test et de production",
        "Résolution proactive de problèmes complexes avec la console Chrome et autres outils de debugging",
        "Gestion du contenu web via Sitecore (CMS)",
        "Suivi du projet en méthodologie Agile avec Jira",
      ],
    },
    {
      title: "Livreur de solutions TI",
      company: "iA Groupe Financier (Secteur de la rémunération)",
      period: "Septembre 2022 – Mars 2023",
      description: [
        "Mise à niveau du .NET Framework sur l'ensemble des solutions du secteur Rémunération",
        "Développement et maintenance d'APIs REST en .NET avec Entity Framework",
        "Migration automatisée des données de MySQL vers MongoDB via scripts PowerShell",
        "Création et optimisation de pipelines CI/CD sur Azure DevOps avec intégration de tests automatisés (Postman)",
        "Identification et correction proactive de vulnérabilités de sécurité",
        "Rédaction d'une documentation détaillée pour faciliter l'intégration des nouveaux membres de l'équipe",
        "Gestion du projet en méthodologie Agile (SAFe Scrum) avec Azure DevOps",
      ],
    },
    {
      title: "Livreur de solutions TI (Stage)",
      company: "iA Groupe Financier (Secteur de la rémunération)",
      period: "Avril 2022 – Septembre 2022",
      description: [
        "Participation à la refonte complète d'un système de gestion de rémunération, avec migration d'une infrastructure on-premise vers le cloud Azure",
        "Développement d'une API en .NET pour l'intégration des données de rémunération, avec utilisation de Kafka pour la messagerie et déploiement sur Azure",
        "Participation aux rencontres d'architecture organique des solutions",
        "Automatisation des processus d'intégration et de mise à jour des données clients en SQL, via Regex et APIs externes (ex. : Postes Canada)",
        "Contribution aux déploiements en production avec mise en place de pipelines CI/CD sur Azure DevOps",
        "Gestion et résolution d'incidents de production via ServiceNow",
        "Suivi et gestion de projet en méthodologie Agile (SAFe Scrum) avec Azure DevOps",
      ],
    },
  ]

  const education = [
    {
      degree: "Baccalauréat en génie logiciel",
      institution: "Université Laval",
      period: "Décembre 2024",
      location: "Québec, Canada",
    },
    {
      degree: "Diplôme d'études collégiales en Sciences de la nature",
      institution: "Cégep Limoilou",
      period: "Décembre 2020",
      location: "Québec, Canada",
    },
  ]

  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      date: "Février 2025",
      link: "https://learn.microsoft.com/fr-ca/users/yacinekahlis-6529/credentials/8241eb7065e23c18",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      date: "Avril 2025 (prévue)",
      link: "#",
    },
  ]

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex justify-center">
        <a href="/YacineKahlis_CV.pdf" download>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Télécharger mon CV
          </Button>
        </a>
      </div>

      <Tabs defaultValue="experience" className="w-full">
        <div className="mb-8 flex justify-center">
          <TabsList>
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Éducation</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="experience">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                        <p className="text-slate-600">{exp.company}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{exp.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-slate-600">{edu.institution}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{edu.period}</span>
                    </div>
                    <p className="mt-2 text-slate-700">{edu.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications">
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-900">{cert.name}</h3>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{cert.date}</span>
                    </div>
                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        className="mt-2 inline-block text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le certificat
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

