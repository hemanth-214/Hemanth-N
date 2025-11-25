import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Server, Layout, Brain, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-blue-500",
    skills: ["C", "Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Web & Backend",
    icon: Server,
    color: "text-green-500",
    skills: ["Node.js", "Express", "MongoDB", "Vercel"]
  },
  {
    title: "Frontend & Mobile",
    icon: Layout,
    color: "text-purple-500",
    skills: ["React", "Jetpack Compose", "PWA", "HTML/CSS"]
  },
  {
    title: "Data & AI",
    icon: Brain,
    color: "text-orange-500",
    skills: ["Machine Learning", "Image Processing", "Data Analysis"]
  },
  {
    title: "Tools",
    icon: GitBranch,
    color: "text-pink-500",
    skills: ["Git", "GitHub", "Figma", "Agile"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern AI and web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
