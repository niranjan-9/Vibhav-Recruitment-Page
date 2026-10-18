import type { Metadata } from "next";
import Industries from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries | Vibha Recruitments",
  description: "Hiring networks across technology, healthcare, finance, manufacturing and operations.",
};

export default function IndustriesPage() {
  return <Industries />;
}
