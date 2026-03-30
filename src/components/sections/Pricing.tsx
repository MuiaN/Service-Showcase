import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Download, Sparkles } from "lucide-react";
import { detailedPricingData, type ServiceCategory } from "@/lib/data";

type Tab = "web" | "events" | "social";

function PricingCard({
  plan,
  index,
  color,
  billing,
}: {
  plan: ServiceCategory["plans"][number];
  index: number;
  color: string;
  billing: "project" | "month";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.09 }}
      className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 ${
        plan.popular
          ? "border-primary/60 bg-gradient-to-b from-primary/10 via-card to-card shadow-[0_0_50px_rgba(99,102,241,0.18)]"
          : "border-white/8 bg-card/70 hover:border-white/16"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-fuchsia-500 rounded-full text-[11px] font-bold tracking-widest text-white shadow-lg uppercase whitespace-nowrap">
          Most Popular
        </div>
      )}

      {/* Title + description */}
      <div className="mb-5">
        <h4 className="text-lg font-display font-bold mb-1.5">{plan.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-display font-extrabold text-white">
          ${plan.price.toLocaleString()}
        </span>
        <span className="text-muted-foreground text-sm">/{billing}</span>
      </div>

      {/* Delivery badge */}
      {plan.delivery && (
        <div className="flex items-center gap-1.5 mb-6 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>
            Delivery: <span className="text-foreground/80 font-medium">{plan.delivery}</span>
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-7">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                plan.popular ? "bg-primary/25" : "bg-white/8"
              }`}
            >
              <Check
                className={`w-3 h-3 ${plan.popular ? "text-primary" : color}`}
              />
            </div>
            <span className="text-sm text-foreground/85 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${
          plan.popular
            ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
            : "bg-white/6 text-white hover:bg-white/12 border border-white/10"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("web");
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    detailedPricingData.web.categories[0].id
  );

  const categories = detailedPricingData[activeTab].categories;
  const activeCategory =
    categories.find((c) => c.id === activeCategoryId) ?? categories[0];

  const handleTabSwitch = (tab: Tab) => {
    setActiveTab(tab);
    setActiveCategoryId(detailedPricingData[tab].categories[0].id);
  };

  return (
    <section id="pricing" className="py-32 relative bg-background">
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-primary/5 blur-[180px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Choose Your{" "}
            <span className="text-gradient">Perfect Package</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Select the exact service you need. Every deliverable is a
            high-quality <span className="text-foreground/80 font-medium">digital file</span> — ready
            for you to use or print at any vendor worldwide.
          </motion.p>
        </div>

        {/* Main tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10">
            {(["web", "events", "social"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabSwitch(tab)}
                className="relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="mainTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {tab === "web" ? "Web & Branding" : tab === "events" ? "Event Services" : "Social Media"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service category chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-chips"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 border-white/25 text-white shadow-md"
                      : "bg-transparent border-white/8 text-muted-foreground hover:border-white/18 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? cat.color : ""}`} />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Category label + digital-only note */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id + "-header"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-10 space-y-3"
          >
            <div className="inline-flex items-center gap-2">
              {(() => {
                const Icon = activeCategory.icon;
                return <Icon className={`w-5 h-5 ${activeCategory.color}`} />;
              })()}
              <h3 className="text-xl font-display font-semibold">
                {activeCategory.label} Pricing
              </h3>
            </div>

            <div
              className={`h-0.5 w-16 mx-auto rounded-full bg-gradient-to-r from-transparent via-current to-transparent ${activeCategory.color} opacity-40`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Pricing cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id + "-cards"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {activeCategory.plans.map((plan, i) => (
              <PricingCard
                key={plan.title + activeCategory.id}
                plan={plan}
                index={i}
                color={activeCategory.color}
                billing={activeTab === "social" ? "month" : "project"}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Digital-only notice banner — below cards */}
        <AnimatePresence mode="wait">
          {activeCategory.note && (
            <motion.div
              key={activeCategory.id + "-notice"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="max-w-5xl mx-auto mt-8"
            >
              <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-r from-indigo-950/80 via-violet-950/80 to-fuchsia-950/80 backdrop-blur-sm px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_0_40px_rgba(139,92,246,0.12)]">
                {/* Left glow accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 via-violet-500 to-fuchsia-400 rounded-l-2xl" />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

                {/* Icon badge */}
                <div className="relative shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-violet-400/20 flex items-center justify-center shadow-inner">
                  <Download className="w-5 h-5 text-violet-300" />
                </div>

                {/* Text */}
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                    <span className="text-xs font-bold tracking-widest uppercase text-violet-300">
                      Digital Delivery Only
                    </span>
                  </div>
                  <p className="text-sm text-violet-100/80 leading-relaxed">
                    {activeCategory.note}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          Need multiple services?{" "}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Contact us for a custom bundle quote.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
