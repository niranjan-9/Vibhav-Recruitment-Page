import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading title="Contact" tagline={contact.description} />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contact.details.map((detail) => (
            <li
              key={detail.label}
              className="rounded-2xl border border-indigo/10 bg-surface p-7 transition-colors hover:border-amber"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
                {detail.label}
              </p>
              <p className="mt-3 break-words font-medium text-navy">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="transition-colors hover:text-indigo hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span>{detail.value}</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
