import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { contactConfig } from './config/contact';
import { homepageLayout } from './config/layout';
import { SectionRenderer } from './components/layout/SectionRenderer';
import Header from './components/layout/Header';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Footer from './components/sections/Footer';
import PolicyPage from './pages/PolicyPage';
import CinematicBackground from './components/layout/CinematicBackground';
import FloatingContact from './components/ui/FloatingContact';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash.startsWith('#/policies/')) {
      const policyId = currentHash.replace('#/policies/', '');
      return <PolicyPage policyId={policyId} />;
    }
    return <SectionRenderer layout={homepageLayout} />;
  };

  return (
    <div className="text-text-primary min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      <Helmet>
        <title>{contactConfig.tradeNameAr} | شريكك الإستراتيجي</title>
        <meta name="description" content={contactConfig.description} />
        <link rel="canonical" href="https://almthali.com" />
      </Helmet>
      
      <CinematicBackground />
      <AnnouncementBar />
      <div className="sticky top-0 z-50 w-full">
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
