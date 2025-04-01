"use client"

import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs/Jobs";
import Schulen from "@/components/Schulen/Schulen";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  })

  return (
    <main className="w-full h-auto bg-white">
      <Hero />
      <Jobs />
      <ContactCTA />
      <Schulen />
      {/* <Arbeitsproben /> */}
    </main>
  );
}
