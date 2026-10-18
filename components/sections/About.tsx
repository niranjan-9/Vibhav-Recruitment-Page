import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          title="About"
          tagline={about.tagline}
          description={about.description}
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {about.pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-2xl border border-indigo/10 bg-surface p-7"
            >
              <span aria-hidden className="block h-1 w-10 rounded-full bg-amber" />
              <h3 className="mt-4 text-lg font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
