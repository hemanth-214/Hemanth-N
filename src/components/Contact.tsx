import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, Github, Linkedin, Phone, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitContact = useMutation(api.contacts.submitContact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContact(formData);
      
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:hemanthraju214@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent! Opening your email client...");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full neon-glow"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow developers and tech enthusiasts.
                </p>
                
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/hemanth-214" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      github.com/hemanth-214
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.linkedin.com/in/hemanth-raju-n" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      linkedin.com/in/hemanth-raju-n
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setShowPhone(!showPhone)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {showPhone ? "+91 831 022 4766" : "Click to reveal phone"}
                    {showPhone ? <EyeOff className="ml-auto h-4 w-4" /> : <Eye className="ml-auto h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 hover-lift">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">9.55</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
