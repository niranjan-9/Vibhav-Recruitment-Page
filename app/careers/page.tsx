import type { Metadata } from "next";
import Careers from "@/components/sections/Careers";

export const metadata: Metadata = {
  title: "Careers | Vibha Recruitments",
  description: "Roles open now, told honestly — including candidates who secured offers with us.",
};

export default function CareersPage() {
  return <Careers />;
}
