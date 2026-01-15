import { personalInfo } from "@/config/projects";
import { ArrowDown, FileText, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `> Hello, I'm ${personalInfo.name}`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style intro */}
          <motion.div 
            className="mb-8 p-4 bg-card rounded-lg border border-border font-mono text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 text-muted-foreground text-xs">terminal</span>
            </div>
            <div className="text-foreground">
              <span className="text-primary">{displayedText}</span>
              <span className="terminal-cursor">▌</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{personalInfo.title}</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location & Contact */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8 text-muted-foreground font-mono text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>📍 {personalInfo.location}</span>
            {personalInfo.phone && (
              <a href="https://wa.me/250786077754" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button size="lg" className="gap-2 glow-primary" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.7 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
