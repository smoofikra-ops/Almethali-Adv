import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { contactConfig } from './config/contact';
import { homepageLayout } from './config/layout';
import { SectionRenderer } from './components/layout/SectionRenderer';
import Header from './components/layout/Header';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Footer from './components/sections/Footer';
import PolicyPage from './pages/PolicyPage';
import CatalogPage from './pages/CatalogPage';
import CinematicBackground from './components/layout/CinematicBackground';
import FloatingContact from './components/ui/FloatingContact';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      // Scroll to top when navigating to standalone pages
      if (
        hash === '#/catalog' || 
        hash === '#/en/catalog' || 
        hash.startsWith('#/policies/')
      ) {
        window.scrollTo(0, 0);
      } else if (hash && hash.startsWith('#') && !hash.startsWith('#/')) {
        const targetId = hash.replace('#', '');
        if (targetId) {
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 80);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll check for standalone pages on direct load
    if (
      window.location.hash === '#/catalog' || 
      window.location.hash === '#/en/catalog' || 
      window.location.hash.startsWith('#/policies/')
    ) {
      window.scrollTo(0, 0);
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === '#/catalog' || currentHash === '#/en/catalog') {
      return <CatalogPage />;
    }
    if (currentHash.startsWith('#/policies/')) {
      const policyId = currentHash.replace('#/policies/', '');
      return <PolicyPage policyId={policyId} />;
    }
    return <SectionRenderer layout={homepageLayout} />;
  };

  return (
    <div className="text-text-primary min-h-screen font-sans transition-colors duration-300 flex flex-col">
      <Helmet>
        <title>المثالي للدعاية والإعلان | لوحات، طباعة، معارض وفعاليات</title>
        <meta name="description" content="المثالي للدعاية والإعلان يقدم حلول اللوحات الإعلانية، الطباعة الرقمية، تجهيز المعارض والأكشاك، الفعاليات والمؤتمرات، الاستاندات والهدايا الدعائية باحترافية وجودة عالية." />
        <link rel="canonical" href="https://almethaliadv.com/" />
      </Helmet>
      
      <CinematicBackground />
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <AnnouncementBar />
        <Header />
      </div>
      <main className="relative z-10">
        {renderContent()}
      </main>
      
      <FloatingContact />
      <Footer />
    </div>
  );
}
