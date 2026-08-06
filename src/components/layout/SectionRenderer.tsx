import React from 'react';
import { SectionConfig, SectionId, SectionComponentProps } from '../../types';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import AboutUs from '../sections/AboutUs';
import WhyChooseUs from '../sections/WhyChooseUs';
import TargetSectors from '../sections/TargetSectors';
import Portfolio from '../sections/Portfolio';
import Clients from '../sections/Clients';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import QuotationForm from '../sections/QuotationForm';

export const sectionRegistry: Record<SectionId, React.ComponentType<SectionComponentProps>> = {
  hero: Hero as unknown as React.ComponentType<SectionComponentProps>,
  services: Services as unknown as React.ComponentType<SectionComponentProps>,
  about: AboutUs as unknown as React.ComponentType<SectionComponentProps>,
  whyChooseUs: WhyChooseUs as unknown as React.ComponentType<SectionComponentProps>,
  industries: TargetSectors as unknown as React.ComponentType<SectionComponentProps>,
  portfolio: Portfolio as unknown as React.ComponentType<SectionComponentProps>,
  clients: Clients as unknown as React.ComponentType<SectionComponentProps>,
  testimonials: Testimonials as unknown as React.ComponentType<SectionComponentProps>,
  faq: FAQ as unknown as React.ComponentType<SectionComponentProps>,
  quote: QuotationForm as unknown as React.ComponentType<SectionComponentProps>,
  
  // Stubs for remaining
  distance: () => null,
  whisper: () => null,
  method: () => null,
  featuredServices: () => null,
  projects: () => null,
  workProcess: () => null,
  contact: () => null,
};

interface SectionRendererProps {
  layout: SectionConfig[];
}

export function SectionRenderer({ layout }: SectionRendererProps) {
  return (
    <>
      {layout.map((config) => {
        if (!config.enabled) return null;
        
        const Component = sectionRegistry[config.id];
        
        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Section renderer: Component not found for section id "${config.id}"`);
          }
          return null;
        }

        return (
          <div key={config.id} data-section={config.id}>
            <Component id={config.id} theme={config.theme} />
          </div>
        );
      })}
    </>
  );
}
