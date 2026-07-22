"use client";

import { motion } from "framer-motion";
import type { Lang } from "@/lib/content";
import { ui } from "@/lib/content";
import { Reveal, useSectionParallax } from "./motion";

export default function Experience({ lang }: { lang: Lang }) {
  const t = ui[lang].experience;
  const { ref, y } = useSectionParallax(70);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden bg-paper-bright">
      <motion.div aria-hidden style={{ y }} className="absolute right-[-4vw] top-8 z-0">
        <span className="ghost ghost-dark text-[18vw]">{t.ghost}</span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:py-36">
        <Reveal>
          <p className="label-mono">{t.label}</p>
          <h2 className="display mt-4 text-6xl sm:text-7xl">{t.title}</h2>
        </Reveal>

        <div className="mt-16">
          {t.jobs.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.08}>
              <article className="grid grid-cols-1 gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
                <p className="label-mono lg:col-span-2">{job.period}</p>
                <div className="lg:col-span-4">
                  <h3 className="display text-2xl">{job.role}</h3>
                  <p className="mt-2 text-sm text-mute">{job.org}</p>
                </div>
                <ul className="space-y-3 lg:col-span-6">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-4 text-[15px] leading-relaxed text-mute">
                      <span aria-hidden className="mt-[9px] h-px w-6 shrink-0 bg-ink" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="label-mono mt-16">{t.eduLabel}</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.edu.map((e) => (
              <div key={e.title} className="rounded-2xl border border-line bg-white/55 p-7">
                <p className="label-mono">{e.period}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{e.title}</h3>
                <p className="mt-1 text-sm text-mute">{e.org}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
