import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { NewsletterSignup } from './components/NewsletterSignup';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { ContactPage } from './components/pages/ContactPage';
import { Toaster } from './components/ui/sonner';

type PageId = 'home' | 'about' | 'services' | 'gallery' | 'resources' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1) as PageId;
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    const pageId = page as PageId;
    setCurrentPage(pageId);
    window.history.pushState({}, '', `#${pageId}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      {currentPage !== 'contact' && <NewsletterSignup />}
      
      <Footer onNavigate={handleNavigate} />
      
      <Toaster />
    </div>
  );
}
