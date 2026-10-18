import { contact, footer, navLinks, siteName } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-lg font-bold text-navy">
                V
              </span>
              <span className="text-lg font-semibold tracking-wide text-white">
                Vibha{" "}
                <span className="text-gold">Recruitments</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Hiring built on trust, where the right people meet the right
              purpose.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {contact.details.map((detail) => (
                <li key={detail.label}>
                  <span className="text-white/50">{detail.label}: </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="transition-colors hover:text-gold"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          {footer.copyright}
        </div>
      </div>
      <span className="hidden">{siteName}</span>
    </footer>
  );
}
