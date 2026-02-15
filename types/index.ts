export type Language = 'en' | 'fr';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  tags: string[];
  type: 'mobile' | 'web';
  images: string[];
  imageSeeds?: number[];
  url?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  details: string[];
}

export interface Content {
  nav: {
    projects: string;
    experience: string;
    contact: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  projects: {
    heading: string;
    subheading: string;
    viewApp: string;
    close: string;
    items: Project[];
  };
  experience: {
    heading: string;
    items: Experience[];
  };
  skills: {
    heading: string;
    items: string[];
  };
  certifications: {
    heading: string;
    items: string[];
  };
  footer: {
    tagline: string;
    contact: string;
    phone: string;
  };
  modal: {
    overview: string;
    features: string;
    stack: string;
    challenges: string;
  };
  common: {
    comingSoon: string;
    mobileProject: string;
    webProject: string;
  };
}
