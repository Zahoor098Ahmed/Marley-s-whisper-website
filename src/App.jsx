import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
// import { NewsletterSignup } from './components/NewsletterSignup';
import { HomePage } from './components/pages/Home/HomePage';
import { AboutPage } from './components/pages/About/AboutPage';
import { ServicesPage } from './components/pages/Services/ServicesPage';
import { GalleryPage } from './components/pages/Gallery/GalleryPage';
import { ResourcesPage } from './components/pages/Resources/ResourcesPage';
import { ResourceDetailPage } from './components/pages/Resources/ResourceDetailPage';
import { BlogDetailPage } from './components/pages/Resources/BlogDetailPage';
import { ContactPage } from './components/pages/Contact/ContactPage';
import { PrivacyPage } from './components/pages/Privacy/PrivacyPage';
import { TermsPage } from './components/pages/Terms/TermsPage';
import { Toaster } from './components/ui/sonner';

// Page identifiers
const PAGE_IDS = ['home','about','services','gallery','resources','resource','blog','contact','privacy','terms','cookies'];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [params, setParams] = useState({});

  const parseHash = (hashValue) => {
    const raw = (hashValue ?? window.location.hash).replace(/^#/, '');
    const [base, query] = raw.split('?');
    const searchParams = {};
    if (query) {
      new URLSearchParams(query).forEach((v, k) => { searchParams[k] = v; });
    }
    return { base: base || 'home', params: searchParams };
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const { base, params } = parseHash();
      setCurrentPage(base);
      setParams(params);
    };

    window.addEventListener('popstate', handlePopState);
    // Initialize from current location
    const init = parseHash();
    setCurrentPage(init.base);
    setParams(init.params);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page) => {
    const { base, params } = parseHash(`#${page}`);
    setCurrentPage(base);
    setParams(params);
    window.history.pushState({}, '', `#${page}`);
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
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'resource':
        return <ResourceDetailPage params={params} onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogDetailPage params={params} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
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

      {/* {currentPage !== 'contact' && <NewsletterSignup />} */}
      
      <Footer onNavigate={handleNavigate} />
      
      <Toaster />
    </div>
  );
}
