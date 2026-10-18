type SectionHeadingProps = {
  title: string;
  tagline?: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
};

export default function SectionHeading({
  title,
  tagline,
  description,
  tone = "dark",
  align = "center",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <span
        aria-hidden
        className={`block h-1 w-12 rounded-full bg-amber ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      <h2
        className={`mt-6 text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {tagline && (
        <p
          className={`mt-4 text-lg font-medium md:text-xl ${
            light ? "text-gold" : "text-indigo"
          }`}
        >
          {tagline}
        </p>
      )}
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
