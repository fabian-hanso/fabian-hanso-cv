import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs/Jobs";
import Schulen from "@/components/Schulen/Schulen";

export default function Home() {
  return (
    <main className="w-full h-auto bg-white">
      <Hero />
      <Jobs />
      <Schulen />
    </main>
  );
}
