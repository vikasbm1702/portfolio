import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSkills = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 pt-16">
      <div className="container-max section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Vikas B M</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Computer Science Student & Full Stack Developer
            </p>

            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies.
              Currently pursuing Bachelor of Engineering in Computer Science at Siddaganga Institute of Technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToSkills}
              className="btn-primary"
            >
              View My Skills
              <ArrowDown size={20} />
            </button>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Get In Touch
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <a
              href="mailto:vikasbm.1si22cs199@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:9845251824"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>

            <a
              href="https://linkedin.com/in/vikas-bm-014902300"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://github.com/vikasbm1702"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
