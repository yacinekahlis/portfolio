export type Language = 'en' | 'fr';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string; // New field for modal
  features?: string[];      // New field for modal
  challenges?: string[];    // New field for modal
  tags: string[];
  type: 'mobile' | 'web';
  imageSeeds: number[];
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
    close: string; // New translation
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
  }
}