"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, siteName } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="/"
          className="group flex shrink-0 items-center transition-transform hover:scale-[1.02]"
          onClick={() => setOpen(false)}
          aria-label={siteName}
        >
          <div className="relative flex items-center justify-center rounded-xl bg-[#efefef] px-3.5 py-1.5 shadow-md ring-2 ring-amber/60 transition-all group-hover:ring-amber group-hover:shadow-amber/20 group-hover:shadow-lg">
            <Image
              src="/logo.png"
              alt={siteName}
              width={200}
              height={81}
              className="h-10 w-auto object-contain sm:h-11 md:h-12"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden min-w-0 items-center gap-1 whitespace-nowrap text-sm font-medium lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile Menu Button */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-xs font-bold text-navy shadow-md transition-all hover:bg-gold hover:shadow-lg hover:-translate-y-0.5 sm:inline-flex xl:text-sm"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-gold lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-4 py-5 backdrop-blur-md lg:hidden">
          <ul className="space-y-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-center text-sm font-bold text-navy shadow-lg transition-colors hover:bg-gold"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
      <span className="sr-only">{siteName}</span>
    </header>
  );
}
