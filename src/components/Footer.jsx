import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800/80 text-white py-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-slate-400 font-medium">
            Full Stack Web Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <MdEmail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-medium text-center md:text-right">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
