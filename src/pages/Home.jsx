import Hero from "../components/Hero";
import BusinessSectors from "../components/home/BusinessSectors";
// import TrustSection from "../components/home/TrustSection";
import StatsBar from "../components/home/StatsBar";
import PrestigiousCompanies from "../components/home/PrestigiousCompanies";
import Food from "../components/home/Food.jsx";
import OurValue from "../components/home/OurValue";
import GetInTouch from "../components/home/GetInTouch";

import { useReveal } from "../useReveal";

function RevealSection({ children, className = "" }) {
  const { ref, visible } = useReveal({ threshold: 0.2, once: true });
  return (
    <section ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
     
      <Hero />

      <RevealSection>
        <BusinessSectors />
      </RevealSection>

      {/* <RevealSection>
        <TrustSection />
      </RevealSection> */}

      <RevealSection>
        <StatsBar />
      </RevealSection>

      <RevealSection>
        <PrestigiousCompanies />
      </RevealSection>

      <RevealSection>
        <Food />
      </RevealSection>

      <RevealSection>
        <OurValue />
      </RevealSection>

      <RevealSection>
        <GetInTouch />
      </RevealSection>
    </>
  );
}
