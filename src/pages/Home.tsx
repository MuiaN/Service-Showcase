import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
