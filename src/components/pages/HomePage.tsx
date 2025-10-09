
import { motion } from 'motion/react';
import { Home, BookOpen, Users, Heart, ArrowRight, Sparkles, Star, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: BookOpen,
      title: 'In-School Support',
      description: (
        <>
           Professional coaching and mentoring within school settings{' '}
           <span style={{ color: '#0000FF' }}>to fully engage every child and</span>{' '}
           prevent exclusion.
       </>
      ),
      color: 'bg-accent/20 text-accent-foreground',
      imageSrc: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_7892-high-gzzzmc.jpg',
    },
    {
      icon: Home,
      title: 'Home-Based Learning',
      description: 'Personalised educational programmes delivered in the comfort and safety of your home.',
      color: 'bg-primary/10 text-primary',
      imageSrc: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_0689-high-w6ypkh.jpg',
    },
    {
      icon: Users,
      title: 'Family Support Programmes',
      description: 'Holistic support involving the whole family in the educational journey.',
      color: 'bg-secondary/30 text-secondary-foreground',
      imageSrc: 'https://prevention.psu.edu/wp-content/uploads/2022/05/family-hands_AdobeStock_224157897_Artem-Web.jpeg',
    },
  ];

  const stats = [
    { value: '100+', label: 'Children Supported' },
    { value: '95%', label: 'Success Rate' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Partner Schools' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Where care meets education for a lifelong life of learning</span>
              </div>
              
              <h1 className="mb-6">
                Inspiring unique minds for a lifetime of learning
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                At Marley's Whisper, we are dedicated to creating a unique and unforgettable experience with learning. With a passion for creativity and attention to detail, we strive to make every moment special, and make sure that every child is successfully re-engaged in full time school life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onNavigate('services')} className="group">
                  Explore What We Offer
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_6245-high.jpg"
                  alt="Children learning outdoors in nature"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 right-6 lg:right-auto lg:w-80"
              >
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary fill-current" />
                      </div>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Rated 5 stars by families</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-3 text-3xl font-semibold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What We Offer</h2>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="rounded-xl overflow-hidden mb-6 bg-white" style={{ aspectRatio: '13/15' }}>
                      <ImageWithFallback
                        src={service.imageSrc}
                        alt={`${service.title} image`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto hover:bg-transparent"
                      onClick={() => onNavigate('services')}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" onClick={() => onNavigate('services')} className="group">
              View All What We Offer
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Testimonial */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <MessageSquare className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground mb-6">
                  "Marley's Whisper transformed my son's relationship with learning. The personalized approach 
                  and compassionate support helped him rediscover his love for education."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary fill-current" />
                  </div>
                  <div>
                    <div className="text-sm">Sarah Thompson</div>
                    <div className="text-sm text-muted-foreground">Parent, London</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" onClick={() => onNavigate('gallery')}>
                    Read More Testimonials
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            <h2 className="mb-6">Ready to Help Your Child Thrive?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get in touch today to discuss how we can support your child's educational journey with 
              compassion and expertise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="group"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
