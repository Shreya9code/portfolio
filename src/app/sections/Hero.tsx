'use client';

import { motion } from 'framer-motion';
import { Globe, Link, X, Mail, ChevronDown, Code, Terminal, FileCode } from 'lucide-react';
import { LeetCodeIcon, CodeChefIcon, StackOverflowIcon, HackerRankIcon, GFGIcon } from '@/components/icons/PlatformIcons';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Shreya9code',
    icon: <Globe className="w-5 h-5" />,
    label: 'GitHub Profile'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/shreya-denre-b2ba06279',
    icon: <Link className="w-5 h-5" />,
    label: 'LinkedIn Profile'
  },
  {
    name: 'X/Twitter',
    href: 'https://x.com/SD8349296623209',
    icon: <X className="w-5 h-5" />,
    label: 'X Profile'
  },
  {
    name: 'Email',
    href: 'mailto:shreyadenre27@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    label: 'Send Email',
    isEmail: true
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Shreya_Denre/',
    icon: <LeetCodeIcon className="w-5 h-5" />,
    label: 'LeetCode Profile'
  },
  {
  name: 'GeeksforGeeks',
  href: 'https://www.geeksforgeeks.org/profile/shreyadenre',
  icon: <GFGIcon className="w-5 h-5" />,
  label: 'GFG Profile'
},
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/shreya9code',
    icon: <CodeChefIcon className="w-5 h-5" />,
    label: 'CodeChef Profile'
  },
  {
    name: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/27139395/shreya-denre',
    icon: <StackOverflowIcon className="w-5 h-5" />,
    label: 'Stack Overflow Profile'
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 pointer-events-none" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Shreya Denre
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-6 font-light">
            Full Stack Developer & Gen AI Enthusiast
          </p>
          
          <p className="text-base text-secondary mb-8 max-w-lg leading-relaxed">
            3rd Year BTech CSE student passionate about building intelligent systems. 
            I create seamless digital experiences by combining modern web technologies 
            with cutting-edge AI/ML solutions.
          </p>

          {/* Social Links - Scrollable on mobile */}
          <div className="mb-12">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target={link.isEmail ? undefined : '_blank'}
                  rel={link.isEmail ? undefined : 'noopener noreferrer'}
                  className="flex-shrink-0 p-3 border border-border rounded-lg hover:bg-card-hover hover:border-primary/50 transition-all duration-200 group"
                  title={link.label}
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
            {/* Hint for scrollable links on mobile */}
            <p className="text-xs text-muted mt-2 md:hidden text-center">
              ← Swipe to see more links →
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">3+</span> Years Experience
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">20+</span> Projects
            </div>
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">Open to Work</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image - Blob Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blob-shape blur-2xl"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full blob-shape overflow-hidden border border-border bg-card">
              <img
                src="/SD.jpeg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}