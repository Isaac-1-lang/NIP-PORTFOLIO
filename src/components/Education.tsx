import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Trophy, Mic } from "lucide-react";

const Education = () => {
  const activities = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Ilead Program",
      description: "Developed leadership, communication, and teamwork skills through comprehensive leadership training."
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Cybersecurity Club",
      description: "Active member participating in security awareness programs and ethical hacking workshops."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Debating Club",
      description: "Enhanced public speaking and critical thinking skills through competitive debating."
    }
  ];

  const interests = [
    "Artificial Intelligence research & experiments",
    "AI agent comparisons & performance studies",
    "Building small AI prediction models",
    "Public speaking & debating",
    "Sports & teamwork activities"
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading text-center">Education & Activities</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <Card className="project-card mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Rwanda Coding Academy</CardTitle>
                    <p className="text-muted-foreground">Senior Four • 2024 – Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specializing in <span className="text-primary font-semibold">Software Development</span> and{" "}
                  <span className="text-primary font-semibold">Embedded Systems</span>.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Coursework includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Algorithms", "AI Concepts", "Web Development", "Databases", "Cybersecurity"].map((course, index) => (
                      <span key={index} className="skill-badge text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership & Activities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Leadership & Activities</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="project-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">{activity.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <Card className="project-card h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{interest}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;