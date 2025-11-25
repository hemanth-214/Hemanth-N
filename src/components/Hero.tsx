import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ResumeModal from "./ResumeModal";

const projectImages = [
  {
    title: 'GramaSuraksha',
    url: 'https://grama-suraksha-rural-super-app-rz4oast4.sites.blink.new'
  },
  {
    title: 'AgriHub',
    url: 'https://agri-hub.vercel.app'
  },
  {
    title: 'SkillGrid',
    url: 'https://skillgrid-pwa-indian-skill-ai-6x6yxzyw.sites.blink.new/'
  }
];

export default function Hero() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hemanth Raju N
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                AI & Data Science Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Building productized AI & web applications that solve real-world problems. 
                3rd-year BE student passionate about creating impactful technology.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 neon-glow">
                CGPA: 9.55
              </Badge>
              <Badge variant="outline">
                5th Semester
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="neon-glow hover-lift"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/hemanth-214" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/hemanth-raju-n" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative animate-slide-right">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={projectImages[currentProject].url}
                className="w-full h-full border-0"
                loading="lazy"
                title={projectImages[currentProject].title}
                allow="autoplay; encrypted-media"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
              
              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentProject 
                        ? 'bg-primary w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                {projectImages[currentProject].title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
}
