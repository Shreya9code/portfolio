import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import FeaturedCertifications from './sections/FeaturedCertifications.tsx';
import Experience from './sections/Experience';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About /> 
      <Experience/>
      <Skills />
      <FeaturedProjects />
      <FeaturedCertifications />
      <Contact />
    </main>
  );
}