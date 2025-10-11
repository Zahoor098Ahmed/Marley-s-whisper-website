import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
// import { NewsletterSignup } from './components/NewsletterSignup';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { ResourceDetailPage } from './components/pages/ResourceDetailPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { Toaster } from './components/ui/sonner';

type PageId = 'home' | 'about' | 'services' | 'gallery' | 'resources' | 'resource' | 'blog' | 'contact' | 'privacy' | 'terms' | 'cookies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [params, setParams] = useState<Record<string, string>>({});

  const parseHash = (hashValue?: string) => {
    const raw = (hashValue ?? window.location.hash).replace(/^#/, '');
    const [base, query] = raw.split('?');
    const searchParams: Record<string, string> = {};
    if (query) {
      new URLSearchParams(query).forEach((v, k) => { searchParams[k] = v; });
    }
    return { base: (base || 'home') as PageId, params: searchParams };
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

  const handleNavigate = (page: string) => {
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
