import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkedinIcon } from "@/components/ui/Icons";
import { contact } from "@/data/content";

function getContactIcon(iconName: string) {
  switch (iconName) {
    case "Mail":
      return <Mail className="h-6 w-6 text-amber" />;
    case "Phone":
      return <Phone className="h-6 w-6 text-amber" />;
    case "Linkedin":
      return <LinkedinIcon className="h-6 w-6 text-amber" />;
    case "MapPin":
      return <MapPin className="h-6 w-6 text-amber" />;
    case "Clock":
      return <Clock className="h-6 w-6 text-amber" />;
    default:
      return <MapPin className="h-6 w-6 text-amber" />;
  }
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          tagline="Let&apos;s Connect"
          description={contact.description}
        />

        {/* Contact Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contact.details.map((detail) => (
            <div
              key={detail.label}
              className="group flex flex-col justify-between rounded-2xl border border-indigo/10 bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:bg-white hover:shadow-xl hover:shadow-indigo/10"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy shadow-md transition-transform group-hover:scale-110">
                  {getContactIcon(detail.iconName)}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                  {detail.label}
                </p>
                <p className="mt-2 break-words text-lg font-bold text-navy">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="transition-colors hover:text-indigo hover:underline"
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </p>
              </div>

              {detail.href && (
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-indigo group-hover:text-amber transition-colors">
                  <span>Open link</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Big Action Banner */}
        <div className="mt-14 rounded-3xl bg-navy p-8 text-center text-white shadow-2xl md:p-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber shadow-inner">
            <MessageSquare className="h-7 w-7" />
          </div>

          <h3 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Build Your Engineering Team?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Whether you need contract software engineers, permanent leadership hires, or offshore
            team expansion across India, the UK and Europe — Vibha Recruitments delivers.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@vibharecruitments.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-bold text-navy shadow-lg transition-all hover:bg-gold hover:shadow-xl sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              <span>Send Us an Email</span>
            </a>
            <a
              href="https://linkedin.com/company/vibha-recruitments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-white/10 sm:w-auto"
            >
              <LinkedinIcon className="h-4 w-4 text-gold" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
