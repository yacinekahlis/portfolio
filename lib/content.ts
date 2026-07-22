export type Lang = "fr" | "en";

export type ProjectVisual =
  | { kind: "phones"; images: string[] }
  | { kind: "web"; main: string; secondary?: string }
  | { kind: "single"; image: string };

export interface Project {
  id: string;
  title: string;
  ghost: string;
  year: string;
  status?: { fr: string; en: string };
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  tags: string[];
  url?: string;
  urlLabel?: { fr: string; en: string };
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    id: "sidechain",
    title: "Sidechain",
    ghost: "SIDECHAIN",
    year: "2026",
    status: { fr: "En développement", en: "In development" },
    tagline: {
      fr: "Un DAW natif piloté par un agent IA.",
      en: "A native DAW driven by an AI agent.",
    },
    description: {
      fr: "DAW desktop développé en C++ avec JUCE : timeline multipiste, édition et mixage audio. Un serveur MCP expose chaque action du logiciel comme outil — l'agent IA construit des morceaux en langage naturel, avec le même contrôle que l'utilisateur, sans jamais interrompre la lecture.",
      en: "Desktop DAW built in C++ with JUCE: multitrack timeline, audio editing and mixing. An MCP server exposes every user action as a tool — the AI agent builds tracks through natural language, with the same control as the user, without ever interrupting playback.",
    },
    tags: ["C++", "JUCE", "Claude Code", "MCP"],
    visual: { kind: "single", image: "/projects/sidechain/sidechain-abstract.png" },
  },
  {
    id: "punchclock",
    title: "Punch Clock",
    ghost: "PUNCH",
    year: "2026",
    tagline: {
      fr: "Le timer de boxe qui coache à voix haute.",
      en: "The boxing timer that coaches out loud.",
    },
    description: {
      fr: "Publié sur l'App Store. Un coach vocal annonce des combinaisons réalistes de boxe et de muay thai qui varient à chaque round, et le contrôle vocal on-device — « pause », « go », « skip » — garde les mains dans les gants. La cloche sonne même l'écran verrouillé.",
      en: "Live on the App Store. A voice coach calls out realistic boxing and muay thai combinations that change every round, and on-device voice control — “pause”, “go”, “skip” — keeps your hands in the gloves. The bell rings even with the screen locked.",
    },
    tags: ["Expo", "React Native", "TypeScript", "App Store"],
    url: "https://yacinekahlis.github.io/punchclock/",
    urlLabel: { fr: "Voir le produit", en: "View product" },
    visual: {
      kind: "phones",
      images: [
        "/projects/punchclock/phone-2.png",
        "/projects/punchclock/phone-1.png",
        "/projects/punchclock/phone-3.png",
      ],
    },
  },
  {
    id: "odo",
    title: "Odo",
    ghost: "ODO",
    year: "2026",
    tagline: {
      fr: "Le garage intelligent, dans ta poche.",
      en: "A smart garage, in your pocket.",
    },
    description: {
      fr: "Suivi automobile assisté par IA : valeur marchande en temps réel ajustée au modèle, au kilométrage et à la condition. Un studio IA génère des aperçus photoréalistes de modifications et estime leur impact sur la valeur de revente. Backend .NET en Clean Architecture déployé en production.",
      en: "AI-assisted car tracking: real-time market value adjusted to model, mileage and condition. An AI studio generates photorealistic previews of modifications and estimates their impact on resale value. .NET Clean Architecture backend deployed in production.",
    },
    tags: [".NET", "React Native", "Expo", "PostgreSQL", "Gemini"],
    visual: {
      kind: "phones",
      images: [
        "/projects/odo/c-studio.png",
        "/projects/odo/c-garage.png",
        "/projects/odo/c-value.png",
      ],
    },
  },
  {
    id: "fixel",
    title: "Fixel",
    ghost: "FIXEL",
    year: "2026",
    tagline: {
      fr: "Livré à un vrai client, utilisé chaque jour.",
      en: "Shipped to a real client, used every day.",
    },
    description: {
      fr: "Site complet pour une boutique de réparation et de vente de téléphones reconditionnés à Québec : vitrine avec pages dynamiques par produit, et interface d'administration de type CRM où le client gère lui-même produits, services, inventaire et contenus. Conçu, développé et déployé seul.",
      en: "Full website for a refurbished-phone repair and resale shop in Québec City: a storefront with dynamic per-product pages, and a CRM-style admin panel where the client manages products, services, inventory and content themselves. Designed, built and deployed solo.",
    },
    tags: ["Next.js", "React", "Supabase", "TypeScript"],
    url: "https://www.fixel-store.com/",
    urlLabel: { fr: "Visiter le site", en: "Visit site" },
    visual: { kind: "web", main: "/projects/fixel/site.png" },
  },
  {
    id: "picopi",
    title: "Picopi",
    ghost: "PICOPI",
    year: "2026",
    tagline: {
      fr: "L'audit UX qui ne donne pas d'opinions.",
      en: "The UX audit with no opinions.",
    },
    description: {
      fr: "SaaS d'analyse UX/UI assistée par IA. Un pipeline multi-modèle orchestre Gemini pour l'extraction structurée des interfaces, Claude pour l'identification des problèmes UX, puis Gemini pour générer le redesign final. Rapports actionnables, crédits et monétisation freemium via Stripe.",
      en: "AI-assisted UX/UI analysis SaaS. A multi-model pipeline orchestrates Gemini for structured interface extraction, Claude for UX issue identification, then Gemini to generate the final redesign. Actionable reports, credits and freemium monetization via Stripe.",
    },
    tags: ["Next.js", "Stripe", "Gemini", "Claude"],
    url: "https://picopi.io",
    visual: {
      kind: "web",
      main: "/projects/picopi/landing.png",
      secondary: "/projects/picopi/audit.png",
    },
  },
  {
    id: "aol",
    title: "AvenueOfLooks",
    ghost: "AVENUE",
    year: "2025",
    tagline: {
      fr: "Essayer la tenue avant qu'elle arrive.",
      en: "Try the outfit before it arrives.",
    },
    description: {
      fr: "Plateforme de génération de tenues assistée par IA, utilisée par de vrais utilisateurs. Seedream génère les visuels d'essayage, Gemini suggère des améliorations personnalisées. Full-stack complet : authentification, gestion d'utilisateurs, crédits et paiements Stripe.",
      en: "AI-assisted outfit generation platform, used by real users. Seedream renders the try-on visuals, Gemini suggests personalized improvements. Complete full-stack build: authentication, user management, credits and Stripe payments.",
    },
    tags: ["Next.js", "React", "Stripe", "Seedream", "Gemini"],
    url: "https://avenueoflooks.com",
    visual: {
      kind: "web",
      main: "/projects/aol/landing.png",
      secondary: "/projects/aol/creationhub.png",
    },
  },
];

