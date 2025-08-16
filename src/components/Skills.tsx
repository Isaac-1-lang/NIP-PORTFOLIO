import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Palette, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
        "Python", "JavaScript", "Java", "C", "C++", "PHP", 
        "HTML/CSS", "SQL", "NoSQL", "React Native","Solidity"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "AI & Data Science",
      skills: [
        "Model Training", "Prediction Algorithms", "AI Agent Studies", 
        "Machine Learning", "Data Analysis"
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: [
        "GitHub", "VS Code", "Figma", "Firebase", "Node.js", 
        "React", "Gitlab", "API Integration","Android Studio","Adobe XD"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Other Skills",
      skills: [
        "Version Control", "UI/UX Design", "Cybersecurity", 
        "Teamwork", "Public Speaking", "Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="text-primary">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;