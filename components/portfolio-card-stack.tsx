"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, ExternalLink, ArrowRight } from "lucide-react"
import ColorThief from "colorthief"
import { Badge } from "@/components/ui/badge"

interface ProjectData {
  id: number
  title: string
  subtitle: string
  description: {
    inspiration: string
    whatItDoes: string
    howItWorks: string
    challenges: string
    achievements: string
    lessons: string
  }
  imageUrl: string
  projectUrl: string
  technologies: string[]
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
}

// Projets basés sur votre CV avec descriptions structurées
const initialProjects: ProjectData[] = [
  {
    id: 1,
    title: "KarView",
    subtitle: "C#, .NET, React, Next.js, Stripe, Azure",
    description: {
      inspiration: "L'idée de KarView est née de l'observation de startups telles que Redesign AI d'IKEA qui exploitent des modèles LLM pour offrir des expériences immersives de personnalisation. Ce concept m'a inspiré à créer une plateforme permettant aux utilisateurs de visualiser des personnalisations de voitures avant l'achat, tout en intégrant une monétisation à travers un système de crédits.",
      whatItDoes: "KarView est une application permettant aux utilisateurs de visualiser des personnalisations avancées de voitures en temps réel. L'application offre un modèle de génération d'images basé sur l'intelligence artificielle qui permet de visualiser des modifications esthétiques sur plusieurs modèles de véhicules. Les utilisateurs peuvent acheter des crédits via Stripe pour générer des visualisations, offrant ainsi une approche scalable et pratique pour monétiser l'application.",
      howItWorks: "Le frontend, développé avec React et Next.js, communique avec une API REST construite en .NET. L'application utilise Microsoft Entra ID (Azure AD B2C) pour gérer l'authentification sécurisée des utilisateurs. Les requêtes de personnalisation sont traitées par un modèle LLM qui génère des images réalistes en fonction des spécifications des utilisateurs. Le système de génération fonctionne sur un modèle de crédits : chaque génération consomme un crédit, qui peut être acheté via une intégration Stripe sécurisée. Les données sont stockées avec Entity Framework Core et MySQL, tandis que les assets multimédias sont gérés via Azure Blob Storage.",
      challenges: "L'intégration d'un modèle LLM performant tout en maintenant des temps de réponse rapides a été un défi majeur. De plus, la configuration d'un Azure Tenant avec Microsoft Entra ID (Azure AD B2C) s'est avérée complexe, notamment pour assurer une intégration fluide avec l'API backend tout en maintenant une sécurité optimale. Gérer efficacement les appels API pour maintenir une expérience utilisateur fluide était également une priorité.",
      achievements: "Déploiement public de KarView sur Vercel (frontend) et Azure App Service (backend), offrant une accessibilité globale. L'architecture du code, basée sur des principes solides de Clean Architecture et de découplage des services, a permis une grande résilience aux changements futurs. L'intégration complète de Stripe pour la gestion des paiements démontre également la robustesse de l'écosystème.",
      lessons: "Ce projet m'a permis d'intégrer plusieurs systèmes apprises lors de mes certifications Azure et Stripe. L'utilisation combinée de Microsoft Entra ID (Azure AD B2C), Azure Blob Storage, Azure App Service, et Stripe m'a permis de développer une application robuste, sécurisée et prête à être déployée en production."
    },
    imageUrl: "/karview.png",
    projectUrl: "#",
    technologies: ["React", "Next.js", "C#", ".NET", "Azure", "Tailwind", "Stripe", "Entity Framework", "Azure Blob Storage", "AutoMapper", "Azure AD B2C"],
    colors: {
      primary: "#0f2b46",
      secondary: "#1e4976",
      text: "#ffffff",
      shadow: "rgba(15, 43, 70, 0.6)",
    },
  },
  {
    id: 2,
    title: "On the Spot",
    subtitle: "React, Next.js, Tailwind, Azure Static Web Apps",
    description: {
      inspiration: "On the Spot est né de l'idée de moderniser les photobooths traditionnels en créant une application 100% frontend accessible sur tous les appareils. Inspiré par le besoin d'une solution simple et élégante pour capturer des moments mémorables lors d'événements, l'application propose une expérience immersive sans nécessiter de backend complexe.",
      whatItDoes: "On the Spot est une application de photobooth virtuel qui permet aux utilisateurs de prendre des photos en temps réel via leur webcam, d'appliquer divers filtres visuels, et de générer une bande de photos téléchargeable. L'objectif principal est d'offrir une expérience fluide et personnalisée, entièrement déployée en tant qu'application statique sur Azure Static Web Apps.",
      howItWorks: "On the Spot utilise l'API WebRTC pour accéder à la caméra de l'utilisateur, combinée avec des algorithmes de traitement d'image en temps réel implémentés en React. Les filtres sont appliqués directement sur le flux vidéo pour offrir un rendu instantané. L'application génère un objet téléchargeable au format JPEG ou PNG, permettant aux utilisateurs de conserver facilement leurs créations.",
      challenges: "L'un des principaux défis a été de gérer les différences de compatibilité entre les navigateurs, notamment au niveau de l'accès à la caméra et du rendu des filtres en temps réel. De plus, l'optimisation des performances sur appareils mobiles a nécessité une attention particulière pour garantir une expérience utilisateur cohérente sur toutes les plateformes.",
      achievements: "On the Spot représente ma première application déployée sur Azure Static Web Apps. J'ai créé une interface utilisateur intuitive et responsive avec Tailwind CSS, offrant une expérience utilisateur fluide même sur les appareils mobiles. La capacité à générer des images téléchargeables depuis un environnement purement frontend est également une réussite notable.",
      lessons: "Grâce à ce projet, j'ai approfondi mes connaissances en manipulation d'images, en intégration de WebRTC avec React, et en déploiement d'applications frontend statiques sur Azure. J'ai également appris à optimiser le rendu graphique en temps réel pour des performances améliorées sur divers appareils.",
    },
    imageUrl: "/spotup.png",
    projectUrl: "#",
    technologies: ["React", "Next.js", "Tailwind CSS", "Azure Static Web Apps"],
    colors: {
      primary: "#0f2b46",
      secondary: "#1e4976",
      text: "#ffffff",
      shadow: "rgba(15, 43, 70, 0.6)",
    },
  },
  {
    id: 3,
    title: "Omniscan",
    subtitle: "Flutter, WebSocket, HLS",
    description: {
      inspiration: "Omniscan est un projet réalisé pour Evident Scientific, visant à améliorer la communication entre un appareil mobile et leur robot scanner propriétaire. Initialement, la connexion via Bluetooth se limitait à l'envoi de signaux d'alarme, incapable de transmettre des données volumineuses nécessaires pour les nouvelles fonctionnalités demandées.",
      whatItDoes: "Omniscan est une application mobile développée avec Flutter qui se connecte au robot scanner Omniscan d'Evident Scientific pour fournir un retour d'information en temps réel. Elle permet notamment de streamer l'écran du robot via HLS, transférer des images, annoter ces images, et synchroniser les données entre l'appareil mobile et le robot.",
      howItWorks: "L'application a été migrée d'une connexion Bluetooth vers une communication WebSocket pour supporter des transferts de données plus volumineux tels que le streaming vidéo en temps réel (HLS) et l'envoi d'images annotées. L'architecture repose sur Flutter pour le frontend, avec des échanges bidirectionnels via WebSocket permettant une faible latence et une meilleure fiabilité par rapport au Bluetooth. Des algorithmes de compression d'image ont également été implémentés pour optimiser la vitesse de transfert.",
      challenges: "L'intégration initiale via Bluetooth était insuffisante pour supporter les nouvelles fonctionnalités demandées, notamment le streaming vidéo en temps réel et le transfert d'images volumineuses. La migration vers WebSocket a nécessité une refonte complète de l'infrastructure de communication. De plus, assurer une faible latence tout en maintenant une connexion stable représentait un défi technique majeur.",
      achievements: "Développement d'une application mobile robuste capable de gérer des transferts de données volumineux en temps réel via WebSocket. Implémentation réussie d'un système de streaming vidéo HLS performant, permettant une mise en miroir fluide de l'écran du robot scanner sur l'appareil mobile. L'application supporte également l'envoi d'images annotées, assurant une synchronisation efficace entre les appareils.",
      lessons: "Cette expérience m'a permis d'acquérir une expertise en développement d'applications temps réel avec WebSocket, Flutter et HLS. J'ai également appris à optimiser les transferts de données volumineux et à garantir une communication fiable et performante, même dans des conditions de réseau instables.",
    },
    imageUrl: "/omniscan.png",
    projectUrl: "#",
    technologies: ["Flutter", "WebSocket", "HLS", "Compression d'image", "Annotation d'image"],
    colors: {
      primary: "#2d4a22",
      secondary: "#4a7a38",
      text: "#ffffff",
      shadow: "rgba(45, 74, 34, 0.6)",
    },
  },
  {
    id: 4,
    title: "Ugram",
    subtitle: "React, Next.js, Tailwind, TypeScript, Vercel, AWS S3",
    description: {
      inspiration: "Ugram est un projet académique conçu pour offrir une plateforme sociale dédiée aux étudiants de l'Université Laval. Inspiré par des réseaux sociaux populaires comme Instagram, l'objectif était de fournir un environnement sûr où les étudiants peuvent partager des photos, se connecter et échanger autour de leurs centres d'intérêt communs.",
      whatItDoes: "Ugram est un clone d'Instagram permettant aux utilisateurs de publier des photos, de les organiser par catégories, de les filtrer selon différents critères, et d'appliquer des effets visuels. L'application permet également de suivre d'autres utilisateurs, de commenter des publications, et d'aimer des contenus spécifiques. Elle intègre un système d'authentification sécurisé basé sur OAuth pour protéger l'accès aux comptes utilisateurs.",
      howItWorks: "Le frontend est développé en React avec TypeScript pour bénéficier d'une meilleure sécurité de typage et d'une meilleure maintenabilité du code. Le backend utilise Next.js pour sa facilité d'intégration avec React et son support des API routes. Les images téléchargées sont stockées sur AWS S3 pour garantir une haute disponibilité et une récupération rapide. Le déploiement est effectué sur Vercel, offrant une scalabilité automatique et un déploiement continu facile.",
      challenges: "L'un des principaux défis a été de mettre en place un système d'authentification sécurisé avec OAuth tout en respectant les bonnes pratiques de gestion des tokens d'accès. De plus, optimiser les performances de chargement des images, notamment en réduisant leur taille sans altérer la qualité, a nécessité l'utilisation de techniques avancées de compression et de mise en cache.",
      achievements: "Développement d'une interface utilisateur moderne et responsive utilisant Tailwind CSS, avec des fonctionnalités de filtrage, d'édition et de suppression d'images. Mise en place d'un pipeline CI/CD avec des tests automatisés pour garantir la stabilité de l'application lors de chaque déploiement. L'application est déployée sur Vercel, offrant une accessibilité rapide et une expérience utilisateur fluide.",
      lessons: "Grâce à ce projet, j'ai approfondi mes connaissances en TypeScript, en intégration d'API REST avec Next.js, et en gestion de fichiers avec AWS S3. J'ai également acquis de l'expérience dans la configuration de pipelines CI/CD et l'intégration sécurisée de systèmes d'authentification modernes.",
    },
    imageUrl: "/ugram.png",
    projectUrl: "#",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "AWS S3", "OAuth", "CI/CD"],
    colors: {
      primary: "#5a3a31",
      secondary: "#8c5b4a",
      text: "#ffffff",
      shadow: "rgba(90, 58, 49, 0.6)",
    },
  },
  {
    id: 5,
    title: "Robot Assembleur de Drapeaux",
    subtitle: "Python, C/C++, OpenCV, Vue.js",
    description: {
      inspiration: "Le projet a été conçu pour développer un robot capable d'assembler des drapeaux en utilisant des cubes colorés. Ce défi technologique a permis d'explorer des concepts avancés de vision par ordinateur, de manipulation d'objets, et de communication en temps réel entre plusieurs systèmes.",
      whatItDoes: "Le robot assembleur est capable de reconnaître, manipuler, et assembler des cubes colorés pour former des motifs prédéfinis représentant des drapeaux. Il utilise des algorithmes de vision par ordinateur pour détecter et analyser les cubes, et des moteurs contrôlés par un microcontrôleur en C/C++ pour les déplacer avec précision. L'application Vue.js permet de surveiller et de contrôler le processus en temps réel via une interface utilisateur moderne.",
      howItWorks: "Le système repose sur une combinaison de Python pour le traitement de l'image avec OpenCV, C/C++ pour le contrôle des moteurs, et Vue.js pour l'interface utilisateur. Les images capturées par une caméra sont analysées par un modèle de détection d'objets implémenté en Python. Les commandes de déplacement sont ensuite envoyées au robot via une communication WebSocket, permettant une orchestration en temps réel des tâches de construction. Les utilisateurs peuvent surveiller l'état de l'assemblage en temps réel via un tableau de bord interactif.",
      challenges: "L'un des principaux défis a été d'assurer une reconnaissance fiable des cubes sous différentes conditions de luminosité et d'angles de vue. De plus, la coordination entre les différents systèmes (vision, manipulation des cubes, interface utilisateur) nécessitait une architecture robuste et bien pensée. Optimiser la communication en temps réel via WebSocket était également essentiel pour garantir une expérience fluide.",
      achievements: "Développement d'un système capable de détecter, manipuler, et assembler des objets en temps réel avec un taux de réussite élevé. Mise en place d'une communication fiable entre le robot et l'interface utilisateur via WebSocket, permettant un retour visuel immédiat. Implémentation d'une interface Vue.js intuitive qui permet de contrôler et d'observer le robot de manière conviviale.",
      lessons: "Ce projet m'a permis de renforcer mes compétences en vision par ordinateur avec OpenCV, en communication temps réel avec WebSocket, et en intégration de systèmes embarqués utilisant C/C++. J'ai également appris à concevoir une architecture modulaire qui facilite l'intégration de nouveaux composants.",
    },
    imageUrl: "/robot.png",
    projectUrl: "#",
    technologies: ["Python", "C/C++", "OpenCV", "Vue.js", "WebSocket", "Microcontrôleurs"],
    colors: {
      primary: "#1a3a5f",
      secondary: "#2d5f8a",
      text: "#ffffff",
      shadow: "rgba(26, 58, 95, 0.6)",
    },
  },
]

