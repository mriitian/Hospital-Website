import React from "react";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PricingPage from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import FeaturedSection from "../components/featuredsec/FeaturesSection";
import Experiences from "../components/Experiences";
export default function Home() {
  const showExplore = true;
  return (
    <div>
      <NavBar showExplore={showExplore} />
      <HeroSection />
      <PricingPage />
      <FeaturedSection />
      <FAQ />
      <Experiences />
      <hr />
      <Footer />
    </div>
  );
}
