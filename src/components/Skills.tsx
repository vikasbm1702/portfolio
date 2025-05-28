import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Terminal, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "MongoDB"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Node.js", "Express", "React.js", "HTML", "CSS", "JavaScript"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["VS Code", "GitHub"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Other Skills",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Unix and Shell", "Software Testing"],
      color: "bg-red-100 text-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Skills Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I have a strong foundation in <strong>computer science fundamentals</strong> including data structures,
              algorithms, and database management. My web development skills span both <strong>frontend</strong> (React.js, HTML, CSS, JavaScript)
              and <strong>backend</strong> (Node.js, Express) technologies. I'm proficient in working with databases like
              <strong> SQL and MongoDB</strong>, and I'm comfortable with development tools like VS Code and version control with GitHub.
              Additionally, I have experience with <strong>Unix/Shell scripting</strong> and <strong>software testing</strong> methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
