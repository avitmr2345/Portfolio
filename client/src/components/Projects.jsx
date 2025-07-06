import { Github, ExternalLink, Check, Plus } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Estate Quest",
      description:
        "A comprehensive real estate platform enabling users to buy, sell, and rent properties. Features include property search filters, user authentication, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Firebase Google authentication integration",
        "Advanced property search and filtering system",
        "Responsive design across all devices",
        "Git version control for collaboration",
      ],
      github: "https://github.com/avitmr2345/EstateQuest",
      demo: "https://estatequest.onrender.com",
    },
    {
      title: "URL Shortener",
      description:
        "A fully-functional URL shortening service with secure user authentication, efficient data storage, and reliable redirect functionality.",
      image:
        "https://internal-blog.contentstudio.io/wp-content/uploads/2023/03/Group-4-1.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Secure JWT-based user authentication",
        "Efficient MongoDB data storage and retrieval",
        "Reliable URL shortening and redirect system",
        "Privacy and data protection features",
      ],
      github: "https://github.com/avitmr2345/URL_Shortener",
      demo: "#",
    },
    {
      title: "Travel Tracker",
      description:
        "An interactive map-based application that allows users to track and mark countries they've visited, with robust backend data management and responsive design.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
      features: [
        "Interactive map interface for country selection",
        "Robust MySQL backend for travel data storage",
        "Responsive design for all device types",
        "User travel statistics and progress tracking",
      ],
      github:
        "https://github.com/avitmr2345/FullStack-React/tree/master/8. PostgreSQL/Travel Tracker",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work demonstrating full-stack development
            capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl overflow-hidden card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-[hsl(142,76%,36%)] mr-2 mt-1 h-3 w-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Github className="inline mr-2 h-4 w-4" />
                    Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="text-accent hover:text-accent/80 transition-colors duration-300"
                    >
                      <ExternalLink className="inline mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Additional Projects Placeholder */}
          <div className="bg-secondary rounded-xl p-6 card-hover border-2 border-dashed border-muted">
            <div className="text-center py-12">
              <Plus className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground">
                I'm constantly working on new projects and learning new
                technologies. Check back soon for more exciting developments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
