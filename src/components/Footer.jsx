import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/70a08256e8e435ba6ffb63b26cfa01eb5f0ed982.png';

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Marley's Whisper Logo" 
                className="h-16 w-16 object-contain bg-white rounded-full p-1"
              />
              <div className="flex flex-col">
                <span className="text-lg">Marley's Whisper</span>
                <span className="text-xs opacity-90">Inspiring minds, realising dreams</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Compassionate learning support helping children thrive through personalised programmes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Resources', 'Policy'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Merceronva@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hampshire, IOW, Surrey, Berkshire</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; 2025 Marley's Whisper. All rights reserved.</p>
            <div className="flex gap-6">
              {/* <button className="hover:underline" onClick={() => onNavigate('policy')}>Privacy Policy</button>
              <button className="hover:underline" onClick={() => onNavigate('terms')}>Terms of Service</button> */}
            </div>
            <p className="text-xs opacity-90 text-white text-center">
            Website is Developed by  
            <a 
              href="https://timeglobaltech.com/portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:opacity-100 ml-2"
            >
               Time Global
            </a>
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
