import { personalInfo } from "@/config/projects";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            Built by <span className="text-primary">{personalInfo.name}</span>
          </p>
          <p className="font-mono">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