export default function CardStack() {
  const [projects, setProjects] = useState<ProjectData[]>(initialProjects)
  const [loading, setLoading] = useState(true)
  const [extractedColors, setExtractedColors] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("inspiration")

  // Extraction des couleurs à partir des images
  useEffect(() => {
    const extractColors = async () => {
      if (extractedColors) return

      const updatedProjects = [...projects]
      const colorThief = new ColorThief()

      for (let i = 0; i < updatedProjects.length; i++) {
        const project = updatedProjects[i]
        try {
          const img = new Image()
          img.crossOrigin = "Anonymous"
          img.src = project.imageUrl

          await new Promise((resolve) => {
            img.onload = () => {
              try {
                const palette = colorThief.getPalette(img, 3)

                // Conversion RGB en hex et création du schéma de couleurs
                const primaryColor = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`
                const secondaryColor = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`
                const shadowColor = `rgba(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}, 0.6)`

                // Déterminer si le texte doit être blanc ou noir en fonction de la luminosité
                const brightness = (palette[0][0] * 299 + palette[0][1] * 587 + palette[0][2] * 114) / 1000
                const textColor = brightness < 128 ? "#ffffff" : "#000000"

                updatedProjects[i].colors = {
                  primary: primaryColor,
                  secondary: secondaryColor,
                  text: textColor,
                  shadow: shadowColor,
                }
              } catch (error) {
                console.error("Erreur lors de l'extraction des couleurs:", error)
              }
              resolve(null)
            }
          })
        } catch (error) {
          console.error("Erreur lors du chargement de l'image:", error)
        }
      }

      setProjects(updatedProjects)
      setExtractedColors(true)
      setLoading(false)
    }

    extractColors()
  }, [projects, extractedColors])

  const viewNextProject = (id: number) => {
    setProjects((prevProjects) => {
      const newProjects = prevProjects.filter((project) => project.id !== id)
      return [...newProjects, prevProjects[0]]
    })
    setActiveTab("inspiration") // Réinitialiser à la première section pour chaque nouveau projet
  }

  if (loading) {
    return <div className="flex h-96 w-full items-center justify-center">Chargement des projets...</div>
  }

  return (
      <div>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-600 italic">
            Note: Les codes sources de ces projets sont hébergés dans des dépôts privés. N'hésitez pas à me contacter pour
            obtenir un accès à certains repositories.
          </p>
        </div>
        <div className="relative h-[650px] w-full">
          <AnimatePresence mode="popLayout">
            {projects.slice(0, 3).map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    viewNextProject={viewNextProject}
                    totalProjects={Math.min(projects.length, 3)}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ))}
          </AnimatePresence>
        </div>
      </div>
  )
}

