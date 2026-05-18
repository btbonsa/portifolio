import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Skills() {
  const { ref, inView } = useInView();

  const skillCategories = [
    {
      category: 'Frontend',
      emoji: '🎨',
      skills: [
        { name: 'React', level: 90 },
        {name: 'React Native' , level:90},
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      emoji: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MySql', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      category: 'Tools & Others',
      emoji: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Agile', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What I know</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-400 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.15 + skillIndex * 0.08,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
