'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Award, ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';

// Only show these 3 featured achievements on home page
const featuredAchievements = [
  {
    type: 'certification',
    title: 'Machine Learning - NPTEL',
    issuer: 'IIT Madras',
    date: '2026',
    description: 'Comprehensive course covering supervised/unsupervised learning, neural networks, and deep learning fundamentals.',
    file: '/certifications/NPTEL_ML_Certificate.pdf',
    link: 'https://nptel.ac.in/noc/certificate',
    icon: <Award className="w-5 h-5 text-indigo-400" />
  },
{
    type: "hackathon",
    title: "Hack4Bengal 4.0 - 2nd Runner-up 🏆",
    issuer: "Hack4Bengal",
    date: "2025",
    description:
      "Recognized for Auralix.ai, an AI-powered meeting intelligence tool built with Whisper API and Gemini.",
    driveLink:
      "https://www.linkedin.com/posts/shreya-denre-b2ba06279_hack4bengal-hackathonwinners-auralix-ugcPost-7343852525076234241-oS7D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEP1dtMBO_rUDePLJsFwuFpgJYFmGbC5QPk",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
  {
    type: 'academic',
    title: 'BTech CGPA: 9.6/10.0',
    issuer: 'Heritage Institute of Technology',
    date: '2023–Present',
    description: 'Consistent academic excellence in Computer Science & Engineering with strong performance in AI/ML courses.',
    driveLink: 'https://drive.google.com/file/d/YOUR_GRADECARD_ID/view?usp=sharing',
    icon: <Award className="w-5 h-5 text-cyan-400" />
  }
];

export default function FeaturedCertifications() {
  return (
    <section id="featured-certifications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Key Achievements</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A selection of certifications, awards, and academic records that highlight my journey
          </p>
        </motion.div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredAchievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 hover-lift h-full flex flex-col">
                {/* Icon + Type */}
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <span className="text-xs uppercase tracking-wider text-muted font-medium">
                    {item.type}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted mb-3">{item.issuer} • {item.date}</p>
                <p className="text-muted text-sm mb-6 flex-1 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Action Button */}
                <div className="pt-4 border-t border-border">
                  {item.file && (
                    <a
                      href={item.file}
                      download
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      View
                    </a>
                  )}
                  {item.driveLink && (
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Drive
                    </a>
                  )}
                  {item.link && !item.driveLink && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      Verify
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
          <Link href="/certifications">
            <Button 
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg border border-white/20 hover:bg-white/10 transition-all"
            >
              View All Certifications & Achievements
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}