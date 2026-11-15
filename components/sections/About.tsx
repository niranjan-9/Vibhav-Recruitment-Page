import Image from "next/image";
import {
  Globe2,
  Briefcase,
  Cpu,
  Award,
  Target,
  Compass,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, siteName } from "@/data/content";

function getPillarIcon(iconName: string) {
  switch (iconName) {
    case "Target":
      return <Target className="h-6 w-6 text-amber" />;
    case "Compass":
      return <Compass className="h-6 w-6 text-amber" />;
    case "ShieldCheck":
      return <ShieldCheck className="h-6 w-6 text-amber" />;
    default:
      return <Target className="h-6 w-6 text-amber" />;
  }
}

function getStatIcon(iconName: string) {
  switch (iconName) {
    case "Globe2":
      return <Globe2 className="h-5 w-5 text-indigo" />;
    case "Briefcase":
      return <Briefcase className="h-5 w-5 text-indigo" />;
    case "Cpu":
      return <Cpu className="h-5 w-5 text-indigo" />;
    case "Award":
      return <Award className="h-5 w-5 text-indigo" />;
    default:
      return <Award className="h-5 w-5 text-indigo" />;
  }
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Vibha Recruitments"
          tagline={about.tagline}
          description={about.description}
        />

        {/* 4-Stat Metric Row with Lucide Icons */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center rounded-2xl border border-indigo/10 bg-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-amber/60 hover:shadow-lg"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-indigo/10 group-hover:ring-amber/40">
                {getStatIcon(stat.icon)}
              </div>
              <p className="text-3xl font-extrabold text-navy sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Core Pillars with Lucide Icons */}
        <div className="grid gap-6 md:grid-cols-3">
          {about.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col rounded-2xl border border-indigo/10 bg-surface p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-amber/60 hover:bg-white hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber shadow-md transition-transform group-hover:scale-110">
                {getPillarIcon(pillar.icon)}
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{pillar.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
              <span aria-hidden className="mt-5 block h-1 w-12 rounded-full bg-amber/40 transition-all group-hover:w-20 group-hover:bg-amber" />
            </div>
          ))}
        </div>

        {/* Brand Attention Showcase Card */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-navy p-8 shadow-2xl md:p-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">

            {/* High-Contrast Large Logo Box */}
            <div className="shrink-0">
              <div className="flex items-center justify-center rounded-2xl bg-[#efefef] p-6 shadow-2xl ring-4 ring-amber/50 transition-transform hover:scale-105">
                <Image
                  src="/logo.png"
                  alt={siteName}
                  width={260}
                  height={105}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>
            </div>

            {/* Content beside Logo */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                <Sparkles className="h-3.5 w-3.5 text-amber" />
                <span>IT Recruitment &amp; Technology Solutions</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Building Teams. Developing Talent. Supporting Growth.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                Whether you need specialist technology talent, project resources or a new career
                opportunity — Vibha Recruitments is your dedicated partner across India, the UK
                and Europe.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-xs font-bold text-navy shadow-md transition-all hover:bg-gold hover:shadow-lg sm:text-sm"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
