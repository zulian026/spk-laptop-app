"use client";
import Header from "@/components/layout/header";
import FeaturesSection from "@/components/section/features-section";
import HeroSection from "@/components/section/hero-section";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection/>
        {/* <FeaturesSection />
        <AboutSection />
        <CTASection /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
