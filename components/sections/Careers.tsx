import { Briefcase, ArrowUpRight, Send, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { careers } from "@/data/content";

export default function Careers() {
  return (
    <section id="careers" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Career Opportunities"
          tagline={careers.tagline}
          description={careers.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {careers.roles.map((role) => (
            <a
              key={role.title}
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl border border-indigo/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/80 hover:shadow-lg hover:shadow-indigo/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-amber transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-3.5 text-base font-bold leading-snug text-navy group-hover:text-indigo transition-colors">
                  {role.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{role.meta}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Custom Resume Submission Callout */}
        <div className="mt-12 rounded-3xl bg-navy p-8 text-center text-white shadow-xl md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold">
            <Sparkles className="h-3.5 w-3.5 text-amber" />
            <span>Looking for your next move?</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
            Don&apos;t See Your Exact Role?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            We are continuously sourcing technical talent across Java, Python, Cloud, DevOps,
            Data Engineering, Cybersecurity, and ERP systems. Send us your CV.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-navy shadow-md transition-all hover:bg-gold hover:shadow-lg hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              <span>Submit Your CV / Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
