import { home, siteName } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-amber/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold md:text-sm">
          {siteName}
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {home.heading}
        </h1>
        <span
          aria-hidden
          className="mt-8 block h-1 w-24 rounded-full bg-amber"
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
          {home.story}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber px-7 py-3 font-semibold text-navy transition-colors hover:bg-gold"
          >
            Start a Conversation
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:border-gold hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
