import { experiences, education } from "@/config/projects";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4"
              variants={staggerItem}
            >
              <Briefcase className="w-4 h-4" />
              Career Path
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={staggerItem}
            >
              <span className="gradient-text">Experience & Education</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={staggerItem}
            >
              My professional journey and academic background
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-center gap-3 mb-8"
                variants={staggerItem}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </motion.div>
              
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <motion.div 
                    key={exp.id} 
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    
                    <div className="pb-6">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold mt-2">{exp.role}</h4>
                      <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-center gap-3 mb-8"
                variants={staggerItem}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </motion.div>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <motion.div 
                    key={edu.id} 
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    
                    <div className="pb-6">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-semibold mt-2">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Languages Card */}
              <motion.div 
                className="mt-8 p-6 rounded-lg bg-card border border-border"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-4">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium">Kinyarwanda</span>
                    <span className="text-xs text-muted-foreground ml-2">Fluent</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium">English</span>
                    <span className="text-xs text-muted-foreground ml-2">Fluent</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
