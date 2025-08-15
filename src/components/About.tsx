import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "10+ Languages",
      description: "Proficient in Python, JavaScript, Java, C++, and more"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Building prediction models and studying AI architectures"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Ilead Program graduate with strong teamwork skills"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Active Learner",
      description: "Cybersecurity Club, Debating Club member"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Profile Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Motivated and tech-driven Senior Four student at{" "}
              <span className="text-primary font-semibold">Rwanda Coding Academy</span> with 
              experience in over 10 programming languages and a strong passion for{" "}
              <span className="text-primary font-semibold">Artificial Intelligence</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Actively exploring AI concepts, building prediction models, and studying 
              AI agent architectures through projects, videos, and hands-on experimentation.
            </p>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Languages</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">English</span>
                  <Badge variant="secondary">Proficient</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kinyarwanda</span>
                  <Badge variant="secondary">Proficient</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kiswahili</span>
                  <Badge variant="outline">Basic</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">French</span>
                  <Badge variant="outline">Basic</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="project-card border-primary/10">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{highlight.icon}</div>
                  <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;