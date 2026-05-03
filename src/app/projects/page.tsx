'use client';

import { motion } from 'framer-motion';
import { Globe, ExternalLink, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'CureConnect',
    description: 'AI-powered healthcare platform with real-time ambulance booking, doctor appointments, and AI-driven prescription analysis using Gemini API.',
    image: '/projects/cureconnect.png',
    tech: ['MERN', 'Python', 'Flask', 'Gemini API', 'OpenStreetMap', 'JWT'],
    github: 'https://github.com/Shreya9code/CureConnect',
    live: 'https://cure-connect-ois6i208d-shreya-denres-projects.vercel.app',
    featured: true
  },
  {
    title: 'NrityaLens',
    description: 'AI-powered Bharatanatyam learning platform with CNN-based mudra detection system trained on 30k+ dataset and real-time assessment.',
    image: '/projects/nrityalens.png',
    tech: ['MERN', 'Python', 'FastAPI', 'CNN', 'LangGraph', 'Gemini API'],
    github: 'https://github.com/Shreya9code/SIH_2025',
    live: 'https://nrityalens.onrender.com',
    featured: true
  },
  {
    title: 'Nexus.ai',
    description: 'AI career platform with event-driven multi-agent workflows for resume analysis, job matching, and personalized learning roadmaps.',
    image: '/projects/nexus.jpg',
    tech: ['Next.js', 'Clerk Auth', 'NeonDB', 'Inngest', 'Tailwind', 'Gemini API'],
    github: 'https://github.com/Shreya9code/HexaFalls_Nexus.ai',
    demo: 'https://youtu.be/G8JZ4gADrR4',
    featured: true
  },
  {
    title: 'UrbanPulse',
    description: 'End-to-end AI-powered video analytics pipeline for traffic monitoring using detection, tracking, and segmentation models.',
    image: '/projects/urbanpulse.png',
    tech: ['Python', 'Computer Vision', 'Deep Learning', 'OpenCV', 'PyTorch'],
    github: 'https://github.com/Shreya9code/UrbanPulse',
    demo: 'https://youtu.be/dwCbJFlXqRY',
    featured: true
  },
  {
    title: 'GreenCircuit',
    description: 'AI-powered e-waste management platform connecting sellers, buyers, and recyclers with QR-based lifecycle tracking.',
    image: '/projects/greencircuit.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'OSM Maps'],
    github: 'https://github.com/Shreya9code/HackHeritage',
    demo: 'https://youtu.be/XlZOuxvjsfo',
    featured: false
  },
  {
    title: 'Auralix.ai',
    description: 'Meeting intelligence tool with speech-to-text pipeline using Whisper API and real-time Chrome extension for automated meeting capture.',
    image: '/projects/auralix.png',
    tech: ['Whisper API', 'Gemini API', 'Notion API', 'Chrome Extension', 'Python'],
    github: 'https://github.com/sahelikundu22/Auralix.ai_H4B4.0',
    demo: 'https://youtu.be/b38ItkhMtxQ',
    featured: false
  },
  {
    title: 'Finance Dashboard',
    description: 'AI-powered e-waste management platform connecting sellers, buyers, and recyclers with QR-based lifecycle tracking.',
    image: '/projects/greencircuit.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'OSM Maps'],
    github: 'https://github.com/Shreya9code/Zorvyn-finance-dashboard',
    live: 'https://finance-dashboard-olive-nine.vercel.app/',
    featured: false
  },
];

const quote = {
  main: "In the realm of code, innovation thrives.",
  subtitle: "Every line is a whisper, every function a dream. We build, we break, we create echoes of our imagination. If you wish to explore these echoes or craft new ones together, feel free to reach out.",
  highlighted: "Where ideas become intelligence, and intelligence becomes impact."
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-muted">My Projects Portfolio</span>
            <span className="text-white/60">•</span>
            <a 
              href="https://github.com/Shreya9code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-white transition-colors flex items-center gap-1"
            >
              View on GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Things I've made trying to put my mark
          </h1>
          
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            I've worked on tons of little projects over the years, but these are some of the ones 
            that I'm most proud of. If you see something that piques your interest, check it out!
          </p>
          
          <div className="flex gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              View All Projects
            </a>
            <a
              href="https://github.com/Shreya9code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/80">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
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
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <Globe className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {quote.main}
          </h2>
          
          <p className="text-muted text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            {quote.subtitle}
          </p>
          
          <div className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10">
            <p className="text-lg text-foreground">
              {quote.highlighted}
            </p>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted mb-6">
            Want to collaborate or have a project in mind?
          </p>
          <Link
            href="/#contact"
            className="px-8 py-4 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Let's Work Together
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}