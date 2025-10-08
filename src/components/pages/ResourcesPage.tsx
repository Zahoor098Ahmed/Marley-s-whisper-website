import { motion } from 'motion/react';
import { BookOpen, FileText, Video, Download, Calendar, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function ResourcesPage() {
  const blogPosts = [
    {
      title: '5 Signs Your Child Might Benefit from Home-Based Learning',
      excerpt: 'Understanding when traditional schooling isn\'t working and recognizing the signs that your child needs additional support.',
      category: 'Guidance',
      date: 'March 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1758598737529-3b326b4c8a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rcyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTk3MzYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Making Learning Fun: Creative Activities for Reluctant Learners',
      excerpt: 'Practical ideas for engaging children who struggle with traditional learning methods through hands-on, creative approaches.',
      category: 'Activities',
      date: 'March 10, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1758347536110-99b5bc7c89cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY3JhZnRzJTIwY3JlYXRpdmUlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc1OTczNjM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Understanding School Exclusion: A Parent\'s Guide',
      excerpt: 'What exclusion means, your rights as a parent, and how to support your child through this challenging experience.',
      category: 'Guidance',
      date: 'March 5, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1640095108893-a1486543c5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbmF0dXJlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTk3MzYzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Success Story: How Oliver Returned to Mainstream Education',
      excerpt: 'A case study following one child\'s journey from exclusion risk to thriving in school with the right support.',
      category: 'Case Study',
      date: 'February 28, 2025',
      readTime: '8 min read',
      image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_6827-high.jpg',
    },
    {
      title: 'Building Emotional Resilience in Children with Behavioral Challenges',
      excerpt: 'Strategies for helping children develop coping mechanisms and emotional regulation skills.',
      category: 'Tips',
      date: 'February 20, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1758612898464-06a3fec97767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHN1cHBvcnQlMjB0ZWFjaGVyJTIwY2hpbGR8ZW58MXx8fHwxNzU5NzM2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Benefits of Outdoor Learning for Child Development',
      excerpt: 'How nature-based education can improve focus, reduce anxiety, and foster a love of learning.',
      category: 'Research',
      date: 'February 15, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1602178041104-f974b84751d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBiZWFjaCUyMGV4cGxvcmF0aW9ufGVufDF8fHx8MTc1OTczNjM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Parent Support Guide',
      description: 'Comprehensive guide for parents navigating educational challenges',
      type: 'PDF',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Video,
      title: 'Introduction to Our Approach',
      description: 'Video overview of our educational philosophy and methods',
      type: 'Video',
      color: 'bg-accent/20 text-accent-foreground',
    },
    {
      icon: Download,
      title: 'Activity Ideas Pack',
      description: '50+ creative learning activities you can do at home',
      type: 'PDF',
      color: 'bg-secondary/30 text-secondary-foreground',
    },
    {
      icon: Calendar,
      title: 'Learning Schedule Template',
      description: 'Customizable template for organizing home learning',
      type: 'PDF',
      color: 'bg-primary/10 text-primary',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
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
              <span className="text-sm">Educational Resources</span>
            </div>
            <h1 className="mb-6">Resources & Blog</h1>
            <p className="text-lg text-muted-foreground">
              Expert guidance, practical tips, and inspiring stories to support your child's educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Free Downloadable Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helpful guides and tools to support your child's learning at home.
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
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <resource.icon className="w-7 h-7" />
                    </div>
                    <Badge variant="secondary" className="mb-3">{resource.type}</Badge>
                    <h3 className="mb-2 text-base">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                      Download
                      <Download className="w-4 h-4 ml-2 group-hover/btn:translate-y-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
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
                        <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
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
    </div>
  );
}
