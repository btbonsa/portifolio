import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import etn from '../assets/etn.png';
import hrpay from '../assets/HRpay.png';
import jar from '../assets/jar.png';
import etnChatboat from '../assets/etn-ai-assistant.png';

export function Projects() {
  const { ref, inView } = useInView();

  const projects = [
    {
      title: 'Ethiopian Talent Network',
      description: 'An AI-powered platform that connects Ethiopian professionals with opportunities. It offers personalized job matching, skill development resources, and a vibrant community to empower Ethiopian talent.',
      tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Python', 'FastAPI'],
      image: etn,
      github: 'https://github.com/ethiopian-talent-network/fullINtegratedETN.git',
      demo: 'https://etn-front-ba74-git-main-btbonsas-projects.vercel.app/',
    },
    {
      title: 'jar ordering app',
      description: 'A mobile application for ordering water jars, connecting customers with suppliers for efficient delivery management and integrated with m-pesa payments.',
      tags: ['React native', 'Express.js', 'Tailwind CSS' , 'MySQL'],
      image: jar,
      github: 'https://github.com/btbonsa/jarOrdering-app.git',
      demo: 'https://project2-demo.com',
    },
    {
      title: 'HRpay App',
      description: 'Mobile application companion for the HRpay system, providing students with a convenient way to manage and pay their university fines on the go.',
      tags: ['React Native', 'Express.js', 'MySQL'],
      image: hrpay,
      github: 'https://github.com/btbonsa/HRpay-app.git',
      demo: 'https://project3-demo.com',
    },
    {
      title: 'ETN-AI assistant',
      description: 'An AI-powered assistant for the Ethiopian Talent Network, providing personalized recommendations and support to users.',
      tags: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI'],
      image: etnChatboat,
      gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
      github: 'https://github.com/btbonsa/ETN-AI-Assistant.git',
      demo: 'https://vercel.com/btbonsas-projects/etn-ai-assistant/CboLrR1sKcbZGYq1WtWvzYZMrbqa',
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
              <div className="h-48 overflow-hidden relative bg-slate-950/10 border-b border-border/30 shadow-inner">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-6xl">🔥</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />

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
