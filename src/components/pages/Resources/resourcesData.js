import { FileText, Calendar } from 'lucide-react';

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export const resources = [
  {
    icon: FileText,
    title: 'Parent Support Guide',
    slug: slugify('Parent Support Guide'),
    description: 'Exclusion, anxiety aur home routines par practical guidance (Marley’s Whisper).',
    type: 'Article',
    color: 'bg-primary/10 text-primary',
    content: `Marley’s Whisper – Parent Support Guide\n\nOverview\nHamari service ka focus: calm, relational learning jahan child ko secure feel ho.\n\nKey Topics\n• School refusal & anxiety: micro-routines, gentle starts, co-regulation.\n• Exclusion navigate karna: evidence collect, clear communication, reintegration planning.\n• Home learning structure: short tasks, movement breaks, visual choices.\n\nContact\nEmail: hello@marleyswhisper.example\nWebsite: marleyswhisper.example`,
  },
  {
    icon: FileText,
    title: 'Introduction to Our Approach',
    slug: slugify('Introduction to Our Approach'),
    description: 'Relational, sensory‑smart framework ka short overview (text).',
    type: 'Article',
    color: 'bg-accent/20 text-accent-foreground',
    content: `Humara approach relational aur sensory-smart hai.\n\nPrinciples\n• Safety first: child ko secure feel karwana through co-regulation.\n• Sensory support: environment ko child ke sensory needs ke mutabiq adjust karna.\n• Short, structured learning bursts: overwhelm kam karne ke liye.\n• Choice-led tasks: autonomy aur engagement badhane ke liye.\n\nOutcome\nConfidence rebuild hoti hai, curiosity wapas aati hai, aur learning joyful ban jati hai.`,
  },
  {
    icon: FileText,
    title: 'Activity Ideas Pack',
    slug: slugify('Activity Ideas Pack'),
    description: '50+ engaging home learning activities aligned to our approach.',
    type: 'Article',
    color: 'bg-secondary/30 text-secondary-foreground',
    content: `Activity Ideas Pack\n\n• Nature tally walks\n• Kitchen science (mix, observe, record)\n• Art journalling prompts\n• Build‑and‑tell stories\n• Calm corner setup guide\n\nTips\nShort bursts, clear choices, praise for effort.`,
  },
  {
    icon: Calendar,
    title: 'Learning Schedule Template',
    slug: slugify('Learning Schedule Template'),
    description: 'Customisable weekly routine template with visual cues.',
    type: 'Article',
    color: 'bg-primary/10 text-primary',
    content: `Weekly Learning Schedule Template\n\nMon–Fri Blocks\n• Wake & Move\n• Focus Task (15–25 min)\n• Snack & Break\n• Practice (literacy/numeracy/life skills)\n• Outdoor/Community time\n• Reflect & Wrap\n\nNotes\nUse visual icons, allow flexible swaps, celebrate small wins.`,
  },
];

export const getSlug = (title) => slugify(title);