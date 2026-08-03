export type SectionId =
  | "hero"
  | "distance"
  | "whisper"
  | "method"
  | "featuredServices"
  | "whyChooseUs"
  | "industries"
  | "projects"
  | "workProcess"
  | "clients"
  | "testimonials"
  | "faq"
  | "quote"
  | "contact"
  | "about"
  | "portfolio"
  | "services";

export type ThemeMode = "light" | "dark" | "corporate";

export type AnimationPreset =
  | "none"
  | "heroReveal"
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "imageReveal"
  | "staggerCards"
  | "sectionReveal";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  variant?: string;
  theme: ThemeMode;
  animation: AnimationPreset;
}

export interface SectionComponentProps {
  id: SectionId;
  theme: ThemeMode;
  className?: string;
}

export interface MediaAsset {
  id: string;
  src: string;
  publicId?: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
  priority?: boolean;
  category: "brand" | "hero" | "service" | "project" | "client" | "seo";
  blurDataURL?: string;
  mobileSrc?: string;
  desktopSrc?: string;
}

export interface Company {
  name: string;
  established: number;
  description: string;
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
  city: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceCategory {
  title: string;
  arTitle: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  en: string;
  icon: string;
}

export interface VideoAsset {
  id: string;
  src: string;
  poster?: string;
}

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  client?: string;
  coverImage: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
}
