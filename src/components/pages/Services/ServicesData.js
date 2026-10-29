import { Home, School, Users, Calendar, BookOpen, Sparkles } from 'lucide-react';

export const services = [
  {
    icon: School,
    title: 'In-School Support and Coaching',
    subtitle: 'Professional mentoring to prevent exclusion and promote success',
    color: 'bg-accent/20 text-secondary-foreground',
    imageSrc: 'https://picsum.photos/id/1035/1200/675',
    features: [
      'We meet with the parent/carer and the school member of staff to discuss the issues and agree the way forward',
      "We observe the child's behaviour in the context of their school",
      'We complete a baseline assessment of needs at their school',
      "We coach teachers to plan around the child's needs",
      'We coach teachers to develop strategies to encourage positive behaviour for learning',
      'We support and monitor the impact of the intervention',
      'We create a model of good practice',
      'We work with school leaders to create systems to sustain progress',
      'We deliver small group or whole school training sessions',
    ],
    benefits: [
      'Keeps children engaged in education',
      "Builds teachers' confidence",
      'Reduces exclusions',
      'Develops coping strategies for challenging situations',
    ],
  },
  {
    icon: Home,
    title: 'Home-Based Learning',
    subtitle: 'Personalised education in familiar, comfortable surroundings',
    color: 'bg-primary/10 text-primary',
    features: [
      'Meeting with child and parent',
      'Baseline and assessment of needs',
      'Personalised programme to work towards the aspirations:',
      '1:1 tailored learning sessions',
      'Small group sessions, as appropriate',
      'Flexible scheduling to meet family needs',
      'Regular progress reports',
      'Parent support sessions',
      "Attendance at professionals' meetings",
    ],
    benefits: [
      'Safe learning environment',
      'Builds confidence',
      'Develops positive relationships based on trust',
      'Reduces anxiety and behavioural challenges',
      'Supports with a healthy routine at home',
      'Strengthens family involvement in education',
    ],
  },
  {
    icon: Users,
    title: 'Family Support Programmes',
    subtitle: 'Holistic approach involving the whole family in the educational journey',
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

export const additionalOfferings = [
  {
    icon: Calendar,
    title: 'Holiday Programmes',
    description: 'Engaging educational activities during school breaks to maintain momentum and prevent regression.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Support',
    description: 'Specialised help with core subjects including English, Maths, Science, and creative arts.',
  },
  {
    icon: Sparkles,
    title: 'Creative Learning',
    description: 'Hands-on activities including crafts, nature exploration, and experiential learning.',
  },
];