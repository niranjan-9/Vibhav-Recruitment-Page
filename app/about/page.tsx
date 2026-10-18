import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Vibha Recruitments",
  description: "Who we are and how we hire — trust-first recruitment built for long-term outcomes.",
};

export default function AboutPage() {
  return <About />;
}
