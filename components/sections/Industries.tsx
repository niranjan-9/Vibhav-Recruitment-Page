import {
  Code2,
  Layout,
  Cloud,
  Database,
  CheckSquare,
  Server,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/content";

function getIndustryIcon(iconName: string) {
  switch (iconName) {
    case "Code2":
      return <Code2 className="h-5 w-5 text-gold" />;
    case "Layout":
      return <Layout className="h-5 w-5 text-gold" />;
    case "Cloud":
      return <Cloud className="h-5 w-5 text-gold" />;
    case "Database":
      return <Database className="h-5 w-5 text-gold" />;
    case "CheckSquare":
      return <CheckSquare className="h-5 w-5 text-gold" />;
    case "Server":
      return <Server className="h-5 w-5 text-gold" />;
    case "Boxes":
      return <Boxes className="h-5 w-5 text-gold" />;
    case "ShieldCheck":
      return <ShieldCheck className="h-5 w-5 text-gold" />;
    default:
      return <Code2 className="h-5 w-5 text-gold" />;
  }
}

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technology Expertise"
          tagline={industries.tagline}
          description="We identify and recruit skilled tech talent across key modern infrastructure and development specializations."
          tone="light"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-amber/20">
                  {getIndustryIcon(industry.icon)}
                </div>
                <h3 className="text-base font-bold text-white">
                  {industry.title}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                {industry.description}
              </p>

              {/* Skill Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                {industry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
