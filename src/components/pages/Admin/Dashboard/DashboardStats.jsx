import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { FileText, MessageSquare, Image, Mail, Users, TrendingUp } from 'lucide-react';
import { 
  getBlogPosts, 
  getTestimonials, 
  getGalleryImages, 
  getContactSubmissions,
  getNewsletterSubscribers 
} from '../../../../lib/adminStore';

export function DashboardStats() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    totalTestimonials: 0,
    publishedTestimonials: 0,
    totalImages: 0,
    publishedImages: 0,
    unreadContacts: 0,
    newsletterSubscribers: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const posts = getBlogPosts();
    const testimonials = getTestimonials();
    const images = getGalleryImages();
    const contacts = getContactSubmissions();
    const subscribers = getNewsletterSubscribers();

    setStats({
      totalPosts: posts.length,
      publishedPosts: posts.filter(p => p.published).length,
      totalTestimonials: testimonials.length,
      publishedTestimonials: testimonials.filter(t => t.published).length,
      totalImages: images.length,
      publishedImages: images.filter(i => i.published).length,
      unreadContacts: contacts.filter(c => !c.read).length,
      newsletterSubscribers: subscribers.length,
    });
  };

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.totalPosts,
      subtitle: `${stats.publishedPosts} published`,
      icon: FileText,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Testimonials',
      value: stats.totalTestimonials,
      subtitle: `${stats.publishedTestimonials} published`,
      icon: MessageSquare,
      color: 'bg-accent/20 text-accent-foreground',
    },
    {
      title: 'Gallery Images',
      value: stats.totalImages,
      subtitle: `${stats.publishedImages} published`,
      icon: Image,
      color: 'bg-secondary/30 text-secondary-foreground',
    },
    {
      title: 'Contact Messages',
      value: stats.unreadContacts,
      subtitle: 'unread messages',
      icon: Mail,
      color: 'bg-[#F2C94C]/20 text-[#2C4F4A]',
    },
    {
      title: 'Newsletter Subscribers',
      value: stats.newsletterSubscribers,
      subtitle: 'total subscribers',
      icon: Users,
      color: 'bg-[#5EC4CD]/20 text-[#2C4F4A]',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">{stat.title}</CardTitle>
            <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center`}>
              <stat.icon className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.subtitle}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
