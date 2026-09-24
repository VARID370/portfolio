import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiBookOpen } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Frontend Development",
      description: "Building responsive, modern user interfaces with React, JavaScript, and Tailwind CSS."
    },
    {
      icon: <FiServer className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Backend Development",
      description: "Developing RESTful web services and backend applications with Node.js, Express, and MongoDB."
    },
    {
      icon: <FiCpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Problem Solving & AI",
      description: "Solving algorithmic problems and integrating modern AI technologies into functional apps."
    },
    {
      icon: <FiBookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Continuous Learning",
      description: "Always exploring emerging frameworks, architectural patterns, and engineering best practices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mt-3"
          ></motion.div>
        </div>

        {/* Content Card with Image & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 shadow-xl shadow-blue-500/15 group">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900 ring-2 ring-white dark:ring-slate-800 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Bio Text Column */}
            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="bg-slate-50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 p-6 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100/70 dark:bg-blue-950/80 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