interface ProjectCardProps {
  project: ProjectData
  index: number
  viewNextProject: (id: number) => void
  totalProjects: number
  activeTab: string
  setActiveTab: (tab: string) => void
}

function ProjectCard({ project, index, viewNextProject, totalProjects, activeTab, setActiveTab }: ProjectCardProps) {
  const zIndex = totalProjects - index
  const yOffset = index * 30 // Décalage vertical
  const xOffset = index * 5 // Décalage horizontal

  const tabs = [
    { id: "inspiration", label: "Inspiration" },
    { id: "whatItDoes", label: "Ce que ça fait" },
    { id: "howItWorks", label: "Comment c'est fait" },
    { id: "challenges", label: "Défis" },
    { id: "achievements", label: "Réalisations" },
    { id: "lessons", label: "Apprentissages" },
    { id: "technologies", label: "Technologies" },
  ]

  return (
      <motion.div
          layout
          initial={{ opacity: 0, y: 100, x: xOffset }}
          animate={{
            opacity: 1,
            y: yOffset,
            x: xOffset,
            scale: 1 - index * 0.04,
            rotateZ: index * -2, // Légère rotation pour chaque carte
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
            mass: 1,
          }}
          style={{
            zIndex,
            boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px ${project.colors.shadow}`,
            backgroundColor: project.colors.primary,
          }}
          className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
          drag={index === 0} // Permettre le glissement pour la carte du dessus
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_, info) => {
            if (index === 0) {
              const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
              if (distance > 150) {
                viewNextProject(project.id)
              }
            }
          }}
          whileDrag={{
            scale: 1.05,
            boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px ${project.colors.shadow}`,
          }}
      >
        <motion.div
            className="relative flex h-full flex-col overflow-hidden rounded-2xl"
            style={{ color: project.colors.text }}
        >
          {/* En-tête de la carte */}
          <div className="flex items-center justify-between p-4">
            <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${project.colors.text}20` }}>
              <Code className="h-5 w-5" />
            </div>
            {project.projectUrl && project.projectUrl !== "#" && (
                <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full px-3 py-1.5 transition-transform hover:scale-105"
                    style={{
                      backgroundColor: `${project.colors.text}20`,
                      border: `1px solid ${project.colors.text}40`,
                    }}
                >
                  <span className="text-sm font-medium">Voir le projet</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
            )}
          </div>

          {/* Titre du projet */}
          <div className="px-4 pb-2">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <h3 className="text-xl font-medium" style={{ color: `${project.colors.text}99` }}>
              {project.subtitle}
            </h3>
          </div>

          {/* Image du projet - plus large */}
          <div className="overflow-hidden">
            <div
                className="overflow-hidden bg-cover bg-center "
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  boxShadow: `0 10px 30px ${project.colors.shadow}`,
                  height: "300px",
                }}
            />
          </div>

          {/* Tabs de navigation */}
          <div className="mt-3 px-4 overflow-x-auto">
            <div className="flex space-x-1 border-b" style={{ borderColor: `${project.colors.text}30` }}>
              {tabs.map((tab) => (
                  <button
                      key={tab.id}
                      onClick={() => index === 0 && setActiveTab(tab.id)}
                      className={`px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                          activeTab === tab.id ? "font-bold border-b-2" : "opacity-70 hover:opacity-100"
                      }`}
                      style={{
                        borderColor: activeTab === tab.id ? project.colors.text : "transparent",
                      }}
                  >
                    {tab.label}
                  </button>
              ))}
            </div>
          </div>

          {/* Contenu des tabs */}
          <div className="mt-3 px-4 flex-grow overflow-y-auto">
            {activeTab === "technologies" ? (
                <div className="py-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <Badge
                            key={i}
                            variant="outline"
                            className="border-opacity-30 bg-opacity-20 px-2.5 py-1"
                            style={{
                              borderColor: `${project.colors.text}50`,
                              backgroundColor: `${project.colors.text}20`,
                              color: project.colors.text,
                            }}
                        >
                          {tech}
                        </Badge>
                    ))}
                  </div>
                </div>
            ) : (
                <div className="py-2">
                  <p className="text-sm">{project.description[activeTab as keyof typeof project.description]}</p>
                </div>
            )}
          </div>

          {/* Indicateur de glissement pour la carte du dessus */}
          {index === 0 && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <motion.div
                    className="flex items-center gap-2 rounded-full px-4 py-2"
                    style={{
                      backgroundColor: `${project.colors.text}20`,
                      border: `1px solid ${project.colors.text}40`,
                    }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  <ArrowRight className="h-4 w-4" />
                  <p className="text-sm font-medium">Glissez pour voir le suivant</p>
                </motion.div>
              </div>
          )}
        </motion.div>
      </motion.div>
  )
}

