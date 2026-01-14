import { projects } from "@/config/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-primary font-mono mr-2">04.</span>
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Here are some projects I've built. Each one taught me something 
            new about building reliable backend systems.
          </motion.p>

          {/* Featured Projects */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={staggerItem}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.h3 
                className="text-xl font-semibold mb-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                Other Noteworthy Projects
              </motion.h3>
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
              >
                {otherProjects.map((project, index) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <ProjectCard project={project} index={index + featuredProjects.length} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
