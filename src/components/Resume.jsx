import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 border border-transparent dark:border-slate-800 text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative subtle element */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-200 text-xs font-semibold">
              <FiFileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Want to know more about me?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Download my resume to learn more about my skills, projects and experience.
            </p>
          </div>

          <div className="z-10 w-full md:w-auto shrink-0">
            <a
              href={personalInfo.resumePath}
              download="Varid_Sharma_Resume.pdf"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-md transition-all hover:scale-105"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
