

import { useState, FormEvent } from 'react';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeForm, setActiveForm] = useState('school');
  const [formData, setFormData] = useState({
    school: { schoolName: '', referringContact: '', email: '', phone: '', message: '' },
    homeLearning: { referringAgency: '', contactName: '', email: '', phone: '', message: '' },
    familySupport: { referringAgency: '', contactName: '', email: '', phone: '', message: '' },
  });

  const handleSubmit = (formType: string) => (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to backend/Supabase
    console.log(`${formType} form submitted:`, formData[formType]);
    setFormSubmitted(true);
    setFormData({
      school: { schoolName: '', referringContact: '', email: '', phone: '', message: '' },
      homeLearning: { referringAgency: '', contactName: '', email: '', phone: '', message: '' },
      familySupport: { referringAgency: '', contactName: '', email: '', phone: '', message: '' },
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (formType: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [formType]: { ...prev[formType], [field]: value },
    }));
  };

  const contactInfo = [
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

  // WhatsApp chat link
  const adminWhatsAppNumber = '447000000000';
  const defaultWhatsAppMessage = encodeURIComponent("Hello, this is Marley’s Whisper, I’d like to learn more.");
  const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${defaultWhatsAppMessage}`;

  // Google Calendar booking link (prefilled event template)
  const gcTitle = encodeURIComponent("Consultation with Marley's Whisper");
  const gcDetails = encodeURIComponent("Book a free 10-minute consultation to discuss your child's needs and explore how we can help.");
  const gcLocation = encodeURIComponent("Online (WhatsApp or Zoom)");
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcTitle}&details=${gcDetails}&location=${gcLocation}`;

  // FAQs removed as per request

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 cursor-pointer"
              title="Open WhatsApp chat"
              role="button"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm">Get in Touch</span>
            </div>
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="mb-2">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6">Send Us a Message</h2>
                  <div className="text-center py-10">
                    <div
                      className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 cursor-pointer"
                      title="Chat on WhatsApp"
                      role="button"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="mb-2">Chat on WhatsApp</h3>
                    <p className="text-muted-foreground mb-6">
                     Prefer WhatsApp? Tap the icon above to chat with Ena directly — she’ll be happy to help.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      Chat on WhatsApp
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      Or email us at
                      <a className="ml-1 underline" href="mailto:Merceron@marleyswhisper.com"> Merceron@marleyswhisper.com</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Booking Calendar CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                    <CalendarIcon className="w-7 h-7" />
                  </div>
                  <h3 className="mb-3">Schedule a Consultation</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a free 10-minute consultation to discuss our child's needs and explore how we can help.
                  </p>
                  <Button className="w-full" onClick={() => window.open(googleCalendarUrl, '_blank')}>
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>

              {/* FAQs section removed */}

              {/* Quick Links */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="mb-6">Quick Links</h3>
                  <div className="space-y-3">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => onNavigate('services')}
                    >
                      View Our Services
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => onNavigate('gallery')}
                    >
                      Read Testimonials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="mb-2">Serving the UK</h3>
            <p className="text-muted-foreground">
              We provide support to families across the United Kingdom
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
