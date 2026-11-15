import {
  Compass,
  Search,
  CheckCheck,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/data/content";

function getStepIcon(iconName: string) {
  switch (iconName) {
    case "Compass":
      return <Compass className="h-5 w-5 text-gold" />;
    case "Search":
      return <Search className="h-5 w-5 text-gold" />;
    case "CheckCheck":
      return <CheckCheck className="h-5 w-5 text-gold" />;
    case "UserCheck":
      return <UserCheck className="h-5 w-5 text-gold" />;
    case "Award":
      return <Award className="h-5 w-5 text-gold" />;
    default:
      return <CheckCheck className="h-5 w-5 text-gold" />;
  }
}

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={process.title}
          tagline={process.tagline}
          description={process.description}
        />

        {/* Horizontal Pipeline Pill Bar */}
        <div className="mb-14 flex items-center justify-center gap-2 overflow-x-auto pb-3">
          {process.steps.map((step, index) => (
            <div key={step.title} className="flex shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-bold text-gold shadow-md sm:text-sm">
                {getStepIcon(step.icon)}
                <span>{step.title}</span>
              </div>
              {index < process.steps.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-amber" />
              )}
            </div>
          ))}
        </div>

        {/* Process Step Cards */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-0 top-7 hidden h-1 bg-gradient-to-r from-navy via-indigo to-amber md:block"
          />

          <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {process.steps.map((step, index) => (
              <div
                key={step.title}
                className="group flex flex-col rounded-2xl border border-indigo/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:bg-white hover:shadow-lg"
              >
                {/* Step Number + Icon Circle */}
                <div className="flex items-center justify-between md:flex-col md:items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lg font-black text-gold shadow-md ring-4 ring-white transition-transform group-hover:scale-105">
                    0{index + 1}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/20 md:mt-4">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-navy">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
