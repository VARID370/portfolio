import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import CertificateCard from './CertificateCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiDownload } from 'react-icons/fi';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mt-3"
          ></motion.div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Verified technical course completions, specialized credentials, and professional certifications.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              certificate={cert}
              index={index}
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              {/* Modal Header */}
              <div className="p-4 px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/80">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Issued by {selectedCert.issuer} • {selectedCert.issueDate}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Image Preview */}
              <div className="p-4 bg-slate-900 dark:bg-slate-950 flex-1 overflow-auto flex items-center justify-center min-h-[300px]">
                <img
                  src={selectedCert.previewUrl}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto object-contain rounded shadow-lg border border-slate-800"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 px-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click below to view or download official PDF document
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.certificateUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <span>Open Full PDF</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
