import Image from "next/image";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { contact, footer, navLinks, siteName } from "@/data/content";

function getContactIcon(label: string) {
  switch (label.toLowerCase()) {
    case "email":
      return <Mail className="h-4 w-4 shrink-0 text-amber" />;
    case "phone":
      return <Phone className="h-4 w-4 shrink-0 text-amber" />;
    case "linkedin":
      return <LinkedinIcon className="h-4 w-4 shrink-0 text-amber" />;
    case "location":
      return <MapPin className="h-4 w-4 shrink-0 text-amber" />;
    case "hours":
      return <Clock className="h-4 w-4 shrink-0 text-amber" />;
    default:
      return <MapPin className="h-4 w-4 shrink-0 text-amber" />;
  }
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column with Large, Prominent Logo */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="inline-block transition-transform hover:scale-[1.02]"
              aria-label={siteName}
            >
              <div className="inline-flex items-center rounded-2xl bg-[#efefef] px-5 py-2.5 shadow-lg ring-2 ring-amber/60">
                <Image
                  src="/logo.png"
                  alt={siteName}
                  width={240}
                  height={97}
                  className="h-12 w-auto object-contain sm:h-14 md:h-16"
                />
              </div>
            </a>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              {footer.tagline}
            </p>

            {/* Regions covered with Lucide icon */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <Globe2 className="h-3.5 w-3.5" />
                Coverage:
              </span>
              {footer.regions.map((region) => (
                <span
                  key={region}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm"
                >
                  <MapPin className="h-3 w-3 text-amber" />
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-white/75 transition-colors hover:text-gold"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-amber/60 transition-transform group-hover:translate-x-1 group-hover:text-amber" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Connect With Us
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              {contact.details.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white/10 p-1.5 text-amber">
                    {getContactIcon(detail.label)}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="break-all font-medium text-white transition-colors hover:text-gold"
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="font-medium text-white">{detail.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-2 text-white/70">
            <ShieldCheck className="h-4 w-4 text-amber" />
            <span>IT Recruitment &amp; Technology Talent Solutions</span>
          </div>
        </div>
      </div>
      <span className="hidden">{siteName}</span>
    </footer>
  );
}
