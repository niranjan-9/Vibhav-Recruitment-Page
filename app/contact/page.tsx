import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Vibha Recruitments",
  description: "Start a conversation with Vibha Recruitments — reach us by email or phone.",
};

export default function ContactPage() {
  return <Contact />;
}
