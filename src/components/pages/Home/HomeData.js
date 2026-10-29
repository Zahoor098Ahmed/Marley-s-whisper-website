import React from 'react';
import { Home, BookOpen, Users } from 'lucide-react';

export const services = [
  {
    icon: BookOpen,
    title: 'In-School Support and Coaching',
    description: React.createElement(
      React.Fragment,
      null,
      'Professional coaching and mentoring within school settings to fully engage every child and ',
      // React.createElement('span', { style: { color: '#0000FF' } }, 'to fully engage every child and'),
      ' prevent exclusion.'
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
    description: 'Holistic approach involving the whole family in the educational journey.',
    color: 'bg-secondary/30 text-secondary-foreground',
    imageSrc: 'https://prevention.psu.edu/wp-content/uploads/2022/05/family-hands_AdobeStock_224157897_Artem-Web.jpeg',
  },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Children Supported' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];