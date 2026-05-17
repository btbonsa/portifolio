import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="mesh-bg" />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
