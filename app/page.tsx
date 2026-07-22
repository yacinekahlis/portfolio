"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/content";
import { projects, ui } from "@/lib/content";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import ProjectSection from "@/components/project-section";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    window.localStorage.setItem("lang", l);
  };

  const t = ui[lang];

  return (
    <main>
      <Nav lang={lang} setLang={switchLang} />
      <Hero lang={lang} />
      <Marquee />

      <div id="projets">
        {projects.map((project, i) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            lang={lang}
            heading={i === 0 ? { label: t.projects.label, title: t.projects.title } : undefined}
          />
        ))}
      </div>

      <Experience lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
