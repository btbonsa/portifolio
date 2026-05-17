import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'btbonsa@gmail.com', href: 'mailto:btbonsa@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+251 970742748', href: 'tel:+251970742748' },
    { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl bg-accent/50 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm placeholder:text-muted-foreground/60";

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Let's talk</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="section-divider" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-5 glass-card rounded-2xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={inputClass}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={inputClass}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full px-8 py-3.5 text-sm flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
