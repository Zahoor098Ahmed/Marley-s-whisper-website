import { Mail, MapPin } from 'lucide-react';

export const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'Merceron@marleyswhisper.com',
    link: 'mailto:Merceron@marleyswhisper.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Hampshire, IOW, Surrey, Berkshire',
    link: null,
  },
];

export const adminWhatsAppNumber = '447495525609';
export const defaultWhatsAppMessage = "This is Malery";
export const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

const gcTitle = "Consultation with Marley's Whisper";
const gcDetails = "Book a free 10-minute consultation to discuss your child's needs and explore how we can help.";
const gcLocation = "Online (WhatsApp or Zoom)";
export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(gcTitle)}&details=${encodeURIComponent(gcDetails)}&location=${encodeURIComponent(gcLocation)}`;

export const quickLinks = [
  { label: 'View Our Services', page: 'services' },
  { label: 'Read Testimonials', page: 'gallery' },
];
