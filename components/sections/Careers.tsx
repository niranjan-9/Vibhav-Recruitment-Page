import SectionHeading from "@/components/ui/SectionHeading";
import { careers } from "@/data/content";

export default function Careers() {
  return (
    <section id="careers" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          title="Careers"
          tagline={careers.tagline}
          description={careers.description}
        />

        <ul className="grid gap-5 sm:grid-cols-2">
          {careers.roles.map((role) => (
            <li
              key={role.title}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-indigo/15 bg-white p-6 transition hover:border-amber hover:shadow-lg hover:shadow-indigo/10"
            >
              <div>
                <h3 className="text-lg font-semibold text-navy">{role.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{role.meta}</p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5 shrink-0 text-amber transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
