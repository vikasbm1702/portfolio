import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Zap, Cloud, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Mock Interview Platform",
      description: "Developed an AI-driven mock interview platform with an intuitive UI, simulating real interview scenarios and delivering real-time feedback.",
      technologies: ["React", "Tailwind CSS", "ShadCN UI", "DrizzleORM"],
      features: [
        "Built a responsive and accessible UI with Tailwind CSS and ShadCN UI",
        "Optimized front-end performance with lazy loading and code-splitting",
        "Implemented real-time feedback system"
      ],
      date: "March 2025",
      status: "Live Demo",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      liveUrl: "https://ai-interview-pi-livid.vercel.app/dashboard",
      githubUrl: "https://github.com/vikasbm1702/Ai-interview"
    },
    {
      title: "College Timetable Generator",
      description: "Designed and enhanced a dynamic UI for an automated timetable generator, making scheduling easy for users.",
      technologies: ["React", "MongoDB", "ShadCN UI", "Tailwind CSS", "GitHub"],
      features: [
        "Used Redux Toolkit for state management",
        "Implemented drag-and-drop interface for timetable customization",
        "Focused on accessibility and responsiveness for seamless usage"
      ],
      date: "January 2025",
      status: "GitHub",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      liveUrl: null,
      githubUrl: "https://github.com/vikasbm1702/College-Timetable-Generator"
    },
    {
      title: "Serverless Image Processing System",
      description: "Developed a fully serverless image processing system using AWS Lambda and S3, ensuring high scalability and minimal infrastructure maintenance.",
      technologies: ["AWS Lambda", "S3", "API Gateway"],
      features: [
        "Configured S3 as primary storage for user-uploaded images",
        "Enabled image uploads via RESTful API Gateway endpoint",
        "Implemented secure role-based access policies"
      ],
      date: "May 2025",
      status: "Live Demo",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      liveUrl: "https://13.53.78.112",
      githubUrl: "https://github.com/vikasbm1702/serverless-image-processing-system"
    },
    {
      title: "Shopease E-commerce Platform",
      description: "A comprehensive e-commerce platform with user authentication, product management, and secure payment processing.",
      technologies: ["React", "CSS", "JWT"],
      features: [
        "User authentication and authorization with JWT",
        "Product catalog with search and filtering",
        "Shopping cart and checkout functionality",
        "Responsive design for all devices"
      ],
      date: "December 2024",
      status: "GitHub",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
      liveUrl: null,
      githubUrl: "https://github.com/vikasbm1702/shopease-ecommerceplatform"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development,
            cloud technologies, and modern web frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${project.color}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{project.date}</span>
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technologies & Actions */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center"
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full justify-center"
                    >
                      <Github size={18} />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
