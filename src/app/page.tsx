import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About /> 
      <Skills />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}