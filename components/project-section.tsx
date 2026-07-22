"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Lang, Project } from "@/lib/content";
import { EASE, Reveal, useSectionParallax } from "./motion";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrowserFrame({
  src,
  alt,
  url,
  tall = false,
}: {
  src: string;
  alt: string;
  url?: string;
  tall?: boolean;
}) {
  return (
    <div className="browser-frame">
      <div className="flex items-center gap-2 border-b border-line/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        {url && (
          <span className="label-mono ml-3 hidden truncate rounded-full bg-paper px-3 py-1 !text-[10px] !tracking-[0.08em] !normal-case sm:block">
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        )}
      </div>
      <div className={`relative w-full ${tall ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 55vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function PhonesVisual({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="flex items-end justify-center">
      {images.map((src, i) => {
        const mid = i === 1;
        return (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.12 * i, ease: EASE }}
            className={`relative aspect-[1419/2796] drop-shadow-[0_30px_45px_rgba(19,19,18,0.3)] ${
              mid
                ? "z-10 w-[42%] -translate-y-6"
                : "w-[36%] " + (i === 0 ? "translate-x-4 -rotate-3" : "-translate-x-4 rotate-3")
            }`}
          >
            <Image
              src={src}
              alt={`${title} — écran ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 40vw, 22vw"
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ProjectSection({
  project,
  index,
  total,
  lang,
  heading,
}: {
  project: Project;
  index: number;
  total: number;
  lang: Lang;
  heading?: { label: string; title: string };
}) {
  const flip = index % 2 === 1;
  const bright = index % 2 === 0;
  const band = bright ? "bg-paper-bright" : "bg-paper";
  const { ref, y } = useSectionParallax(90);
  const num = String(index + 1).padStart(2, "0");

  return (
    <section ref={ref} className={`relative overflow-hidden ${band}`}>
      {/* giant ghost word */}
      <motion.div
        aria-hidden
        style={{ y }}
        className={`absolute top-10 z-0 ${flip ? "right-[-2vw] text-right" : "left-[-2vw]"}`}
      >
        <span className={`ghost text-[20vw] ${bright ? "ghost-dark" : ""}`}>{project.ghost}</span>
      </motion.div>

      {heading && (
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 lg:pt-36">
          <Reveal>
            <p className="label-mono">{heading.label}</p>
            <h2 className="display mt-4 text-6xl sm:text-7xl">{heading.title}</h2>
          </Reveal>
        </div>
      )}

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-40">
        {/* visual */}
        <div
          className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : "lg:order-1 lg:col-start-1"}`}
        >
          {project.visual.kind === "phones" && (
            <PhonesVisual images={project.visual.images} title={project.title} />
          )}

          {project.visual.kind === "web" && (
            <div className="relative">
              <Reveal>
                <BrowserFrame
                  src={project.visual.main}
                  alt={`${project.title} — aperçu du site`}
                  url={project.url}
                />
              </Reveal>
              {project.visual.secondary && (
                <Reveal
                  delay={0.15}
                  className="absolute -bottom-10 w-[52%] max-w-[340px] drop-shadow-[0_24px_40px_rgba(19,19,18,0.25)] lg:-bottom-14"
                >
                  <div className={flip ? "lg:-translate-x-10" : "lg:translate-x-10 lg:ml-auto"}>
                    <BrowserFrame
                      src={project.visual.secondary}
                      alt={`${project.title} — second écran`}
                      tall
                    />
                  </div>
                </Reveal>
              )}
            </div>
          )}

          {project.visual.kind === "single" && (
            <Reveal>
              <div className="relative overflow-hidden rounded-[14px] shadow-[0_28px_70px_-20px_rgba(19,19,18,0.4)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.visual.image}
                    alt={`${project.title} — aperçu`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 55vw"
                    className="object-cover"
                  />
                </div>
                {project.status && (
                  <span className="label-mono absolute left-5 top-5 rounded-full bg-paper-bright/90 px-4 py-2 !text-ink backdrop-blur">
                    {project.status[lang]}
                  </span>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {/* text */}
        <div
          className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-9"}`}
        >
          <Reveal>
            <p className="label-mono">
              {num} <span className="text-line">/</span> {String(total).padStart(2, "0")}
              <span className="mx-3 text-line">—</span>
              {project.year}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="display mt-5 text-5xl sm:text-6xl">{project.title}</h3>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-lg font-medium leading-snug">
              {project.tagline[lang]}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[15px] leading-relaxed text-mute">
              {project.description[lang]}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {project.tags.map((tag) => (
                <li key={tag} className="label-mono !tracking-[0.14em]">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
          {project.url && project.urlLabel && (
            <Reveal delay={0.32}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-4"
              >
                <span className="dish flex h-16 w-16 items-center justify-center">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
                <span className="label-mono !text-ink">{project.urlLabel?.[lang]}</span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
