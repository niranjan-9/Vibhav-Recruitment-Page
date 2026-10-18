import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading title={process.title} />

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-0 top-6 hidden h-px bg-indigo/20 md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-4">
            {process.steps.map((step, index) => (
              <li key={step.title}>
                <div className="flex items-center md:block">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-base font-bold text-gold ring-4 ring-white">
                    {index + 1}
                  </span>
                  <h3 className="pl-4 text-base font-semibold text-navy md:mt-5 md:pl-0 md:text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
