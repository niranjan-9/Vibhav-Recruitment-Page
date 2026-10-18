"use client";

import { useState } from "react";
import { navLinks, siteName } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-lg font-bold text-navy">
            V
          </span>
          <span className="text-base font-semibold tracking-wide md:text-lg">
            Vibha{" "}
            <span className="text-gold">Recruitments</span>
          </span>
        </a>

        <ul className="hidden min-w-0 items-center gap-3 whitespace-nowrap text-[13px] font-medium lg:flex xl:gap-6 xl:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/contact"
            className="hidden rounded-full bg-amber px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-gold sm:inline-flex xl:px-5 xl:py-2 xl:text-sm"
          >
            Start a Conversation
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 6l12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-amber px-5 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-gold"
              >
                Start a Conversation
              </a>
            </li>
          </ul>
        </div>
      )}
      <span className="sr-only">{siteName}</span>
    </header>
  );
}
