import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Compass,
  MapPin,
  Globe2,
  Briefcase,
  Layers,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { home, siteName } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-amber/15 blur-3xl"
      />

      {/* Subtle tech grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">

          {/* ── Left Column: Value Proposition ── */}
          <div className="lg:col-span-7">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-4 w-4 text-amber animate-pulse" />
              <span>{home.badge}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {home.heading}
            </h1>

            <span aria-hidden className="mt-6 block h-1.5 w-24 rounded-full bg-gradient-to-r from-amber to-gold" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {home.story}
            </p>

            {/* Region pills with Lucide MapPin */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <Globe2 className="h-3.5 w-3.5" />
                Active Regions:
              </span>
              {home.regions.map((region) => (
                <span
                  key={region.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm"
                >
                  <MapPin className="h-3 w-3 text-amber" />
                  <span>{region.name}</span>
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-amber px-8 py-4 font-bold text-navy shadow-lg shadow-amber/20 transition-all hover:bg-gold hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber/30"
              >
                <span>Start Hiring With Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-all hover:border-gold hover:bg-white/10"
              >
                <Compass className="h-4 w-4 text-gold" />
                <span>Explore Services</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Featured Brand Showcase & Proof Points ── */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">

              {/* Attention-grabbing Brand Logo Card */}
              <div className="rounded-2xl border border-amber/30 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-lg">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                  <div className="rounded-xl bg-[#efefef] p-3 shadow-md ring-2 ring-amber/60">
                    <Image
                      src="/logo.png"
                      alt={siteName}
                      width={220}
                      height={89}
                      className="h-12 w-auto object-contain sm:h-14"
                      priority
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-amber sm:justify-start">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber" />
                      <span>Verified Partner</span>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      Where Talent Meets Technology
                    </p>
                  </div>
                </div>
              </div>

              {/* 4-Stat Metric Grid with Lucide Icons */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: <MapPin className="h-5 w-5 text-amber" />,
                    value: "India · UK · EU",
                    label: "Global Reach",
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-amber" />,
                    value: "7 Service Lines",
                    label: "Talent Solutions",
                  },
                  {
                    icon: <Cpu className="h-5 w-5 text-amber" />,
                    value: "8+ Domains",
                    label: "Tech Expertise",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-amber" />,
                    value: "End-to-End",
                    label: "Strategic Search",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      {stat.icon}
                    </div>
                    <p className="mt-3 text-base font-bold text-white sm:text-lg">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quotation banner */}
              <div className="mt-6 rounded-2xl border border-amber/30 bg-amber/10 p-4">
                <p className="text-xs italic leading-relaxed text-gold sm:text-sm">
                  &ldquo;{home.cta}&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
