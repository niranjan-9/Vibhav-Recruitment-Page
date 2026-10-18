import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/content";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading title="Industries" tone="light" />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((industry) => (
            <li
              key={industry.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-gold/50 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-gold">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
