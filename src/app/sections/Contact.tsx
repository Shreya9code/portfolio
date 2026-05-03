'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Send email via EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Shreya Denre',
          reply_to: formData.email
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        toast.success('Message sent successfully! I\'ll get back to you soon. 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Toast notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#111',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-muted text-lg">
            Have a project in mind? Let's create something amazing!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 text-center hover-lift">
            <Mail className="h-8 w-8 mx-auto mb-3 text-indigo-400" />
            <h3 className="font-semibold mb-1 text-foreground">Email</h3>
            <a 
              href="mailto:shreyadenre27@gmail.com"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              shreyadenre27@gmail.com
            </a>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-purple-400" />
            <h3 className="font-semibold mb-1 text-foreground">Location</h3>
            <p className="text-sm text-muted">Kolkata, India</p>
          </Card>

          <Card className="glass-card p-6 text-center hover-lift">
            <Send className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
            <h3 className="font-semibold mb-1 text-foreground">Availability</h3>
            <p className="text-sm text-muted">Open to opportunities</p>
          </Card>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name *
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder-muted"
                    placeholder="John Doe"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email *
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder-muted"
                    placeholder="john@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message *
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder-muted resize-none"
                  placeholder="Tell me about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed glow-hover transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Status message */}
              {submitStatus === 'success' && (
                <p className="text-sm text-green-400 text-center flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Thanks for reaching out! I'll respond within 24 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-400 text-center flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Card>
        </motion.div>

        {/* Alternative contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm mb-4">
            Prefer other platforms?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com/in/shreya-denre-b2ba06279"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-card-hover transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Shreya9code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-card-hover transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="mailto:shreyadenre27@gmail.com"
              className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-card-hover transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Direct Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}