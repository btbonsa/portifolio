import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: 'https://github.com/btbonsa', icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:btbonsa@gmail.com', icon: <Mail className="w-[18px] h-[18px]" />, label: 'Email' },
  ];

  return (
    <footer className="relative py-10 px-4 sm:px-6 lg:px-8 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-bold gradient-text">&lt;Portfolio /&gt;</p>

          <div className="flex items-center gap-3">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl glass-card hover:scale-110 hover:border-primary/40 hover:text-primary transition-all duration-300 text-foreground/60"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            <span>© {currentYear} Your Name. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
