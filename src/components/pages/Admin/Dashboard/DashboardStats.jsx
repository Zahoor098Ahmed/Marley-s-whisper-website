import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { MessageSquare, Image, List, Info } from 'lucide-react';
import { 
  getTestimonials, 
  getGalleryImages,
  getServices,
  getAboutValues,
} from '../../../../lib/adminStore';

export function DashboardStats() {
  const [stats, setStats] = useState({
    totalTestimonials: 0,
    publishedTestimonials: 0,
    totalImages: 0,
    publishedImages: 0,
    totalServices: 0,
    publishedServices: 0,
    totalAboutValues: 0,
    publishedAboutValues: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const testimonials = getTestimonials();
    const images = getGalleryImages();
    const services = getServices();
    const aboutValues = getAboutValues();

    setStats({
      totalTestimonials: testimonials.length,
      publishedTestimonials: testimonials.filter(t => t.published).length,
      totalImages: images.length,
      publishedImages: images.filter(i => i.published).length,
      totalServices: services.length,
      publishedServices: services.filter(s => s.published).length,
      totalAboutValues: aboutValues.length,
      publishedAboutValues: aboutValues.filter(a => a.published).length,
    });
  };

  const statCards = [
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
    // {
    //   title: 'Services',
    //   value: stats.totalServices,
    //   subtitle: `${stats.publishedServices} published`,
    //   icon: List,
    //   color: 'bg-primary/10 text-primary',
    // },
    // {
    //   title: 'About',
    //   value: stats.totalAboutValues,
    //   subtitle: `${stats.publishedAboutValues} published`,
    //   icon: Info,
    //   color: 'bg-muted/30 text-muted-foreground',
    // },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
      {statCards.map((stat, index) => (
        <Card key={stat.title} className="w-full">
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
