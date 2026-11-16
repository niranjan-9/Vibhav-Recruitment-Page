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
import InteractiveGlobe from "@/components/ui/InteractiveGlobe";

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

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">

          {/* ── Left Column: Value Proposition ── */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-4 w-4 text-amber animate-pulse" />
              <span>{home.badge}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
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
                Active Talent Hubs:
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

            {/* Key Metrics Strip */}
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:gap-4">
              <div>
                <p className="text-2xl font-black text-amber sm:text-3xl">3+ Regions</p>
                <p className="mt-0.5 text-xs text-white/60">India, UK &amp; Europe</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber sm:text-3xl">7 Streams</p>
                <p className="mt-0.5 text-xs text-white/60">IT &amp; Tech Solutions</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber sm:text-3xl">8+ Domains</p>
                <p className="mt-0.5 text-xs text-white/60">Software, Cloud, Data</p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive 3D Dotted Globe & Hub Showcase ── */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-4 shadow-2xl backdrop-blur-md sm:p-6">

              {/* Interactive 3D Dotted Globe Component */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy/60 to-navy-deep/80 p-2 shadow-inner">
                <InteractiveGlobe />
              </div>

              {/* Brand Logo & Verification Badge Below Globe */}
              <div className="mt-4 rounded-2xl border border-amber/30 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#efefef] px-3 py-1.5 shadow-md ring-2 ring-amber/60">
                      <Image
                        src="/logo.png"
                        alt={siteName}
                        width={180}
                        height={73}
                        className="h-9 w-auto object-contain sm:h-10"
                        priority
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber">
                        <CheckCircle2 className="h-3 w-3 text-amber" />
                        <span>Verified Partner</span>
                      </div>
                      <p className="text-xs font-semibold text-white/90">
                        Where Talent Meets Technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
