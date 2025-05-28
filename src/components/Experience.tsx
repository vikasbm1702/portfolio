import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const hackathons = [
    {
      name: "National Level Hackathon at RRIT, Bangalore",
      type: "Hackathon",
      description: "Participated in a prestigious national-level hackathon, collaborating with talented developers to solve real-world problems.",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "24-hour Hackathon at AIT, Chikmagalur",
      type: "Hackathon",
      description: "Competed in an intensive 24-hour hackathon, demonstrating rapid prototyping and problem-solving skills under time constraints.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Argonyx'24",
      type: "Competition",
      description: "Participated in Argonyx'24, showcasing technical skills and innovative thinking in a competitive environment.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const certifications = [
    {
      name: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      description: "Comprehensive certification covering fundamental data structures and algorithmic problem-solving techniques.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through hackathons, competitions, and continuous learning experiences
            that have shaped my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hackathons & Competitions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-primary-600" />
              Hackathons & Competitions
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {hackathons.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${event.color}`}>
                      {event.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {event.name}
                        </h4>
                      </div>

                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-3">
                        {event.type}
                      </span>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-primary-600" />
              Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${cert.color}`}>
                      {cert.icon}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                        {cert.name}
                      </h4>

                      <p className="text-primary-600 font-medium text-sm mb-3">
                        Issued by {cert.issuer}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm committed to staying updated with the latest technologies and best practices
                in software development. Through hackathons, online courses, and hands-on projects,
                I continuously expand my skill set and problem-solving capabilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
