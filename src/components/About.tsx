import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Rocket, Users } from 'lucide-react';
import profileImage from '../assets/profile1.jpg';

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    { icon: Code2, title: 'Clean Code', description: 'Maintainable & scalable solutions' },
    { icon: Rocket, title: 'Performance', description: 'Optimized for speed & efficiency' },
    { icon: Users, title: 'Team Player', description: 'Collaborative & communicative' },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Who I am</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-pink-500/20 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20 group">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/75 leading-relaxed">
              I'm a passionate software developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
