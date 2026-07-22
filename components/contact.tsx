"use client";

import type { Lang } from "@/lib/content";
import { ui, links } from "@/lib/content";
import { Reveal } from "./motion";

export default function Contact({ lang }: { lang: Lang }) {
  const t = ui[lang].contact;

  return (
    <footer id="contact" className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 lg:pt-40">
        <Reveal>
          <p className="label-mono">{t.label}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-[13vw] leading-[0.9] sm:text-8xl lg:text-9xl">
            {t.titleA}
            <br />
            <span className="text-mute">{t.titleB}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 text-[15px] text-mute">{t.sub}</p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href={links.email} className="neu rounded-full px-8 py-4 text-sm font-medium">
              {t.email}
            </a>
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-dark rounded-full px-8 py-4 text-sm font-medium"
            >
              {t.cv}
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div className="flex gap-8">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono !text-ink transition-opacity hover:opacity-60"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono !text-ink transition-opacity hover:opacity-60"
            >
              LinkedIn
            </a>
          </div>
          <p className="label-mono">
            © {new Date().getFullYear()} — {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
