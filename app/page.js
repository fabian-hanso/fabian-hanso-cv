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
    });
  })

  return (
    <main className="w-full h-auto bg-white">
      <div className="w-full h-auto bg-primary p-2 flex justify-center items-center text-white">This page is still under construction!</div>
      <Hero />
      <Jobs />
      <ContactCTA />
      <Schulen />
      {/* <Arbeitsproben /> */}
    </main>
  );
}
