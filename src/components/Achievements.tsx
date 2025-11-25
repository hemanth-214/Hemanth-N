import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award, Users } from "lucide-react";

const achievements = [
  {
    title: "SAP Hackfest 2025 Winner",
    description: "Won 1st place in regional SAP Hackfest with AgriHub - an innovative agritech solution",
    icon: Trophy,
    color: "text-yellow-500",
    featured: true
  },
  {
    title: "Infosys Springboard Certifications",
    description: "Completed multiple technical certifications in programming and development",
    icon: Award,
    color: "text-blue-500",
    featured: false
  },
  {
    title: "College Activities",
    description: "Active participant in technical events, hackathons, and collaborative projects",
    icon: Users,
    color: "text-green-500",
    featured: false
  }
];

const certifications = [
  "Python Programming",
  "Front-end Development", 
  "Java Programming",
  "Machine Learning Fundamentals",
  "Computer Networks",
  "Data Structures & Algorithms"
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that reflect dedication to excellence and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className={`hover-lift ${achievement.featured ? 'border-primary/50 neon-glow' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${achievement.color} mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
