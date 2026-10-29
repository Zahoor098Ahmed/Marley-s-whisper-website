const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export const blogPosts = [
  {
    title: '5 Signs Your Child Might Benefit from Home-Based Learning',
    slug: slugify('5 Signs Your Child Might Benefit from Home-Based Learning'),
    excerpt: "Understanding when traditional schooling isn't working and recognizing the signs that your child needs additional support.",
    category: 'Guidance',
    date: 'March 15, 2025',
    readTime: '5 min read',
    image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_6827-high.jpg',
    content: `When a child struggles in mainstream settings, it can show up through avoidance, anxiety, or frequent behavioural incidents.
Here are five indicators home-based learning might help:

1) Persistent school refusal despite supportive interventions.
2) Overwhelm in busy environments leading to shutdowns or meltdowns.
3) Significant gaps in learning paired with low confidence.
4) Difficulty with transitions and routine changes.
5) Positive engagement at home compared to school.

With a personalised programme, children re-build confidence and rediscover curious, joyful learning.`,
  },
  {
    title: 'Making Learning Fun: Creative Activities for Reluctant Learners',
    slug: slugify('Making Learning Fun: Creative Activities for Reluctant Learners'),
    excerpt: 'Practical ideas for engaging children who struggle with traditional learning methods through hands-on, creative approaches.',
    category: 'Activities',
    date: 'March 10, 2025',
    readTime: '7 min read',
    image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_0356-high.jpg',
    content: `Reluctant learners thrive with play, movement, and sensory-rich tasks.
Try: nature trails with tally charts, kitchen science, art journalling, and build-and-tell stories.
Aim for short, structured bursts, choice-led tasks, and lots of praise for effort.
Consistency and gentle scaffolding make progress stick.`,
  },
  {
    title: "Understanding School Exclusion: A Parent's Guide",
    slug: slugify("Understanding School Exclusion: A Parent's Guide"),
    excerpt: 'What exclusion means, your rights as a parent, and how to support your child through this challenging experience.',
    category: 'Guidance',
    date: 'March 5, 2025',
    readTime: '10 min read',
    image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_0689-high-w6ypkh.jpg',
    content: `Exclusion is a serious step. Parents have rights to appeal and to request reasonable adjustments.
Focus on calm advocacy: gather evidence, agree support plans, and ensure a reintegration pathway.
Children benefit from predictable routines, trusted adults, and targeted interventions.`,
  },
  {
    title: 'Building Emotional Resilience in Children with Behavioural Challenges',
    slug: slugify('Building Emotional Resilience in Children with Behavioural Challenges'),
    excerpt: 'Strategies for helping children develop coping mechanisms and emotional regulation skills.',
    category: 'Tips',
    date: 'February 20, 2025',
    readTime: '6 min read',
    image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_6166-high.jpg',
    content: `Emotional resilience grows through co-regulation, clear expectations, and practising coping tools.
Use visual schedules, calm corners, breathing exercises, and role-play.
Progress is gradual—celebrate small wins and keep routines steady.`,
  },
  {
    title: 'The Benefits of Outdoor Learning for Child Development',
    slug: slugify('The Benefits of Outdoor Learning for Child Development'),
    excerpt: 'How nature-based education can improve focus, reduce anxiety, and foster a love of learning.',
    category: 'Research',
    date: 'February 15, 2025',
    readTime: '9 min read',
    image: 'https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_5004-high.jpg',
    content: `Outdoor learning supports sensory regulation, gross motor development, and attention.
Simple activities—mapping walks, leaf classification, and storytelling circles—build curiosity and calm.
Regular time outside lowers stress and improves readiness to learn.`,
  },
];

export const getPostSlug = (title) => slugify(title);