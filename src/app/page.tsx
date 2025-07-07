"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurPricing from "@/components/OurPricing";
import TheComparison from "@/components/TheComparison";
import TheProcess from "@/components/TheProcess";
import TopMedia from "@/components/TopMedia";
import WhyTrust from "@/components/WhyTrust";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <WhyTrust />
      <TheProcess />
      <OurPricing />
      <TopMedia />
      <TheComparison />
    </>
  );
}
