import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, User } from 'lucide-react';

const PersonalInfo: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Siddaganga Institute of Technology, Tumkur, Karnataka",
      period: "Nov 2022 – Present",
      grade: "CGPA: 8.96/10",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Pre-University Examinations (Class 12 / PCMB)",
      institution: "Sri Sai Angels PU College, Chikmagalur, Karnataka",
      period: "May 2022",
      grade: "Percentage: 95%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Central Board of Secondary Education (Class 10 / CBSE)",
      institution: "The Summit, Chikmagalur, Karnataka",
      period: "May 2020",
      grade: "Percentage: 89%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const personalDetails = [
    {
      label: "Full Name",
      value: "Vikas B M",
      icon: <User className="w-5 h-5" />
    },
    {
      label: "Location",
      value: "Jyotinagar, Chikmagalur, Karnataka",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      label: "Current Status",
      value: "Computer Science Student",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      label: "Academic Year",
      value: "3rd Year (2022-2026)",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const coursework = [
    "Data Structures",
    "Algorithms Analysis",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming",
    "Web Technologies",
    "System Design",
    "Computer Architecture"
  ];

  return (
    <section id="personal-info" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personal <span className="gradient-text">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my educational background, personal details, and academic journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Details</h3>
              
              <div className="space-y-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-primary-600">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">{detail.label}:</span>
                      <p className="text-gray-700 font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Educational Background</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg text-primary-600">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-sm text-gray-500">{edu.period}</span>
                        <span className="text-sm font-medium text-primary-600">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
