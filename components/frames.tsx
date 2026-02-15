"use client";

import React from 'react';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] w-full h-full shadow-2xl flex flex-col overflow-hidden">
      <div className="h-[6%] w-[3px] bg-gray-800 absolute -left-[10px] top-[15%] rounded-l-lg"></div>
      <div className="h-[9%] w-[3px] bg-gray-800 absolute -left-[10px] top-[25%] rounded-l-lg"></div>
      <div className="h-[9%] w-[3px] bg-gray-800 absolute -left-[10px] top-[36%] rounded-l-lg"></div>
      <div className="h-[12%] w-[3px] bg-gray-800 absolute -right-[10px] top-[28%] rounded-r-lg"></div>

      {/* Notch */}
      <div className="absolute top-0 w-full flex justify-center z-20 pointer-events-none">
        <div className="h-6 w-32 bg-black rounded-b-xl"></div>
      </div>

      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-zinc-950 relative">
        {children}
        {/* Reflection overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[2rem]"></div>
      </div>
    </div>
  );
};

export const BrowserFrame: React.FC<{ children: React.ReactNode; url?: string; className?: string }> = ({ children, url = "https://project.com", className = "" }) => {
  return (
    <div className={`w-full h-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col ${className}`}>
      {/* Browser Chrome */}
      <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-4 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="bg-black/30 text-zinc-600 text-xs px-3 py-1 rounded flex items-center gap-2 w-full max-w-xs justify-center font-mono truncate">
                <span className="opacity-50">🔒</span> {url}
            </div>
        </div>
      </div>
      <div className="flex-1 bg-zinc-950 relative overflow-hidden group">
        {children}
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 pointer-events-none" />
      </div>
    </div>
  );
};
