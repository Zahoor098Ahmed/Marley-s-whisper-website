import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to backend/Supabase
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@marleyswhisper.com',
      link: 'mailto:info@marleyswhisper.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+44 (0) 1234 567890',
      link: 'tel:+441234567890',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Serving families across the United Kingdom',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9:00 AM - 5:00 PM',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'We typically schedule an initial consultation within 2-3 days of your inquiry. Support can begin shortly after that.',
    },
    {
      question: 'Do you work with schools?',
      answer: 'Yes, we collaborate with schools to provide in-school support and can work alongside existing educational plans.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We serve families throughout the United Kingdom. For home-based services, we cover a wide geographic area.',
    },
  ];

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
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+44 1234 567890"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => handleChange('subject', value)}
                            required
                          >
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                              <SelectItem value="home-learning">Home-Based Learning</SelectItem>
                              <SelectItem value="school-support">In-School Support</SelectItem>
                              <SelectItem value="family-program">Family Programs</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your child's needs and how we can help..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full group">
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
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
                    Book a free 30-minute consultation to discuss your child's needs and explore how we can help.
                  </p>
                  <Button className="w-full" onClick={() => alert('Calendar booking integration would go here')}>
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                        <h4 className="mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    onClick={() => onNavigate('resources')}
                  >
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>

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
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => onNavigate('about')}
                    >
                      Meet Our Team
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
