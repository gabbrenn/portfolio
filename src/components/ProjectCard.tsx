import { Project } from "@/config/projects";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article
      className="group relative p-6 bg-card rounded-xl border border-border card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors pr-20">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-3">
        {project.githubUrl && (
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            Code
          </a>
        </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
