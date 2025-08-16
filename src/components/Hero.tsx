import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/30 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="NIYOBYOSE Isaac Precieux"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto tech-shadow border-4 border-primary/20"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-background"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="tech-gradient">NIYOBYOSE</span>{" "}
            <span className="text-foreground">Isaac Precieux</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            AI Enthusiast & Software Developer
          </p>

          {/* Location and Contact */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Rwanda
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              isaprecieux112@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +250 798 826 507
            </div>
          </div>

          {/* Status Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              Student at Rwanda Coding Academy • 10+ Programming Languages
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground tech-shadow">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Isaac-1-lang" className="text-muted-foreground hover:text-primary tech-transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/NIYOBYOSE Isaac Precieux" className="text-muted-foreground hover:text-primary tech-transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;