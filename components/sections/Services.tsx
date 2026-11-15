import {
  Laptop,
  Users,
  Zap,
  Globe,
  Rocket,
  Search,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/content";

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case "Laptop":
      return <Laptop className="h-6 w-6 text-amber" />;
    case "Users":
      return <Users className="h-6 w-6 text-amber" />;
    case "Zap":
      return <Zap className="h-6 w-6 text-amber" />;
    case "Globe":
      return <Globe className="h-6 w-6 text-amber" />;
    case "Rocket":
      return <Rocket className="h-6 w-6 text-amber" />;
    case "Search":
      return <Search className="h-6 w-6 text-amber" />;
    case "GraduationCap":
      return <GraduationCap className="h-6 w-6 text-amber" />;
    default:
      return <Laptop className="h-6 w-6 text-amber" />;
  }
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Core Services"
          tagline={services.tagline}
          description="Comprehensive IT recruitment and technology talent solutions tailored to your organization's unique requirements."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-indigo/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-xl hover:shadow-indigo/10"
            >
              {/* Icon Container with Lucide Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber shadow-md transition-transform duration-300 group-hover:scale-110">
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="mt-5 text-lg font-bold leading-snug text-navy">
                {service.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              {/* Highlights using Lucide CheckCircle2 */}
              <ul className="mt-5 space-y-2 border-t border-indigo/10 pt-4">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber" />
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl border border-indigo/10 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm text-slate-600 sm:text-base">
            Need a customized talent or offshore staffing solution?{" "}
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-bold text-navy underline underline-offset-4 transition-colors hover:text-indigo"
            >
              <span>Speak with our recruitment advisors</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
