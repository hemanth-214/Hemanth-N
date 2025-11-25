import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const semesterGPAs = [
  { semester: '1st', gpa: 9.4 },
  { semester: '2nd', gpa: 9.6 },
  { semester: '3rd', gpa: 9.75 },
  { semester: '4th', gpa: 9.45 }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building AI-powered solutions that make a real difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* About Text */}
          <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a 3rd-year BE student specializing in Artificial Intelligence & Data Science, 
                  currently maintaining a CGPA of 9.55. My journey in technology is driven by a 
                  passion for creating products that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in building full-stack web applications, Progressive Web Apps (PWAs), 
                  and AI-powered solutions. My experience spans from rural technology solutions like 
                  GramaSuraksha to agritech platforms like AgriHub, which won the SAP Hackfest.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Snapshot */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Academic Snapshot</h3>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary mb-2">9.55</div>
                <p className="text-muted-foreground">Current CGPA</p>
                <Badge variant="secondary" className="mt-2">
                  3rd Year, 5th Semester
                </Badge>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold mb-3">Semester Performance</h4>
                {semesterGPAs.map((sem) => (
                  <div key={sem.semester} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{sem.semester} Semester</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(sem.gpa / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-8">{sem.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
