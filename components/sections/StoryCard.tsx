import { Briefcase, Building2 } from "lucide-react";
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
    <article className="group flex h-full flex-col rounded-2xl border border-indigo/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-xl hover:shadow-indigo/10">
      <div className="flex items-center gap-4">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt={`${story.name} photo`}
            className="h-14 w-14 rounded-full border-2 border-gold object-cover shadow-sm"
          />
        ) : (
          <span
            aria-label={`${story.name} initial`}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-lg font-bold text-gold shadow-sm ring-2 ring-amber/40"
          >
            {initials || "V"}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="truncate font-bold text-navy text-base">{story.name}</h3>
          <p className="flex items-center gap-1.5 text-xs text-indigo truncate mt-0.5">
            <Building2 className="h-3 w-3 shrink-0 text-amber" />
            <span>
              {story.role ? `${story.role} · ` : ""}
              {story.company}
            </span>
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic">
        &ldquo;{story.note}&rdquo;
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
          <Briefcase className="h-3.5 w-3.5 text-amber" />
          Package
        </span>
        <span className="rounded-full bg-amber px-3.5 py-1 text-xs font-black text-navy shadow-sm">
          {story.packageText}
        </span>
      </div>
    </article>
  );
}
