import { motion } from 'motion/react';
import { Home, School, Users, Calendar, BookOpen, Heart, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Home,
      title: 'Home-Based Learning Programmes',
      subtitle: 'Personalised education in familiar, comfortable surroundings',
      color: 'bg-primary/10 text-primary',
      // imageSrc: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_0689-high-w6ypkh.jpg',
      features: [
        'Meeting with child and parent',
        'Baseline and assessment of needs',
        'Personalised programme to work towards the aspirations',
        '1:1 tailored learning sessions',
        'Small group sessions, as appropriate',
        'Flexible scheduling to meet family needs',
        'Regular progress reports',
        'Parent support sessions',
        'Attendance at professionals’ meetings',
      ],
      benefits: [
        'Safe learning environment',
        'Builds confidence',
        'Develop positive relationships based on trust',
        'Reduces anxiety and behavioural challenges',
        'Supports with a healthy routine at home',
        'Strengthens family involvement in education',
      ],
    },
    {
      icon: School,
      title: 'In-School Support & Coaching',
      subtitle: 'Professional mentoring to prevent exclusion and promote success',
      color: 'bg-accent/20 text-secondary-foreground',
      imageSrc: 'https://picsum.photos/id/1035/1200/675',
      features: [
        'We meet with the parent/carer and the school member of staff to discuss the issues and agree the way forward',
        'We observe the child’s behaviour in the context of their school',
        'We complete a baseline assessment of needs at their school',
        'We coach teacher(s) to plan around the child’s needs',
        'We coach teacher(s) to develop strategies to encourage positive behaviour for learning',
        'We support and monitor the impact of the intervention',
        'We create a model of good practice',
        'We work with school leaders to create systems to sustain progress',
        'We deliver small group or whole school training sessions',
      ],
      benefits: [
        'Keeps children engaged in mainstream education',
        'Builds teachers’ confidence',
        'Reduces exclusions',
        'Develops coping strategies for challenging situations',
      ],
    },
    {
      icon: Users,
      title: 'Family Support Programmes',
      subtitle: 'Holistic approach involving the whole family',
      color: 'bg-secondary/30 text-secondary-foreground',
      imageSrc: 'https://picsum.photos/id/1011/1200/675',
      features: [
        'We develop working relationships',
        'We support with the home routine development',
        'We help develop behaviour management and communication strategies',
      ],
      benefits: [
        'Parents are empowered with strategies',
        'Relationships are improved at home',
        'Parents are motivated and engage with the school life',
      ],
    },
  ];

  const additionalOfferings = [
    {
      icon: Calendar,
      title: 'Holiday Programs',
      description: 'Engaging educational activities during school breaks to maintain momentum and prevent regression.',
    },
    {
      icon: BookOpen,
      title: 'Curriculum Support',
      description: 'Specialized help with core subjects including English, Maths, Science, and creative arts.',
    },
    {
      icon: Sparkles,
      title: 'Creative Learning',
      description: 'Hands-on activities including crafts, nature exploration, and experiential learning.',
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
              <Heart className="w-4 h-4" />
              <span className="text-sm">Our Services</span>
            </div>
            <h1 className="mb-3 text-4xl font-semibold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Comprehensive Educational Support</h1>
            <div className="mx-auto h-px w-16 bg-primary/30 mb-6" />
            <div className="max-w-3xl mx-auto rounded-2xl bg-white/60 backdrop-blur p-6 md:p-8 ring-1 ring-primary/10 shadow-sm">
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  We provide a holistic and creative approach to re-engage children and their families with healthy living and relationships that will make learning possible again.
                </p>
                <p>
                  Our qualified professionals work with children who are out of education and support them and their families at home to help them enjoy learning again, so that they become ready to reintegrate into a school environment. We develop trusting relationships and engage children in fun, practical activities to fill in the gaps in their learning and improve social and communication skills. We build records of achievements for the family to refer back to and share with the named school.
                </p>
                <p>
                  We work with pupils who are struggling in school – at risk of exclusion – and liaise closely with their teachers to make their school experience enjoyable. Through coaching, we develop a culture of inclusion where the child is at the heart of all planning.
                </p>
                <p>
                  Every learning programme is personalised to meet the unique needs of the child and their family.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Service Header */}
                      <div className={`${service.color} p-8 lg:p-10 flex flex-col justify-center`}>
                        <div className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center mb-6">
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h2 className="mb-3">{service.title}</h2>
                        <p className="opacity-80">{service.subtitle}</p>
                      </div>

                      {/* Features & Benefits */}
                      <div className="lg:col-span-2 p-8 lg:p-10 bg-white">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Features */}
                          <div>
                            <h3 className="mb-4 flex items-center gap-2">
                              <span>What's Included</span>
                              <Badge variant="secondary" className="ml-2">Features</Badge>
                            </h3>
                            <ul className="space-y-3">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h3 className="mb-4 flex items-center gap-2">
                              <span>Key Benefits</span>
                              <Badge variant="secondary" className="ml-2">Outcomes</Badge>
                            </h3>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-3">
                                  <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="mt-6 pt-6 border-t border-border">
                              <Button onClick={() => onNavigate('contact')} className="group">
                                Get Started
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Additional Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementary services to provide comprehensive educational support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                      <offering.icon className="w-7 h-7" />
                    </div>
                    <h3 className="mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with Marley's Whisper is simple and straightforward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Free, no-obligation discussion about your child\'s needs',
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'Comprehensive evaluation to understand learning style and challenges',
              },
              {
                step: '3',
                title: 'Tailored Plan',
                description: 'Personalized program designed specifically for your child',
              },
              {
                step: '4',
                title: 'Ongoing Support',
                description: 'Regular sessions with continuous progress monitoring',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.step}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" onClick={() => onNavigate('contact')} className="group">
              Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Not Sure Which Service is Right?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us for a free consultation. We'll discuss your child's unique needs and recommend 
              the best approach to support their educational journey.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('contact')}
              className="group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