export const skills = [
  "TypeScript", "C#", ".NET", "React", "Next.js", "React Native", "Expo",
  "PostgreSQL", "SQL Server", "Supabase", "Azure", "Docker", "Stripe",
  "Kafka", "Power BI", "Clean Architecture", "DDD", "Claude API", "OpenAI API",
];

export const ui = {
  fr: {
    nav: { projects: "Projets", experience: "Parcours", contact: "Contact", cv: "CV" },
    hero: {
      role: "Ingénieur logiciel — Québec, Canada",
      title1: "Yacine",
      title2: "Kahlis",
      lede: "Je conçois et livre des produits complets — du backend .NET aux apps mobiles publiées sur l'App Store, en passant par des sites livrés à de vrais clients.",
      cta: "Voir les projets",
      ctaSecondary: "Me contacter",
      facts: [
        ["6", "produits livrés"],
        ["1", "app sur l'App Store"],
        ["2", "vrais clients servis"],
      ],
    },
    projects: {
      label: "Travaux sélectionnés",
      title: "Projets",
      ghost: "PROJETS",
    },
    experience: {
      label: "Parcours",
      title: "Expérience",
      ghost: "PARCOURS",
      jobs: [
        {
          period: "2025 — 2026",
          role: "Analyste-programmeur",
          org: "Université Laval — Faculté de médecine",
          points: [
            "Support et développement pour plus de 50 applications facultaires (.NET, SQL Server)",
            "Conception et mise en production du module PhysioAppreciation",
            "Rapport Power BI de 11 onglets pour l'École des sciences de la réadaptation",
            "Conférence institutionnelle devant plus de 70 participants",
          ],
        },
        {
          period: "2022 — 2023",
          role: "Développeur logiciel",
          org: "iA Groupe Financier",
          points: [
            "APIs REST .NET pour le calcul des commissions des courtiers en assurance",
            "Modernisation d'applications critiques : Entity Framework, SQL Server, Kafka",
            "Pipelines CI/CD Azure DevOps avec tests automatisés",
            "Transition frontend : composants web publics toujours en production",
          ],
        },
      ],
      eduLabel: "Formation",
      edu: [
        {
          period: "2024",
          title: "Baccalauréat en génie logiciel",
          org: "Université Laval",
        },
        {
          period: "2025",
          title: "Microsoft Certified : Azure Fundamentals",
          org: "Certification",
        },
      ],
    },
    contact: {
      label: "Contact",
      titleA: "Travaillons",
      titleB: "ensemble.",
      sub: "Ouvert aux opportunités — disponible maintenant.",
      email: "yacinekahlis@outlook.com",
      cv: "Télécharger le CV",
      rights: "Conçu et développé par Yacine Kahlis",
    },
  },
  en: {
    nav: { projects: "Projects", experience: "Background", contact: "Contact", cv: "Resume" },
    hero: {
      role: "Software Engineer — Québec City, Canada",
      title1: "Yacine",
      title2: "Kahlis",
      lede: "I design and ship complete products — from .NET backends to mobile apps published on the App Store, to websites delivered to real clients.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
      facts: [
        ["6", "products shipped"],
        ["1", "app on the App Store"],
        ["2", "real clients served"],
      ],
    },
    projects: {
      label: "Selected work",
      title: "Projects",
      ghost: "PROJECTS",
    },
    experience: {
      label: "Background",
      title: "Experience",
      ghost: "CAREER",
      jobs: [
        {
          period: "2025 — 2026",
          role: "Programmer Analyst",
          org: "Université Laval — Faculty of Medicine",
          points: [
            "Support and development for 50+ faculty applications (.NET, SQL Server)",
            "Designed and shipped the PhysioAppreciation module to production",
            "Delivered an 11-tab Power BI report for the School of Rehabilitation Sciences",
            "Gave an institutional talk to 70+ university and hospital participants",
          ],
        },
        {
          period: "2022 — 2023",
          role: "Software Developer",
          org: "iA Financial Group",
          points: [
            ".NET REST APIs computing insurance brokers' commissions",
            "Modernized critical applications: Entity Framework, SQL Server, Kafka",
            "Azure DevOps CI/CD pipelines with automated testing",
            "Frontend transition: public web components still in production",
          ],
        },
      ],
      eduLabel: "Education",
      edu: [
        {
          period: "2024",
          title: "B.Eng. in Software Engineering",
          org: "Université Laval",
        },
        {
          period: "2025",
          title: "Microsoft Certified: Azure Fundamentals",
          org: "Certification",
        },
      ],
    },
    contact: {
      label: "Contact",
      titleA: "Let's work",
      titleB: "together.",
      sub: "Open to opportunities — available now.",
      email: "yacinekahlis@outlook.com",
      cv: "Download resume",
      rights: "Designed and built by Yacine Kahlis",
    },
  },
} as const;

export const links = {
  github: "https://github.com/yacinekahlis",
  linkedin: "https://linkedin.com/in/yacine-kahlis",
  email: "mailto:yacinekahlis@outlook.com",
  cv: "/Yacine_Kahlis_CV.pdf",
};
