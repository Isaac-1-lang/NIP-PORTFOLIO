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
      technologies: ["Nextjs", "Java", "PostgreSQL", "Stripe API"],
      status: "In Progress",
      links: {
        github: "https://github.com/Isaac-1-lang/Ecommerce_Services",
        demo: "https://ecommerce-services111.vercel.app/"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-based Waste Classifier Model",
      description: "Designed to help people know how to differentiate different kinds of wastes namely biodegradable,non-biodegradable and about recyclability.",
      technologies: ["Python", "Pytorch", "React Native", "Scikit-learn"],
      status: "In Progress",
      links: {
        github: "https://github.com/Isaac-1-lang/Waste_Classifier_Modal",
        demo: ""
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ngwino",
      description: "It is an app which helps people how took loans to pay them without taking much risks",
      technologies: ["Java Script", "Django", "CSS", "HTML"],
      status: "In progress",
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
      status: "In Progrss",
      links: {
        github: "https://github.com/Isaac-1-lang/NIP-PORTFOLIO",
        demo: "https://nip-portfolio.vercel.app/"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "GreenIQ",
      description: "It is a cross platform mobile app which helps citizens to know how to use products in environment-friendly way and how to dispose wastes in an environmental way.",
      technologies: ["Python", "React Native", "HTML/CSS", "Mongodb"],
      status: "In Progress",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "GreenStack",
      description: "It is an ecommerce platform which is opensource to all shopkeepers to manage their products at any scale.",
      technologies: ["Tailwindcss", "Node.js", "Mongodb", "ReactJs"],
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Ciphera",
      description: "It is a web based extension which helps to prevent real time exposition of sensitive data to the AI agents used in the Web.",
      technologies: ["Reactjs", "Express.js", "MongoDB", "Chart.js"],
      status: "In progress",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Harvest Prediction AI",
      description: "This is a web based modal which can help farmers to predict the future harvestes based on the past results for good preparation.",
      technologies: ["Python", "Keras", "Weather API", "Matplotlib","Tensorflow"],
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