"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Lang } from "@/lib/content";
import { ui } from "@/lib/content";
import { EASE, Parallax } from "./motion";

export default function Hero({ lang }: { lang: Lang }) {
  const t = ui[lang].hero;

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-20">
      {/* ghost name behind the portrait, like the inspo's product hero */}
      <Parallax
        range={36}
        className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2"
      >
        <div aria-hidden className="select-none pl-[1vw]">
          <div className="ghost text-[24vw] lg:text-[15vw]">YACINE</div>
          <div className="ghost text-[24vw] lg:text-[15vw]">KAHLIS</div>
        </div>
      </Parallax>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-6">
        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          className="order-2 lg:order-1 lg:col-span-5 lg:col-start-2"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[44vh] w-full max-w-[420px] lg:max-h-[62vh] lg:max-w-none">
            <Image
              src="/me.png"
              alt="Portrait de Yacine Kahlis"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-top grayscale contrast-[1.05]"
            />
          </div>
        </motion.div>

        {/* text block */}
        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="label-mono mb-5"
          >
            {t.role}
          </motion.p>

          <h1 className="display text-6xl sm:text-7xl xl:text-8xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
            >
              {t.title1}
            </motion.span>
            <motion.span
              className="block text-mute"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: EASE }}
            >
              {t.title2}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-mute"
          >
            {t.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projets" className="neu rounded-full px-8 py-4 text-sm font-medium">
              {t.cta}
            </a>
            <a
              href="#contact"
              className="label-mono !text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-ink"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.15 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-5"
          >
            {t.facts.map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="display text-3xl">{n}</dd>
                <dd className="label-mono mt-2 !tracking-[0.14em]">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
