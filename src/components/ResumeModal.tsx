import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, ExternalLink, User } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const keyProjects = [
  {
    title: "AgriHub",
    description: "Award-winning agritech PWA",
    tags: ["PWA", "React", "Winner"]
  },
  {
    title: "GramaSuraksha", 
    description: "Smart village super app",
    tags: ["PWA", "Rural Tech"]
  },
  {
    title: "SkillGrid",
    description: "Skill gap visualization platform",
    tags: ["EdTech", "Data Viz"]
  }
];

const technicalSkills = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "Express",
  "MongoDB", "Machine Learning", "PWA", "Git", "Figma", "Java", "C", "HTML/CSS"
];

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-6 mb-4">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src="/hemanth-photo.png" 
                  alt="Hemanth Raju N" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <User className="h-12 w-12 text-primary/60 fallback-icon" style={{ display: 'none' }} />
              </div>
            </div>
            
            {/* Title */}
            <div className="flex-1">
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hemanth Raju N — Resume
              </DialogTitle>
              <p className="text-muted-foreground mt-1">AI & Data Science Engineer</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Quick Highlights */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">BE in AI & Data Science (3rd Year)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CGPA</p>
                <p className="font-medium">9.55 / 10.0</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Specialization</p>
                <p className="font-medium">AI, Web Development, PWAs</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">Available for Internships</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Projects</h3>
            <div className="grid gap-4">
              {keyProjects.map((project) => (
                <div key={project.title} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{project.title}</h4>
                    <div className="flex gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2 text-sm">
              <li>🏆 SAP Hackfest 2025 Winner (Regional) - AgriHub Project</li>
              <li>📚 Multiple Infosys Springboard Certifications</li>
              <li>🎯 Consistent Academic Excellence (9.55 CGPA)</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a href="https://www.linkedin.com/in/hemanth-raju-n" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
