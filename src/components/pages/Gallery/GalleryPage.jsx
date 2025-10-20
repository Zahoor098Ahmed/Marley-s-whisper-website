import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { galleryImages, testimonials } from './GalleryData';

export function GalleryPage({ onNavigate }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Thumbnail pagination state
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const [thumbsPerPage, setThumbsPerPage] = useState(10);

  // Responsive thumbnails per page: 5 on mobile, 10 on desktop
  useEffect(() => {
    const updateThumbsPerPage = () => {
      setThumbsPerPage(window.innerWidth < 640 ? 5 : 10);
    };
    updateThumbsPerPage();
    window.addEventListener('resize', updateThumbsPerPage);
    return () => window.removeEventListener('resize', updateThumbsPerPage);
  }, []);

  // Clamp start index when thumbsPerPage or total changes
  useEffect(() => {
    setThumbStartIndex((s) => Math.min(s, Math.max(0, galleryImages.length - thumbsPerPage)));
  }, [thumbsPerPage]);

  // Keep active image within the visible thumbnail window
  useEffect(() => {
    const windowStart = thumbStartIndex;
    const windowEnd = thumbStartIndex + thumbsPerPage - 1;
    if (currentImageIndex < windowStart || currentImageIndex > windowEnd) {
      const newStart = Math.floor(currentImageIndex / thumbsPerPage) * thumbsPerPage;
      setThumbStartIndex(newStart);
    }
  }, [currentImageIndex, thumbsPerPage]);
  

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Thumbnails pagination helpers
  const visibleThumbnails = galleryImages.slice(
    thumbStartIndex,
    thumbStartIndex + thumbsPerPage
  );
  const canPrevThumbs = thumbStartIndex > 0;
  const canNextThumbs = thumbStartIndex + thumbsPerPage < galleryImages.length;

  const prevThumbnails = () => {
    if (canPrevThumbs) {
      setThumbStartIndex((s) => Math.max(0, s - thumbsPerPage));
    }
  };

  const nextThumbnails = () => {
    if (canNextThumbs) {
      setThumbStartIndex((s) =>
        Math.min(galleryImages.length - thumbsPerPage, s + thumbsPerPage)
      );
    }
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
            {/* <h1 className="mb-6">Gallery & Testimonials</h1> */}
            <p className="text-lg text-muted-foreground">
              See the joy of learning in action and hear from the families we've supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
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
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>

                {/* Image Caption */}
                <div className="p-6 sm:p-6 bg-white">
                  <h3 className="mb-2">{galleryImages[currentImageIndex].caption}</h3>
                  <p className="text-muted-foreground">{galleryImages[currentImageIndex].description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Strip with pagination, vertical column, and overlay arrows */}
            <div className="mt-4 sm:mt-6">
              <div className="relative">

                {/* Horizontal row of visible thumbnails (flex left-to-right, centered) */}
                <div className="flex gap-2 sm:gap-3 items-center justify-center">
                  {visibleThumbnails.map((image, index) => {
                    const realIndex = thumbStartIndex + index;
                    return (
                      <button
                        key={realIndex}
                        onClick={() => setCurrentImageIndex(realIndex)}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${
                          currentImageIndex === realIndex
                            ? 'border-primary shadow-lg scale-105'
                            : 'border-transparent opacity-80 hover:opacity-100'
                        }`}
                      >
                        <ImageWithFallback
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Overlay navigation arrows (left/right) */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full shadow-lg disabled:opacity-40"
                  onClick={prevThumbnails}
                  aria-label="Previous thumbnails"
                  disabled={!canPrevThumbs}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full shadow-lg disabled:opacity-40"
                  onClick={nextThumbnails}
                  aria-label="Next thumbnails"
                  disabled={!canNextThumbs}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
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
            <h2 className="mb-4">What They Say</h2>
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
            <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('contact')}>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}