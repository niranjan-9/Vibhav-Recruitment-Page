import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading title="Services" />

        <ul className="grid gap-6 md:grid-cols-2">
          {services.items.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-indigo/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber/60 hover:shadow-xl hover:shadow-indigo/10"
            >
              <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-indigo/10 pt-5">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-navy">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="h-3 w-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 6 9 17l-5-5"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
