import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Brain, Shield, User, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Platform",
      description: "Built a comprehensive product catalog with color/size variants, user authentication, and shopping cart functionality. Features include product search, filtering, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-based Prediction Model",
      description: "Designed and implemented a machine learning model for data-based predictions. Includes data preprocessing, model training, and performance evaluation with visualization dashboard.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      status: "In Progress",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Awareness App",
      description: "Educational mobile application promoting safe online practices for students. Features interactive quizzes, security tips, and real-time threat awareness updates.",
      technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing skills, projects, and professional experience. Built with modern web technologies and optimized for performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Study Assistant",
      description: "AI-powered study companion that helps students organize notes, create flashcards, and track learning progress with personalized recommendations.",
      technologies: ["Python", "OpenAI API", "React", "SQLite"],
      status: "In Progress",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Password Manager",
      description: "Secure password management application with encryption, biometric authentication, and cross-platform synchronization for personal and team use.",
      technologies: ["Electron", "Node.js", "AES Encryption", "SQLite"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Snippet Manager",
      description: "Developer tool for organizing, searching, and sharing code snippets with syntax highlighting, tags, and team collaboration features.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Prism.js"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Weather Prediction AI",
      description: "Machine learning model that predicts local weather patterns using historical data and real-time meteorological inputs with 85% accuracy.",
      technologies: ["Python", "Keras", "Weather API", "Matplotlib"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Student Portal System",
      description: "Comprehensive school management system for students to access grades, assignments, schedules, and communicate with teachers and peers.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      status: "In Progress",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Network Security Scanner",
      description: "Automated network vulnerability scanner that identifies security weaknesses and provides detailed reports with remediation suggestions.",
      technologies: ["Python", "Nmap", "Scapy", "Django"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary tech-transition">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;