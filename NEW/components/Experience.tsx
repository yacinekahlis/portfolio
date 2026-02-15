import React from 'react';
import { Experience, Content } from '../types';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors group">
    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
        <div>
            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.role}</h4>
            <div className="flex items-center gap-2 text-zinc-400 text-sm mt-1">
                <Briefcase size={14} />
                <span>{item.company}</span>
            </div>
        </div>
        <div className="text-right flex flex-col items-start md:items-end gap-1">
             <div className="flex items-center gap-2 text-zinc-500 text-xs bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                <Calendar size={12} />
                <span>{item.period}</span>
            </div>
             <div className="flex items-center gap-2 text-zinc-600 text-xs">
                <MapPin size={12} />
                <span>{item.location}</span>
            </div>
        </div>
    </div>
    
    <ul className="space-y-2 mt-4">
        {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed">
                <CheckCircle2 size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <span>{detail}</span>
            </li>
        ))}
    </ul>
  </div>
);

const ExperienceSection: React.FC<{ content: Content['experience'] }> = ({ content }) => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {content.heading}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;