import { skillCategories } from "@/config/projects";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-primary font-mono mr-2">03.</span>
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Here are the technologies I work with regularly. I'm always exploring 
            new tools and keeping up with the evolving backend ecosystem.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                className="p-6 bg-card rounded-xl border border-border card-hover"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-mono text-primary text-sm mb-4 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill} 
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
