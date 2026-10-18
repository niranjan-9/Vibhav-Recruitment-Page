import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CandidateStories from "@/components/sections/CandidateStories";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <CandidateStories />
      <Careers />
      <Contact />
    </>
  );
}
