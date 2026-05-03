'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Code2, Terminal, Palette } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'FRONTEND SYSTEMS',
    color: 'text-blue-400',
    glowColor: 'from-blue-500/20 to-cyan-500/20',
    position: 'top-left',
    skills: [
      { name: 'React / Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Three.js', level: 'intermediate' },
      { name: 'Chrome Extensions', level: 'intermediate' },
    ]
  },
  {
    id: 'backend',
    label: 'BACKEND LOGIC',
    color: 'text-red-400',
    glowColor: 'from-red-500/20 to-orange-500/20',
    position: 'top-right',
    skills: [
      { name: 'Python / FastAPI', level: 'expert' },
      { name: 'Django', level: 'intermediate' },
      { name: 'Node.js', level: 'expert' },
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Supabase', level: 'intermediate' },
      { name: 'REST API', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
    ]
  },
  {
    id: 'ml',
    label: 'MACHINE LEARNING & AUTOMATION',
    color: 'text-purple-400',
    glowColor: 'from-purple-500/20 to-pink-500/20',
    position: 'bottom-left',
    skills: [
      { name: 'LLMs / GPT', level: 'expert' },
      { name: 'LangChain', level: 'expert' },
      { name: 'RAG', level: 'intermediate' },
      { name: 'Vector DB', level: 'intermediate' },
      { name: 'AI Agents', level: 'intermediate' },
    ]
  },
  {
    id: 'design',
    label: 'DESIGN',
    color: 'text-orange-400',
    glowColor: 'from-orange-500/20 to-yellow-500/20',
    position: 'bottom-right',
    skills: [
      { name: 'Figma', level: 'expert' },
      { name: '3D Design', level: 'intermediate' },
      { name: 'Mobile-First', level: 'expert' },
      { name: 'UI/UX', level: 'expert' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main Skills Orbit Layout */}
        <div className="relative min-h-[800px] md:min-h-[700px]">
          
          {/* Center Circle - EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_-15px_rgba(255,255,255,0.1)]">
              {/* Animated glow ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
              
              {/* Brain Icon */}
              <Brain className="w-12 h-12 text-white/90 mb-3" />
              
              <span className="text-2xl md:text-3xl font-bold text-white">
                EXPERIENCE
              </span>
              <span className="text-xs text-muted mt-1 tracking-widest">
                DATABASE
              </span>
              
              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-2 left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Category Clusters */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className={`absolute ${getPositionClasses(category.position)}`}
            >
              {/* Category Label */}
              <motion.div 
                className={`text-xs font-semibold tracking-wider ${category.color} mb-4 uppercase`}
              >
                {category.label}
              </motion.div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3 max-w-xs">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default">
                      <span className="text-sm text-foreground/90 group-hover:text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Proficiency indicator dot */}
                    {skill.level === 'expert' && (
                      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${category.glowColor.split(' ')[0].replace('/20', '')} to-transparent shadow-lg`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {['Git', 'Linux', 'GraphQL', 'Redis', 'Kubernetes', 'CI/CD', 'AWS', 'GCP'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span className="text-sm text-muted hover:text-foreground transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Helper function for positioning
function getPositionClasses(position: string) {
  switch (position) {
    case 'top-left':
      return 'top-0 left-0 md:left-4';
    case 'top-right':
      return 'top-0 right-0 md:right-4';
    case 'bottom-left':
      return 'bottom-0 left-0 md:left-4 md:bottom-20';
    case 'bottom-right':
      return 'bottom-0 right-0 md:right-4 md:bottom-20';
    default:
      return '';
  }
}