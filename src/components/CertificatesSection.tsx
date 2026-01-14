import { certificates } from "@/config/projects";
import CertificateCard from "./CertificateCard";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 bg-card/30">
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
              <Award className="w-4 h-4" />
              Credentials
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={staggerItem}
            >
              <span className="gradient-text">Certifications</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={staggerItem}
            >
              Professional certifications and achievements that validate my skills and expertise
            </motion.p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {certificates.map((certificate) => (
              <motion.div 
                key={certificate.id} 
                variants={staggerItem}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
