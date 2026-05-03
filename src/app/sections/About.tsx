'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Globe } from 'lucide-react';
import TagCloud3D from '@/components/TagCloud3D';

const allSkills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
  'Docker', 'AWS', 'Git', 'CI/CD',
  'Generative AI', 'NLP', 'RAG', 'FastAPI'
].map(text => ({ text }));

const categories = [
  { icon: <Code2 className="w-6 h-6" />, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: <Cpu className="w-6 h-6" />, name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { icon: <Brain className="w-6 h-6" />, name: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'] },
  { icon: <Globe className="w-6 h-6" />, name: 'DevOps', items: ['Docker', 'AWS', 'Git', 'CI/CD'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Text */}
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I'm a third-year Computer Science student with a passion for building 
              intelligent systems that solve real-world problems. My journey in tech 
              started with curiosity and has evolved into a deep love for full-stack 
              development and artificial intelligence.
            </p>
            <p>
              I specialize in creating seamless web applications while exploring the 
              frontiers of Generative AI and Machine Learning. Whether it's building 
              a responsive frontend or training a neural network, I enjoy every aspect 
              of the development process.
            </p>
          </div>
          
          {/* 3D Tag Cloud */}
          <div className="flex items-center justify-center">
            <TagCloud3D 
              tags={allSkills} 
              radius={160} 
              speed={0.0015} 
            />
          </div>
        </div>

        {/* Category Cards (Optional - below the cloud) */}
        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border border-border rounded-lg bg-card hover:bg-card-hover transition-colors"
            >
              <div className="text-foreground mb-2">{category.icon}</div>
              <h3 className="font-semibold mb-2 text-sm">{category.name}</h3>
              <div className="flex flex-wrap gap-1">
                {category.items.slice(0, 3).map((item) => (
                  <span key={item} className="text-[10px] text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>*/}
      </motion.div>
    </section>
  );
}