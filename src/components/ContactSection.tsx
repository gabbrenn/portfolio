import { personalInfo } from "@/config/projects";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="section-heading"
            variants={staggerItem}
          >
            <span className="text-primary font-mono mr-2">06.</span>
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-8"
            variants={staggerItem}
          >
            I'm currently looking for full-stack and backend developer opportunities. Whether you 
            have a question, want to discuss a project, or just want to say hi, 
            my inbox is always open!
          </motion.p>

          <motion.div variants={staggerItem}>
            <Button size="lg" className="gap-2 glow-primary mb-12" asChild>
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
                Say Hello
              </motion.a>
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-6"
            variants={staggerItem}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </a>
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </a>
            )}
          </motion.div>
          
          <motion.div 
            className="flex justify-center text-muted-foreground mb-8"
            variants={staggerItem}
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center gap-6"
            variants={staggerItem}
          >
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
