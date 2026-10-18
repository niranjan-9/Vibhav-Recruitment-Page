"use cache";

import { cacheLife } from "next/cache";

export interface CandidateStory {
  id: string;
  name: string;
  role?: string;
  company: string;
  packageText: string;
  note: string;
  photoUrl?: string;
  publishedAt?: string;
}

const API_BASE_URL = process.env.API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";
const STORIES_ENDPOINT = `${API_BASE_URL}/api/v1/public/candidate-stories`;

export async function fetchStories(): Promise<CandidateStory[]> {
  cacheLife("minutes");

  try {
    const response = await fetch(STORIES_ENDPOINT, { cache: "force-cache" });
    if (!response.ok) {
      return [];
    }
    const payload = (await response.json()) as { data?: CandidateStory[] };
    return Array.isArray(payload?.data) ? payload.data : [];
  } catch {
    return [];
  }
}
