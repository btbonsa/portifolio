import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  const { ref, inView } = useInView();

  const projects = [
    {
      title: 'Project Title 1',
      description: 'A brief description of your project. Explain what it does, the problem it solves, and the technologies used.',
      tags: ['React', 'TypeScript', 'Node.js'],
      emoji: '🎨',
      gradient: 'from-violet-500/20 via-purple-500/10 to-pink-500/20',
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
    },
    {
      title: 'Project Title 2',
      description: 'Another amazing project description. Highlight key features and your role in the development.',
      tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
      emoji: '🚀',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-teal-500/20',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
    },
    {
      title: 'Project Title 3',
      description: 'Describe this project and its impact. Include metrics or outcomes if possible.',
      tags: ['Python', 'FastAPI', 'Docker'],
      emoji: '⚡',
      gradient: 'from-amber-500/20 via-orange-500/10 to-red-500/20',
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.com',
    },
    {
      title: 'Project Title 4',
      description: 'Add more projects to showcase your diverse skill set and experience.',
      tags: ['Vue.js', 'Firebase', 'MongoDB'],
      emoji: '🔥',
      gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
      github: 'https://github.com/yourusername/project4',
      demo: 'https://project4-demo.com',
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">My work</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="section-divider" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-400 group"
            >
              {/* Project banner */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{project.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-border/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
