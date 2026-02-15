import React from 'react';
import { Content } from '../types';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC<{ content: Content['footer'] }> = ({ content }) => {
  return (
    <footer id="footer" className="bg-black py-20 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
          {content.tagline}
        </h2>
        
        <div className="flex justify-center gap-6 pt-8">
            <a href={`mailto:${content.contact}`} className="group bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                <Mail size={18} />
                {content.contact}
            </a>
        </div>

        <div className="flex justify-center gap-8 pt-12 text-zinc-500">
            <a href="https://github.com/yacinekahlis" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yacine-kahlis" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
            </a>
        </div>
        
        <p className="text-zinc-800 text-sm pt-12">
            © {new Date().getFullYear()} Yacine Kahlis. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;