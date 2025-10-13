import { motion } from 'motion/react';
import { useState } from 'react';
import { BookOpen, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { resources, getSlug } from './resourcesData';
import { blogPosts, getPostSlug } from './blogData';

export function ResourcesPage({ onNavigate }) {
  // Blog/resource modals removed; using dedicated pages
  // resource modal removed; using dedicated details page navigation




  const getCategoryColor = (category) => {
    const colors = {
      'Guidance': 'bg-primary/10 text-primary',
      'Activities': 'bg-secondary/30 text-secondary-foreground',
      'Tips': 'bg-accent/20 text-accent-foreground',
      'Case Study': 'bg-chart-4/20 text-foreground',
      'Research': 'bg-chart-5/20 text-foreground',
    };
    return colors[category] || 'bg-muted text-muted-foreground';
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
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Educational Blogs</span>
            </div>
            {/* <h1 className="mb-6">Resources & Blog</h1> */}
            {/* <h1 className="mb-6"> Blog</h1> */}
            <p className="text-lg text-muted-foreground">
              Expert guidance, practical tips, and inspiring stories to support our child's educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Featured Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helpful guides and tools to support our child's learning at home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                    <h3 className="mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{resource.type}</span>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto hover:bg-transparent"
                        onClick={() => onNavigate?.(`resource?slug=${getSlug(resource.title)}`)}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories from our team of educational experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto hover:bg-transparent"
                        onClick={() => onNavigate?.(`blog?slug=${getPostSlug(post.title)}`)}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
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
            <Button size="lg" variant="outline">
              View All Posts
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4">Quick Tip of the Week</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      <strong className="text-foreground">Create a Learning Corner:</strong> Dedicate a quiet, comfortable space in your home specifically for learning. Include good lighting, minimal distractions, and your child's favorite learning materials. This signals to your child that it's time to focus and helps create positive learning associations.
                    </p>
                    <Button variant="outline">
                      More Tips
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 mx-auto mb-6" />
            <h2 className="mb-6">Stay Informed</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly tips, new resources, and inspiring success stories delivered to your inbox.
            </p>
            <Button size="lg" variant="secondary">
              Subscribe Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog details now open on a dedicated page */}

      {/* Video Player Modal removed */}

      {/* Resource details open on a dedicated page now */}
    </div>
  );
}

// BlogDetailsModal removed


// Modal for resource details (styled like blog)
// ResourceDetailsModal removed in favor of dedicated page navigation
