import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import MapSection from "@/components/home/MapSection";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col relative">
      <div className="bg-noise fixed inset-0 z-0 mix-blend-overlay"></div>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Process />
        <MapSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
