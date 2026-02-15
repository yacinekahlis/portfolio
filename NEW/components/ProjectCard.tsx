import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { PhoneFrame, BrowserFrame } from './Frames';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  viewAppLabel: string;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewAppLabel, onOpenModal }) => {
  const isMobile = project.type === 'mobile';
  const [imgIndex, setImgIndex] = useState(0);

  // Parallax Setup
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Content moves slightly slower than scroll for parallax feel
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % project.imageSeeds.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + project.imageSeeds.length) % project.imageSeeds.length);
  };

  return (
    <motion.div 
        ref={ref}
        style={{ opacity }}
        id={project.id} 
        className="group relative min-h-screen flex flex-col justify-center py-8 border-t border-white/5 first:border-t-0"
    >
      
      {/* 1. Header & Text Content (Top) - Compacted */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 max-w-4xl shrink-0"
      >
         <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">{project.type} Project</span>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
                  {project.title}
                </h3>
                <p className="text-xl font-medium text-zinc-400 tracking-tight">
                  {project.subtitle}
                </p>
            </div>
         </div>

         <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-base text-zinc-500 leading-relaxed">
              {project.description}
            </p>

            <div>
              <button 
                onClick={() => onOpenModal(project)}
                className="flex items-center gap-1 text-white font-semibold border-b border-white/20 pb-0.5 hover:border-white transition-colors group/btn text-sm"
              >
                  {viewAppLabel}
                  <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
         </div>
      </motion.div>

      {/* 2. Visual Content (Bottom - Fills remaining space but constrained) */}
      <motion.div 
        style={{ y: isMobile ? 0 : y }} // Apply parallax only on non-mobile frames usually, or mild on both
        className="w-full flex-1 flex justify-center items-center relative mt-8 min-h-0"
      >
          {/* Increased mobile max-height to 70vh and changed aspect ratio to 9/17 for a wider look */}
          <div className={`relative ${isMobile ? 'h-full max-h-[70vh] w-auto aspect-[9/17]' : 'w-full max-h-[60vh] aspect-[16/10]'}`}>
              
              {/* Controls */}
              <button 
                onClick={prevImage}
                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 p-2 text-zinc-500 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200 bg-black/50 backdrop-blur-sm rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 p-2 text-zinc-500 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200 bg-black/50 backdrop-blur-sm rounded-full"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Frame */}
              {isMobile ? (
                  <div className="w-full h-full group/frame transform hover:scale-[1.01] transition-transform duration-700 ease-out mx-auto cursor-pointer" onClick={() => onOpenModal(project)}>
                      <PhoneFrame>
                            <div className="relative w-full h-full bg-zinc-900">
                                <AnimatePresence mode="wait">
                                  <motion.img 
                                      key={imgIndex}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      src={`https://picsum.photos/seed/${project.imageSeeds[imgIndex]}/300/600`} 
                                      alt={project.title}
                                      className="w-full h-full object-cover"
                                  />
                                </AnimatePresence>
                          </div>
                      </PhoneFrame>
                  </div>
              ) : (
                  <div className="w-full h-full group/frame transform hover:scale-[1.01] transition-transform duration-700 ease-out shadow-2xl cursor-pointer" onClick={() => onOpenModal(project)}>
                      <BrowserFrame url={project.id === 'avenue' ? 'avenueoflooks.com' : `${project.id}.com`}>
                            <div className="relative w-full h-full bg-zinc-900">
                                <AnimatePresence mode="wait">
                                  <motion.img 
                                      key={imgIndex}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      src={`https://picsum.photos/seed/${project.imageSeeds[imgIndex]}/1200/800`} 
                                      alt={project.title}
                                      className="w-full h-full object-cover"
                                  />
                                </AnimatePresence>
                          </div>
                      </BrowserFrame>
                  </div>
              )}
              
                {/* Dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {project.imageSeeds.map((_, i) => (
                  <button 
                      key={i} 
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'bg-zinc-200 scale-125' : 'bg-zinc-700 hover:bg-zinc-500'}`}
                      aria-label={`Go to image ${i + 1}`}
                  />
                  ))}
              </div>
          </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;