import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="cursor-pointer flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="/creativestudios.png" 
            alt="Creative Studio" 
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Services
          </button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Contact
          </button>
        </nav>

        <button 
          onClick={() => scrollTo("contact")}
          className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-all active:scale-95 hidden sm:block shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        >
          Get a Quote
        </button>
        
        {/* Mobile menu button could go here, but keeping it simple as per prompt */}
      </div>
    </motion.header>
  );
}
