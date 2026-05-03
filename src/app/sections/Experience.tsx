'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, ExternalLink, Code2, Brain } from 'lucide-react';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Indian Statistical Institute (ISI), Kolkata',
    location: 'Kolkata, India',
    period: 'Jan 2026 – Mar 2026',
    type: 'Internship',
    description: 'Built an end-to-end AI-powered video analytics pipeline for traffic monitoring and congestion prediction.',
    highlights: [
      'Designed detection, tracking, and segmentation models for vehicle/pedestrian analysis',
      'Developed data processing workflows for real-time traffic flow analysis',
      'Applied predictive models to generate congestion insights and visualization dashboards',
      'Collaborated with research team on UrbanPulse project (GitHub: /Shreya9code/UrbanPulse)'
    ],
    tech: ['Python', 'OpenCV', 'PyTorch', 'Computer Vision', 'Data Analytics'],
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    link: 'https://github.com/Shreya9code/UrbanPulse'
  },
  {
    role: 'Machine Learning Intern',
    company: 'Code-X-Novas',
    location: 'Remote',
    period: 'Jul 2025 – Aug 2025',
    type: 'Internship',
    description: 'Implemented deep learning models for hyperspectral image classification with attention mechanisms.',
    highlights: [
      'Developed TopoMorph RG Convolutional Networks for enhanced spatial–spectral feature extraction',
      'Achieved 98%+ accuracy through architecture optimization and hyperparameter tuning',
      'Validated model performance using t-SNE visualization and comprehensive evaluation metrics',
      'Documented research findings and contributed to technical reports'
    ],
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'Attention Mechanisms', 'Hyperspectral Imaging'],
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    link: 'https://drive.google.com/file/d/1138fhWmxZwx0dI9Z3iVOtYsscAYOaLjH/view'
  },{
    role: 'Open Source Contributor',
    company: 'HacktoberFest 2024',
    location: 'Remote',
    period: 'June 2024 – July 2024',
    type: 'Volunteer',
    description: 'Contributed to the open-source projects by fixing bugs and improving documentation.',
    tech: ['JavaScript', 'CSS', 'Git', 'Documentation'],
    icon: <Code2 className="w-6 h-6 text-green-400" />,
    link: null
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-muted">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Hands-on experience building AI/ML solutions in research and industry settings
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-4 border-background shadow-[0_0_0_4px_rgba(99,102,241,0.3)] z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <Card className="glass-card p-6 hover-lift">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-4 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights?.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-indigo-400 mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: "More Experience Coming Soon" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm">
            More professional experiences coming soon... 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}