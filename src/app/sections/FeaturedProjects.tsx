'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Only show these 3 featured projects
const featuredProjects = [
  {
    title: 'CureConnect',
    description: 'AI-powered healthcare platform with real-time ambulance booking, doctor appointments, and AI-driven prescription analysis.',
    tech: ['MERN', 'Python', 'Flask', 'Gemini API', 'OpenStreetMap'],
    github: 'https://github.com/Shreya9code/CureConnect',
    live: 'cure-connect-ois6i208d-shreya-denres-projects.vercel.app',
    featured: true
  },
  {
    title: 'NrityaLens',
    description: 'AI-powered Bharatanatyam learning platform with CNN-based mudra detection system trained on 30k+ dataset.',
    tech: ['MERN', 'Python', 'FastAPI', 'CNN', 'LangGraph'],
    github: 'https://github.com/Shreya9code/SIH_2025',
    live: 'https://nrityalens.onrender.com',
    featured: true
  },
  {
    title: 'Nexus.ai',
    description: 'AI career platform with event-driven multi-agent workflows for resume analysis and job matching.',
    tech: ['Next.js', 'Clerk Auth', 'NeonDB', 'Inngest', 'Tailwind'],
    github: 'https://github.com/Shreya9code/HexaFalls_Nexus.ai',
    demo: 'https://youtu.be/G8JZ4gADrR4',
    featured: true
  }
];

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development and AI/ML
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 hover-lift h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects">
            <Button 
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg border border-white/20 hover:bg-white/10 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}