import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  fr: {
    nav: {
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
      about: "À propos"
    },
    hero: {
      title: "Concevoir des logiciels intelligents, plus rapidement.",
      subtitle: "Ingénieur logiciel Fullstack. Expert en architecture Backend (Java, C#, .NET) et développement Frontend moderne (React, Next.js).",
      cta: "Voir mes projets",
      secondaryCta: "Me contacter"
    },
    projects: {
      heading: "Créer, collaborer et déployer",
      subheading: "Une sélection de projets personnels alliant IA, design et performance.",
      viewApp: "Voir l'application",
      close: "Fermer",
      items: [
        {
          id: "budget-ai",
          title: "Budget Mobile IA",
          subtitle: "Finance Personnelle",
          description: "Application mobile de gestion budgétaire assistée par IA. Analyse automatique des dépenses et génération de conseils financiers contextualisés.",
          longDescription: "Une solution complète pour la gestion financière personnelle utilisant l'IA pour catégoriser les transactions bancaires et proposer des budgets adaptatifs. L'architecture repose sur une synchronisation temps-réel et des modèles locaux pour la confidentialité.",
          features: ["Catégorisation automatique des dépenses", "Chatbot financier intégré", "Mode hors-ligne first", "Synchronisation bancaire sécurisée"],
          challenges: ["Optimisation des modèles IA sur mobile", "Gestion de la synchronisation complexe", "Sécurité des données bancaires"],
          tags: ["Expo", "React Native", "IA"],
          type: "mobile",
          imageSeeds: [101, 105, 106]
        },
        {
          id: "picopi",
          title: "Picopi.io",
          subtitle: "SaaS Analytics UX",
          description: "Produit SaaS d'analyse UX/UI assistée par IA. Analyse d'interfaces pour identifier les problèmes de clarté et générer des rapports structurés.",
          longDescription: "Picopi aide les designers et développeurs à obtenir des feedbacks instantanés sur leurs interfaces. En utilisant la vision par ordinateur et les LLMs, l'outil simule des tests utilisateurs et prédit les zones de friction.",
          features: ["Analyse de heatmaps prédictives", "Audit d'accessibilité automatisé", "Export de rapports PDF", "Intégration Figma"],
          challenges: ["Traitement d'images haute résolution", "Réduction de la latence d'analyse", "Architecture multi-tenant scalable"],
          tags: ["Next.js", "Tailwind", "Stripe", "SaaS"],
          type: "web",
          imageSeeds: [202, 203, 204]
        },
        {
          id: "uxtools",
          title: "UXFreeTool",
          subtitle: "Outils SEO & Marketing",
          description: "Ensemble d'outils UX gratuits sans backend, optimisés pour le SEO. Stratégie engineering-as-marketing pour capturer du trafic qualifié.",
          longDescription: "Une suite d'outils légers fonctionnant entièrement dans le navigateur. L'objectif était de créer une architecture ultra-performante (Core Web Vitals parfaits) pour dominer les résultats de recherche sur des mots-clés spécifiques.",
          features: ["Générateur de Persona", "Calculateur de ROI UX", "Checklists d'audit", "Pas de stockage serveur"],
          challenges: ["Optimisation extrême du bundle JS", "Stratégie de contenu programmatique", "Persistance locale des données"],
          tags: ["Next.js", "SEO", "Static Site"],
          type: "web",
          imageSeeds: [303, 304, 305]
        },
        {
          id: "avenue",
          title: "AvenueOfLooks.com",
          subtitle: "Génération de Mode IA",
          description: "Plateforme web de génération de tenues vestimentaires assistée par IA avec système de crédits et paiement.",
          longDescription: "Marketplace de génération d'images de mode permettant aux utilisateurs de visualiser des vêtements sur différents mannequins virtuels. Intègre un système de crédits complexe et une queue de génération asynchrone.",
          features: ["Génération d'images stable diffusion", "Système de crédits et top-up", "Galerie privée", "Authentification sociale"],
          challenges: ["Gestion de la file d'attente GPU", "Intégration Stripe Webhooks", "Stockage efficace des assets générés"],
          tags: ["React", "IA", "Stripe"],
          type: "web",
          imageSeeds: [404, 405, 406]
        }
      ]
    },
    experience: {
      heading: "Expérience",
      items: [
        {
          role: "Analyste-programmeur",
          company: "Université Laval",
          period: "2025 – Présent",
          location: "Québec",
          details: [
            "Analyse et proposition de solutions fonctionnelles pour le DREM.",
            "Intégration automatisée dans plus de 200 dossiers étudiants.",
            "Formation de l'équipe VDEMP et refonte de l'instance Jira."
          ]
        },
        {
          role: "Développeur logiciel",
          company: "iA Groupe Financier",
          period: "2022 – 2023",
          location: "Québec",
          details: [
            "Développement et maintenance d'APIs REST en .NET.",
            "Migration automatisée de données MySQL vers MongoDB.",
            "Création de pipelines CI/CD sur Azure DevOps."
          ]
        }
      ]
    },
    skills: {
      heading: "Technologies",
      items: [
        "React & Next.js", "TypeScript", "C# & .NET", "Java", "Python", 
        "SQL (Postgres)", "Docker", "Azure", "Tailwind CSS", "Git"
      ]
    },
    certifications: {
      heading: "Éducation & Certifs",
      items: [
        "Baccalauréat en Génie Logiciel (Université Laval)",
        "Azure Fundamentals (AZ-900)"
      ]
    },
    footer: {
      tagline: "",
      contact: "yacinekahlis@outlook.com",
      phone: "+1 581 000-0000"
    }
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      about: "About"
    },
    hero: {
      title: "Build better software, faster.",
      subtitle: "Fullstack Software Engineer. Expert in Backend architecture (Java, C#, .NET) and modern Frontend development (React, Next.js).",
      cta: "View Work",
      secondaryCta: "Contact Me"
    },
    projects: {
      heading: "Create, collaborate, and go live",
      subheading: "A selection of personal projects combining AI, design, and performance.",
      viewApp: "View App",
      close: "Close",
      items: [
        {
          id: "budget-ai",
          title: "AI Budget Mobile",
          subtitle: "Personal Finance",
          description: "AI-assisted budget management mobile application. Automatic expense analysis and generation of contextualized financial advice.",
          longDescription: "A comprehensive solution for personal financial management using AI to categorize bank transactions and propose adaptive budgets. The architecture relies on real-time synchronization and local models for privacy.",
          features: ["Automatic expense categorization", "Integrated financial chatbot", "Offline-first mode", "Secure bank synchronization"],
          challenges: ["Optimizing AI models on mobile", "Handling complex synchronization", "Bank data security"],
          tags: ["Expo", "React Native", "AI"],
          type: "mobile",
          imageSeeds: [101, 105, 106]
        },
        {
          id: "picopi",
          title: "Picopi",
          subtitle: "SaaS UX Analytics",
          description: "AI-assisted UX/UI analysis SaaS product. Interface analysis to identify clarity issues and generate structured reports.",
          longDescription: "Picopi helps designers and developers get instant feedback on their interfaces. Using computer vision and LLMs, the tool simulates user tests and predicts friction zones.",
          features: ["Predictive heatmap analysis", "Automated accessibility audit", "PDF report export", "Figma integration"],
          challenges: ["High-resolution image processing", "Reducing analysis latency", "Scalable multi-tenant architecture"],
          tags: ["Next.js", "Tailwind", "Stripe", "SaaS"],
          type: "web",
          imageSeeds: [202, 203, 204]
        },
        {
          id: "uxtools",
          title: "UXTools",
          subtitle: "SEO & Marketing Tools",
          description: "Set of backend-free UX tools optimized for SEO. Engineering-as-marketing strategy to capture qualified traffic.",
          longDescription: "A suite of lightweight tools running entirely in the browser. The goal was to create ultra-performant architecture (perfect Core Web Vitals) to dominate search results for specific keywords.",
          features: ["Persona Generator", "UX ROI Calculator", "Audit Checklists", "No server storage"],
          challenges: ["Extreme JS bundle optimization", "Programmatic content strategy", "Local data persistence"],
          tags: ["Next.js", "SEO", "Static Site"],
          type: "web",
          imageSeeds: [303, 304, 305]
        },
        {
          id: "avenue",
          title: "AvenueOfLooks",
          subtitle: "AI Fashion Generation",
          description: "Web platform for AI-assisted outfit generation with credit system and payments.",
          longDescription: "Fashion image generation marketplace allowing users to visualize clothes on different virtual models. Integrates a complex credit system and an asynchronous generation queue.",
          features: ["Stable Diffusion image generation", "Credit system and top-up", "Private gallery", "Social authentication"],
          challenges: ["GPU queue management", "Stripe Webhooks integration", "Efficient asset storage"],
          tags: ["React", "AI", "Stripe"],
          type: "web",
          imageSeeds: [404, 405, 406]
        }
      ]
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Programmer Analyst",
          company: "Université Laval",
          period: "2025 – Present",
          location: "Quebec",
          details: [
            "Analysis and proposal of functional solutions for DREM.",
            "Automated integration into over 200 student files.",
            "Training of the VDEMP team and overhaul of the Jira instance."
          ]
        },
        {
          role: "Software Developer",
          company: "iA Financial Group",
          period: "2022 – 2023",
          location: "Quebec",
          details: [
            "Development and maintenance of REST APIs in .NET.",
            "Automated data migration from MySQL to MongoDB.",
            "Creation of CI/CD pipelines on Azure DevOps."
          ]
        }
      ]
    },
    skills: {
      heading: "Technologies",
      items: [
        "React & Next.js", "TypeScript", "C# & .NET", "Java", "Python", 
        "SQL (Postgres)", "Docker", "Azure", "Tailwind CSS", "Git"
      ]
    },
    certifications: {
      heading: "Education & Certs",
      items: [
        "Bachelor in Software Engineering (Université Laval)",
        "Azure Fundamentals (AZ-900)"
      ]
    },
    footer: {
      tagline: "",
      contact: "yacinekahlis@outlook.com",
      phone: "+1 581 000-0000"
    }
  }
};