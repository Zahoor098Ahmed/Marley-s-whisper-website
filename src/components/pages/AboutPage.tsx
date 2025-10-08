import { motion } from 'motion/react';
import { Heart, Target, Award, Users, Compass, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every child deserves understanding, patience, and unconditional support.',
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'We tailor our methods to each child\'s unique needs and learning style.',
    },
    {
      icon: Award,
      title: 'Excellence in Education',
      description: 'Professional, qualified educators committed to the highest standards.',
    },
    {
      icon: Users,
      title: 'Family Partnership',
      description: 'We work collaboratively with families to achieve the best outcomes.',
    },
  ];

  const team = [
    {
      name: 'Emily Richardson',
      role: 'Founder & Lead Educator',
      bio: 'With over 15 years in special education, Emily founded Marley\'s Whisper to create a more compassionate approach to supporting children facing educational challenges.',
      image: 'https://images.unsplash.com/photo-1758612898464-06a3fec97767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHN1cHBvcnQlMjB0ZWFjaGVyJTIwY2hpbGR8ZW58MXx8fHwxNzU5NzM2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'James Mitchell',
      role: 'Educational Psychologist',
      bio: 'James specializes in behavioral support and works closely with families to understand and address the root causes of educational challenges.',
      image: 'https://images.unsplash.com/photo-1758612898464-06a3fec97767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHN1cHBvcnQlMjB0ZWFjaGVyJTIwY2hpbGR8ZW58MXx8fHwxNzU5NzM2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Davies',
      role: 'Home Learning Specialist',
      bio: 'Sarah creates engaging, creative learning experiences that help children discover the joy of learning in comfortable, safe environments.',
      image: 'https://images.unsplash.com/photo-1758612898464-06a3fec97767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHN1cHBvcnQlMjB0ZWFjaGVyJTIwY2hpbGR8ZW58MXx8fHwxNzU5NzM2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

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
              <Compass className="w-4 h-4" />
              <span className="text-sm">Our Story</span>
            </div>
            <h1 className="mb-6">About Marley's Whisper</h1>
            <p className="text-lg text-muted-foreground">
              Founded on the belief that every child deserves the opportunity to thrive, Marley's Whisper 
              provides compassionate, personalized educational support for children facing behavioral challenges 
              or exclusion risks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             <div className="rounded-2xl overflow-hidden shadow-xl bg-blue-100 flex items-center justify-center">
  <ImageWithFallback
    src="https://primary.jwwb.nl/public/q/q/a/temp-zzkgwqtlybhvpxejtysn/img_0279-high.jpg?enable-io=true&enable=upscale&crop=926%2C1389%2Cx216%2Cy0%2Csafe&width=310&height=465"
    alt="Peaceful nature scene representing calm learning environment"
    className="w-full h-[500px] bject-contain scale-100"
  />
</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">The Marley's Whisper Story</span>
              </div>
              
              <h2>Where It All Began</h2>
              
              <p className="text-muted-foreground">
                Marley's Whisper was founded by Emily Richardson, an experienced educator who witnessed too many 
                children being failed by traditional educational systems. After years of working in mainstream 
                schools, she realized that children facing behavioral challenges or exclusion risks needed a 
                different approach—one rooted in compassion, understanding, and personalized support.
              </p>
              
              <p className="text-muted-foreground">
                The name "Marley's Whisper" pays tribute to Emily's beloved therapy dog, Marley, whose gentle 
                presence helped countless children feel safe, calm, and ready to learn. Like Marley's soft whisper, 
                our approach is gentle yet powerful, meeting children exactly where they are.
              </p>
              
              <p className="text-muted-foreground">
                Today, we've grown into a team of dedicated professionals, all united by the belief that every 
                child deserves the chance to discover their potential in a supportive, nurturing environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide compassionate, personalized educational support that helps children overcome 
                    behavioral challenges and exclusion risks, empowering them to rediscover their love for 
                    learning and reach their full potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent-foreground flex items-center justify-center mb-6">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h3 className="mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where every child, regardless of their challenges, has access to educational support 
                    that nurtures their unique strengths, builds their confidence, and sets them on a path to 
                    lifelong learning and success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to supporting children and families.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to helping every child succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1">{member.name}</h3>
                      <p className="text-sm text-primary mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
