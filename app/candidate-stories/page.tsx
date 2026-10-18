import type { Metadata } from "next";
import { fetchStories } from "@/lib/stories";
import StoryCard from "@/components/sections/StoryCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Candidate Stories | Vibha Recruitments",
  description:
    "Success stories from candidates who landed their dream roles with Vibha Recruitments.",
};

export default async function CandidateStoriesPage() {
  const stories = await fetchStories();

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          tagline="Success Stories"
          title="Our Candidate Stories"
          description="Professionals who moved forward with Vibha Recruitments — real placements, real packages."
        />

        {stories.length === 0 ? (
          <p className="mt-10 text-center text-sm text-neutral-500">
            Candidate stories will appear here soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
