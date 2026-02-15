"use client";

import React, { useState } from 'react';
import { CONTENT } from '@/lib/constants';
import { Language, Project } from '@/types';
import LanguageToggle from '@/components/language-toggle';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import { ChevronDown, Github, Linkedin, Mail, Phone, Award, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [lang, setLang] = useState<Language>('fr');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* Modal - Global Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            labels={{
              close: content.projects.close,
              viewApp: content.projects.viewApp,
              overview: content.modal.overview,
              features: content.modal.features,
              stack: content.modal.stack,
              challenges: content.modal.challenges,
              projectType: content.common[selectedProject.type === 'mobile' ? 'mobileProject' : 'webProject'],
              comingSoon: content.common.comingSoon
            }}
          />
        )}
      </AnimatePresence>

      {/* Hero Section containing 2 Columns */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12 pb-32 overflow-hidden">

        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:128px_128px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 relative z-10">

          {/* LEFT COLUMN: Profile, Contact Buttons & Education - Sticky on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start h-fit"
          >
            {/* Profile Header */}
            <div className="space-y-6">
              <div className="relative w-28 h-28 lg:w-32 lg:h-32">
                <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-b from-white/20 to-transparent">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
                    <Image
                      src="/me.jpg"
                      alt="Yacine Kahlis"
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#050505] p-1 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
                  Yacine Kahlis
                </h1>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-sm">
                  {content.hero.subtitle}
                </p>
              </div>
            </div>

            {/* Contact Buttons (Icon Only) */}
            <div className="flex flex-col gap-3 w-full">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2 font-semibold">
                {content.nav.contact}
              </h2>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${content.footer.contact}`} className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-200" aria-label="Email">
                  <Mail size={20} />
                </a>

                <a href="tel:+15810000000" className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-200" aria-label="Phone">
                  <Phone size={20} />
                </a>

                <a href="https://github.com/yacinekahlis" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-200" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yacine-kahlis" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-200" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 font-semibold">
                <Award size={16} />
                {content.certifications.heading}
              </h2>
              <ul className="space-y-4">
                {content.certifications.items.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Experience & Skills Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-10 lg:pt-8"
          >

            {/* Experience */}
            <div className="space-y-8">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 font-semibold">
                <Layers size={16} />
                {content.experience.heading}
              </h2>
              <div className="flex flex-col gap-10 border-l border-white/10 pl-6 lg:pl-8">
                {content.experience.items.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[29px] lg:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-white/20 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-colors"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.role}</h3>
                      <span className="text-zinc-500 font-mono text-xs">{item.period}</span>
                    </div>
                    <p className="text-zinc-300 text-sm font-semibold mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 font-semibold">
                <Cpu size={16} />
                {content.skills.heading}
              </h2>
              <ul className="grid grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-2">
                {content.skills.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700/50 shrink-0 border border-zinc-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>

        {/* Scroll Indicator - Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
            {content.nav.projects}
          </span>
          <ChevronDown size={32} className="animate-bounce mt-2" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {content.projects.items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewAppLabel={content.projects.viewApp}
                projectTypeLabel={content.common[project.type === 'mobile' ? 'mobileProject' : 'webProject']}
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>

          {/* Minimal Footer / Copyright */}
          <div className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Yacine Kahlis.</p>
            <div className="flex gap-4">
              <span>Québec, QC</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
