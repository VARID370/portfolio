import React from 'react';
import { educationData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineCalendar, HiOutlineAcademicCap } from 'react-icons/hi';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mt-3"
          ></motion.div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Academic background and engineering studies.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-2xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-blue-600 dark:bg-blue-500"></div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                  <FaGraduationCap className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200/60 dark:border-slate-700/60">
                      <HiOutlineCalendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      {edu.duration}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 rounded-md">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                    <HiOutlineAcademicCap className="w-5 h-5" />
                    {edu.field}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 font-medium text-base sm:text-lg">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
