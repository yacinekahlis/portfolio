"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Lang } from "@/lib/content";
import { ui, links } from "@/lib/content";
import { EASE } from "./motion";

export default function Nav({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const t = ui[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="display text-lg tracking-tight text-logo">
          YK.
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          <a href="#projets" className="label-mono transition-colors hover:text-ink">
            {t.projects}
          </a>
          <a href="#experience" className="label-mono transition-colors hover:text-ink">
            {t.experience}
          </a>
          <a href="#contact" className="label-mono transition-colors hover:text-ink">
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="label-mono neu rounded-full px-4 py-2 !text-ink"
            aria-label="Switch language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-dark label-mono rounded-full px-5 py-2 !text-paper-bright"
          >
            {t.cv}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
