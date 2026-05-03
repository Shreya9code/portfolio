"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Download,
  ExternalLink,
  Award,
  Trophy,
  FileText,
  GraduationCap,
} from "lucide-react";

// Certifications + Hackathons + Academic Records
const achievements = [
  // CERTIFICATIONS 
  {
    type: "certification",
    title: "Machine Learning - NPTEL",
    issuer: "IIT Madras",
    date: "2026",
    description:
      "Comprehensive course covering supervised/unsupervised learning, neural networks, and deep learning fundamentals.",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
    link: "https://nptel.ac.in/noc/certificate", // Verification link
    icon: <Award className="w-5 h-5 text-indigo-400" />,
  },
  {
    type: "certification",
    title: "Neural Networks for Computer Vision & NLP - NPTEL",
    issuer: "IIT Madras",
    date: "2026",
    description:
      "Advanced course on CNNs, RNNs, transformers, and applications in vision and language tasks.",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
    link: "https://nptel.ac.in",
    icon: <Award className="w-5 h-5 text-indigo-400" />,
  },
  {
    type: "certification",
    title: "Introduction to LLMs - NPTEL",
    issuer: "IIT Delhi",
    date: "2026",
    description:
      "Foundational course on Large Language Models, transformers, prompt engineering, and RAG architectures.",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
    icon: <Award className="w-5 h-5 text-indigo-400" />,
  },
  {
    type: "certification",
    title: "Summer Analytics 2024",
    issuer: "Consulting & Analytics Club, IIT Guwahati",
    date: "2024",
    description:
      "6-week intensive program on Data Science, ML algorithms, and real-world case studies.",
    driveLink:
      "https://drive.google.com/file/d/YOUR_IITG_CERT_ID/view?usp=sharing",
    icon: <Award className="w-5 h-5 text-indigo-400" />,
  },

  // HACKATHONS & PARTICIPATIONS 
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
  },{
    type: "hackathon",
    title: "Smart India Hackathon (SIH) 2025 - Nominee",
    issuer: "Ministry of Education, Govt. of India",
    date: "2025",
    description:
      "Nominated for national-level problem statement. Developed prototype for AI-powered Bharatnatyam dance platform.",
    driveLink:
      "https://drive.google.com/file/d/1c-41K_9XkjncvVLVt1FfYYVRNZNYTVfn/view?usp=drivesdk",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
  {
    type: "hackathon",
    title: "IEM-DIVERSION 2K25 - Participant",
    issuer: "IEEE Student Branch, IEM Kolkata",
    date: "2025",
    description:
      "Inter-college hackathon focused on innovative tech solutions. Collaborated on AI-driven social impact project.",
    driveLink:
      "https://drive.google.com/file/d/1yS8xXUsp0GqVs7eHCmA1rWffCrHXU9L9/view",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },{
    type: "hackathon",
    title: "HackHeritage 2025 - Participant",
    issuer: "Heritage Institute of Technology",
    date: "2025",
    description:"College-level hackathon promoting innovation and entrepreneurship among students.",
    driveLink:
      "https://drive.google.com/file/d/1tmtZ9RjJ9L-7yF44WrMt_iifafbwtMsA/view?usp=drivesdk",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
  {
    type: "hackathon",
    title: "HexaFalls 2025 - Participant",
    issuer: "JIS University",
    date: "2025",
    description:
      "University-level hackathon exploring emerging technologies and collaborative problem-solving.",
    driveLink:
      "https://drive.google.com/file/d/188CrhHLsjvNGh66pSg0kntwIWZ3bYAFs/view?usp=drivesdk",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
  {
    type: "hackathon",
    title: "HackOdisha 5.0 - Participant",
    issuer: "HackOdisha",
    date: "2025",
    description:
      "State-level hackathon focused on building scalable solutions for real-world challenges.",
    driveLink:
      "https://drive.google.com/file/d/10XHYmnfZz9QtQFzQptmsijuXPZnQJnwb/view",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
  

  // ACADEMIC RECORDS 
  {
    type: "academic",
    title: "BTech Semester Grade Cards",
    issuer: "Heritage Institute of Technology",
    date: "2023-Present",
    description:
      "Academic transcripts showing consistent performance with current CGPA: 9.6/10.0 in Computer Science & Engineering.",
    file: "/certifications/grade-cards.pdf",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  },
  {
    type: "academic",
    title: "Class X (ICSE) & Class XII (ISC) Mark Sheets",
    issuer: "Council for the Indian School Certificate Examinations (CISCE)",
    date: "2020 • 2022",
    description:
      "Scored 96% in both ICSE (Class X) and ISC (Class XII) board examinations with distinction in Computer Science, Physics, and Mathematics.",
    driveLink:
      "https://drive.google.com/file/d/1qmfHIzWbIwCHK9jpP8R9pmAenEfXJ4jf/view?usp=sharing",
    icon: <FileText className="w-5 h-5 text-emerald-400" />,
  },
];

// Filter by type
const getItemsByType = (type: string) =>
  achievements.filter((item) => item.type === type);

export default function Certifications() {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-muted">Credentials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Recognitions, courses, and academic records that validate my
            expertise in AI/ML and software development
          </p>
        </motion.div>

        {/* Section Filters/Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "certification", "hackathon", "academic"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors capitalize"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={`${item.type}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="glass-card p-6 hover-lift h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <span className="text-xs uppercase tracking-wider text-muted font-medium">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {item.issuer} • {item.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {/* Local file download */}
                  {item.file && (
                    <a
  href={item.file}
  download="Shreya_Denre.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
>
  <Download className="w-4 h-4" />
  Download
</a>
                  )}

                  {/* Google Drive / External link */}
                  {item.driveLink && (
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Drive
                    </a>
                  )}

                  {/* Verification link (for NPTEL etc.) */}
                  {item.link && !item.driveLink && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
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

        {/* Note about Google Drive */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted mt-12"
        >🔐 Certificates on Google Drive are set to "Anyone with the link can view". If a link doesn't work, please{" "}
          <a
            href="mailto:shreyadenre27@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            contact me
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
