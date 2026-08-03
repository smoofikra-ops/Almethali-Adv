import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { contactConfig } from './config/contact';
import { homepageLayout } from './config/layout';
import { SectionRenderer } from './components/layout/SectionRenderer';
import Header from './components/layout/Header';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Footer from './components/sections/Footer';
import PolicyPage from './pages/PolicyPage';

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
    <div className="bg-background text-text-primary min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      <Helmet>
        <title>{contactConfig.tradeNameAr} | شريكك الإستراتيجي</title>
        <meta name="description" content={contactConfig.description} />
        <link rel="canonical" href="https://almthali.com" />
        <meta property="og:title" content={`${contactConfig.tradeNameAr} | نصنع الهوية ونقود التحول الرقمي`} />
        <meta property="og:description" content={contactConfig.description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${contactConfig.tradeNameAr}",
              "image": "https://almthali.com/logo.png",
              "@id": "https://almthali.com",
              "url": "https://almthali.com",
              "telephone": "${contactConfig.phone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${contactConfig.address}",
                "addressLocality": "${contactConfig.city}",
                "addressRegion": "Riyadh Province",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="fixed top-0 w-full z-50 flex flex-col">
        <AnnouncementBar />
        <Header />
      </div>

      <main className="pt-24 md:pt-[120px]">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}
