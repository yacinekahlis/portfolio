import { skills } from "@/lib/content";

export default function Marquee() {
  const row = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden border-y border-line bg-paper-dim py-5">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((s, i) => (
          <span key={`${s}-${i}`} className="label-mono flex items-center gap-10 !text-ink/70">
            {s}
            <span aria-hidden className="text-line">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
