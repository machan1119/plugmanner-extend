"use client";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurPricing from "@/components/OurPricing";
import RealTicket from "@/components/RealTicket";
import Reviews from "@/components/Reviews";
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
      <Reviews />
      <RealTicket />
      <Footer />
    </>
  );
}
