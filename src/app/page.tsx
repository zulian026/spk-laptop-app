"use client";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutSection from "@/components/section/about-section";
import CTASection from "@/components/section/cta-section";
import FeaturesSection from "@/components/section/features-section";
import HeroSection from "@/components/section/hero-section";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <ChatInterface />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <Footer />
        {/* <FeaturesSection />
        <AboutSection />
        <CTASection /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
