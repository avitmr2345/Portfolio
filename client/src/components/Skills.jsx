import { Palette, Server, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="h-10 w-10 text-accent" />,
      skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      icon: <Server className="h-10 w-10 text-[hsl(142,76%,36%)]" />,
      skills: ["Node.js", "Express.js", "JWT", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="h-10 w-10 text-yellow-500" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "DevTools",
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use <br></br> to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-secondary rounded-xl p-6 card-hover">
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold mt-4">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="tech-badge bg-muted px-3 py-2 rounded-lg text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
