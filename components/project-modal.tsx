"use client";

import React from 'react';
import { Project } from '@/types';
import { X, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  labels: {
    close: string;
    viewApp: string;
    overview: string;
    features: string;
    stack: string;
    challenges: string;
    projectType: string;
    comingSoon: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, labels }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        className="bg-[#0A0A0A] border border-zinc-800 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="h-48 md:h-64 w-full relative shrink-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all z-20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">{labels.projectType}</span>
                <div className="h-px flex-1 bg-zinc-800 w-12" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-xl text-zinc-400">{project.subtitle}</p>
            </div>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors shrink-0"
              >
                {labels.viewApp}
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-full font-bold cursor-not-allowed shrink-0"
              >
                {labels.comingSoon}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">{labels.overview}</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">{labels.features}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                        <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">{labels.stack}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">{labels.challenges}</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                        <AlertTriangle size={14} className="text-yellow-500 mt-1 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
