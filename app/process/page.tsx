import type { Metadata } from "next";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Our Process | Vibha Recruitments",
  description: "Discovery, search, shortlist and join — a hiring process that stays on schedule.",
};

export default function ProcessPage() {
  return <Process />;
}
