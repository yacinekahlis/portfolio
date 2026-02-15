"use client";

import React from 'react';
import { Language } from '@/types';

interface LanguageToggleProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ lang, setLang }) => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6 flex justify-end">
      <div className="flex items-center bg-zinc-900/90 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-xl">
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition-all ${lang === 'en' ? 'bg-white text-black shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('fr')}
          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition-all ${lang === 'fr' ? 'bg-white text-black shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          FR
        </button>
      </div>
    </nav>
  );
};

export default LanguageToggle;
