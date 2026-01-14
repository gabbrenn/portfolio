import { Certificate } from "@/config/projects";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={() => setIsOpen(true)}
      >
        {/* Certificate Image */}
        <div className="aspect-[16/11] w-full overflow-hidden bg-muted/30 relative">
          {!imageError ? (
            <img
              src={certificate.imageUrl}
              alt={certificate.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
              <Award className="w-16 h-16 mb-3 text-primary" />
              <span className="text-sm font-mono">Certificate Image</span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-sm text-foreground font-medium px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full">
              Click to view full certificate
            </span>
          </div>
        </div>

        {/* Certificate Info */}
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-lg text-foreground mb-1">{certificate.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{certificate.issuer}</p>
              {certificate.date && (
                <div className="flex items-center gap-1 text-xs text-primary font-mono">
                  <Calendar className="w-3 h-3" />
                  {certificate.date}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">{certificate.name} Certificate</DialogTitle>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Certificate Image */}
            <div className="w-full max-h-[75vh] overflow-auto">
              {!imageError ? (
                <img
                  src={certificate.imageUrl}
                  alt={certificate.name}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full aspect-[16/11] flex flex-col items-center justify-center text-muted-foreground bg-muted/30">
                  <Award className="w-24 h-24 mb-4 text-primary" />
                  <span className="text-lg font-mono">Certificate Image</span>
                </div>
              )}
            </div>
            
            {/* Certificate Details */}
            <div className="p-6 border-t border-border">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-xl font-bold text-foreground">{certificate.name}</h2>
                  <p className="text-muted-foreground">Issued by {certificate.issuer}</p>
                  {certificate.date && (
                    <p className="text-sm text-primary font-mono mt-1">{certificate.date}</p>
                  )}
                </div>
                {certificate.verifyUrl && certificate.verifyUrl !== "#" && (
                  <Button variant="outline" className="gap-2" asChild>
                    <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateCard;
