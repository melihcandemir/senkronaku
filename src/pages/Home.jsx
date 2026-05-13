import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import QualitySection from "../components/QualitySection";
import ProductCards from "../components/ProductCards";

const Home = () => {
  return (
    <main className="w-full bg-tertiary flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <QualitySection />
      <ProductCards />
    </main>
  );
};

export default Home;
