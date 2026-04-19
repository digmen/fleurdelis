import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Benefits from "@/components/sections/Benefits";
import Founder from "@/components/sections/Founder";
import MembershipLevels from "@/components/sections/MembershipLevels";
import FdlBreak from "@/components/sections/FdlBreak";
import Stats from "@/components/sections/Stats";
import CtaCollage from "@/components/sections/CtaCollage";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Benefits />
      <Founder />
      <MembershipLevels />
      <FdlBreak />
      <Stats />
      <CtaCollage />
      <FinalCta />
      <Footer />
    </main>
  );
}
