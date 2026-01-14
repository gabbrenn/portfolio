import { personalInfo } from "@/config/projects";
import { Code2, Server, Database, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building RESTful APIs and server-side logic",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing efficient MySQL & PostgreSQL schemas",
    },
    {
      icon: Code2,
      title: "Mobile Development",
      description: "React Native and Flutter for cross-platform apps",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Optimizing performance and system efficiency",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-primary font-mono mr-2">01.</span>
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed mb-6"
                variants={staggerItem}
              >
                {personalInfo.bio}
              </motion.p>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed mb-6"
                variants={staggerItem}
              >
                I specialize in developing and optimizing back-end components for web applications, 
                building RESTful APIs, and ensuring seamless database integration. I believe in 
                writing clean, efficient code that scales.
              </motion.p>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItem}
              >
                My experience spans from software engineering internships to hands-on 
                backend specialization at ALX Africa, where I honed my skills in Python, 
                Django, Flask, Java, and PHP.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="p-4 bg-background rounded-lg border border-border card-hover"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
