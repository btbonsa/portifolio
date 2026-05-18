import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Award } from 'lucide-react';

export function Certificates() {
  const { ref, inView } = useInView();

  const certificates = [
    {
      title: 'mesod internship',
      issuer: 'Mesob',
      date: 'January 2024',
      description: 'Completed a comprehensive internship program at Mesob, gaining hands-on experience in software development in 45 days. This internship provided valuable insights into real-world applications and enhanced my technical skills.',
      icon: '🏆',
      link: 'https://res.cloudinary.com/dzqma6sfk/image/upload/v1779097898/internShip_vfrpko.jpg',
    },
    {
      title: 'introduction to node.js',
      issuer: 'simpleilearn',
      date: '7th October 2025',
      description: 'Successfully completed the "Introduction to Node.js" course on SimpleLearn, acquiring foundational knowledge and practical skills in Node.js development. This certification demonstrates my commitment to continuous learning and proficiency in backend development.',
      icon: '🎓',
      link: 'https://simpli-web.app.link/e/jfCadtIOe3b',
    },
    {
      title: 'introduction to cyber security',
      issuer: 'simpleilearn',
      date: 'September 2023',
      description: 'Successfully completed the "Introduction to Cyber Security" course on SimpleLearn, acquiring foundational knowledge and practical skills in protecting digital assets. This certification demonstrates my commitment to continuous learning and proficiency in cybersecurity.',
      icon: '⭐',
      link: 'https://simpli-web.app.link/e/CDlEGQOOe3b',
    },
    {
      title: 'Certificate Name 4',
      issuer: 'Issuing Organization',
      date: 'June 2023',
      description: 'Include relevant certifications that showcase your professional development.',
      icon: '🌟',
      link: 'https://certificate-link.com',
    },
  ];

  return (
    <section id="certificates" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Achievements</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Certificates</h2>
          <div className="section-divider" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-base leading-snug">{cert.title}</h3>
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/70 transition-colors duration-200"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
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
