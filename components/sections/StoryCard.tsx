import type { CandidateStory } from "@/lib/stories";

const API_BASE_URL = process.env.API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";

export default function StoryCard({ story }: { story: CandidateStory }) {
  const initials = story.name
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  const photoSrc = story.photoUrl
    ? /^https?:/i.test(story.photoUrl)
      ? story.photoUrl
      : `${API_BASE_URL}${story.photoUrl}`
    : null;

  return (
    <article className="flex h-full flex-col rounded-xl border border-indigo/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt={`${story.name} photo`}
            className="h-14 w-14 rounded-full border-2 border-gold object-cover"
          />
        ) : (
          <span
            aria-label={`${story.name} initial`}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold"
          >
            {initials || "V"}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-navy">{story.name}</h3>
          <p className="text-sm text-indigo">
            {story.role ? `${story.role} · ` : ""}
            {story.company}
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">{story.note}</p>

      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-xs font-medium text-neutral-500">Placement package</span>
        <span className="rounded-full bg-amber px-3 py-1 text-sm font-bold text-navy">
          {story.packageText}
        </span>
      </div>
    </article>
  );
}
