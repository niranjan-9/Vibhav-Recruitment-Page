import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | Vibha Recruitments",
  description: "Permanent search, contract staffing and bulk hiring programs built around your roles.",
};

export default function ServicesPage() {
  return <Services />;
}
