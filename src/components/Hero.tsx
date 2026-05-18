import { motion } from 'motion/react';
import { Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="text-foreground">Hello, I'm</span>
          <br />
          <span className="gradient-text">Bonsa Tujo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl text-muted-foreground font-light mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about crafting elegant solutions to complex problems.
          Specializing in building exceptional digital experiences with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-3.5 text-sm font-semibold"
          >
            Get In Touch
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 text-sm font-semibold rounded-xl border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/60 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { href: 'https://github.com/btbonsa', icon: <FaGithub size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/bonsa-tujo-640069347', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:btbonsa@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl glass-card hover:scale-110 hover:border-primary/40 transition-all duration-300 text-foreground/70 hover:text-primary"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-foreground/40 hover:text-primary transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
