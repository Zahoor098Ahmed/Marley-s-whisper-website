import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1758347536110-99b5bc7c89cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY3JhZnRzJTIwY3JlYXRpdmUlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc1OTczNjM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Creative Crafts & Hands-On Activities',
      description: 'Children exploring creativity through wreath making and artistic projects',
    },
    {
      url: 'https://images.unsplash.com/photo-1602178041104-f974b84751d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBiZWFjaCUyMGV4cGxvcmF0aW9ufGVufDF8fHx8MTc1OTczNjM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Beach Exploration & Nature Learning',
      description: 'Outdoor educational experiences connecting with nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1640461470346-c8b56497850a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYm9hcmQlMjBnYW1lcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1OTczNjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Educational Games & Interactive Learning',
      description: 'Board games like Scrabble making learning fun and engaging',
    },
    {
      url: 'https://images.unsplash.com/photo-1758598737529-3b326b4c8a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rcyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTk3MzYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Reading & Literacy Development',
      description: 'Fostering a love for reading and storytelling',
    },
    {
      url: 'https://images.unsplash.com/photo-1640095108893-a1486543c5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbmF0dXJlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTk3MzYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Outdoor Learning Adventures',
      description: 'Discovering and learning in natural environments',
    },
    {
      url: 'https://images.unsplash.com/photo-1690100691688-f3b97fc15392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkJTIwc21pbGluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzU5NzM2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Happy Learning Moments',
      description: 'The joy of learning in a supportive environment',
    },
  ];

  const testimonials = [
    {
      quote: "Marley's Whisper transformed my son's relationship with learning. The personalized approach and compassionate support helped him rediscover his love for education. He's now thriving and actually asks to do his schoolwork!",
      author: 'Sarah Thompson',
      role: 'Parent',
      location: 'London',
      rating: 5,
    },
    {
      quote: "As a headteacher, I've worked with Marley's Whisper on several occasions. Their professional, caring approach has helped prevent exclusions and supported children back into mainstream education. They're an invaluable resource.",
      author: 'David Richards',
      role: 'Headteacher',
      location: 'Birmingham',
      rating: 5,
    },
    {
      quote: "I was really worried about my daughter falling behind, but the team at Marley's Whisper created such a nurturing environment. She's gained confidence, improved her reading, and most importantly, she's happy again.",
      author: 'Amanda Chen',
      role: 'Parent',
      location: 'Manchester',
      rating: 5,
    },
    {
      quote: "The in-school support was exactly what our son needed. The mentoring helped him develop coping strategies and social skills. He's now managing much better in the classroom and has made real friends.",
      author: 'Michael O\'Connor',
      role: 'Parent',
      location: 'Bristol',
      rating: 5,
    },
    {
      quote: "I love doing crafts and going to the beach! Learning is fun now, and I don't feel scared anymore. My teacher is really nice and helps me when things are hard.",
      author: 'Emma',
      role: 'Age 9',
      location: 'Leeds',
      rating: 5,
    },
    {
      quote: "Working with Marley's Whisper was a turning point for our family. They didn't just support our child—they supported us as parents too. We now have strategies that work and our home is so much calmer.",
      author: 'Rachel & James Foster',
      role: 'Parents',
      location: 'Edinburgh',
      rating: 5,
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
              <span className="text-sm">Learning is Fun</span>
            </div>
            <h1 className="mb-6">Gallery & Testimonials</h1>
            <p className="text-lg text-muted-foreground">
              See the joy of learning in action and hear from the families we've supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Learning in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From crafts to outdoor exploration, see how we make learning engaging and enjoyable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                {/* Main Image */}
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={galleryImages[currentImageIndex].url}
                      alt={galleryImages[currentImageIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>

                {/* Image Caption */}
                <div className="p-6 bg-white">
                  <h3 className="mb-2">{galleryImages[currentImageIndex].caption}</h3>
                  <p className="text-muted-foreground">{galleryImages[currentImageIndex].description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-6 gap-3 mt-6">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-primary shadow-lg scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What Families Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from parents, children, and educators about their experiences with Marley's Whisper.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm">{testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Want to Share Your Story?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We'd love to hear from you. Your feedback helps us improve and inspires other families 
              who might be considering our services.
            </p>
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
