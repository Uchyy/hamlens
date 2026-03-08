import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  TrendingDown, TrendingUp, Minus, Lightbulb, Shield, Home, Users,
  GraduationCap, Landmark, Star, AlertTriangle, MapPin, ChevronLeft, ChevronRight,
} from "lucide-react";
import { insights, cityHighlights } from "@/lib/mockData";
import { useIsMobile } from "@/hooks/use-mobile";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  home: Home,
  users: Users,
  "graduation-cap": GraduationCap,
};

type InsightCard = {
  type: "trend";
  label: string;
  summary: string;
  change: number;
  icon: string;
} | {
  type: "highlight";
  category: string;
  icon: React.ElementType;
  items: string[];
  style: "positive" | "negative" | "neutral";
};

const allCards: InsightCard[] = [
  ...insights.map((i) => ({ type: "trend" as const, ...i })),
  { type: "highlight", category: "Known For", icon: MapPin, items: cityHighlights.knownFor, style: "neutral" },
  { type: "highlight", category: "Landmarks", icon: Landmark, items: cityHighlights.landmarks, style: "neutral" },
  { type: "highlight", category: "Strengths", icon: Star, items: cityHighlights.best, style: "positive" },
  { type: "highlight", category: "Challenges", icon: AlertTriangle, items: cityHighlights.worst, style: "negative" },
];

const usePerPage = () => {
  const isMobile = useIsMobile();
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);
      else if (w < 1024) setPerPage(2);
      else setPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
};

const InsightsSection = () => {
  const perPage = usePerPage();
  const totalPages = Math.ceil(allCards.length / perPage);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  // Reset page if perPage changes and page is out of range
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const startIdx = page * perPage;
  const visibleCards = allCards.slice(startIdx, startIdx + perPage);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden col-span-full"
      style={{
        background: "linear-gradient(135deg, hsl(var(--insights-bg)) 0%, hsl(210 35% 18%) 50%, hsl(205 32% 22%) 100%)",
        border: "1px solid hsl(var(--insights-border))",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative z-10 p-5 sm:p-7 md:p-8">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" style={{ color: "hsl(var(--insights-accent))" }} />
            <span className="text-sm font-display font-bold tracking-wide" style={{ color: "hsl(var(--insights-fg))" }}>
              Key Insights
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === page ? 20 : 6,
                    height: 6,
                    backgroundColor: i === page ? "hsl(var(--insights-accent))" : "hsl(var(--insights-muted))",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-1">
              <button onClick={prev} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:brightness-125" style={{ backgroundColor: "hsl(var(--insights-accent) / 0.15)", color: "hsl(var(--insights-fg))" }}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:brightness-125" style={{ backgroundColor: "hsl(var(--insights-accent) / 0.15)", color: "hsl(var(--insights-fg))" }}>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="relative min-h-[260px] sm:min-h-[240px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute inset-0 grid gap-4 ${
                perPage === 1 ? "grid-cols-1" : perPage === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {visibleCards.map((card, i) => (
                <div
                  key={`${page}-${i}`}
                  className="rounded-xl p-4 sm:p-5 flex flex-col bg-card border border-border"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
                >
                  {card.type === "trend" ? (
                    <TrendCard card={card} />
                  ) : (
                    <HighlightCard card={card} />
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile page counter */}
        <div className="mt-3 text-center sm:hidden">
          <span className="text-xs font-body" style={{ color: "hsl(var(--insights-muted))" }}>
            {page + 1} / {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
};

const TrendCard = ({ card }: { card: Extract<InsightCard, { type: "trend" }> }) => {
  const Icon = iconMap[card.icon] || Shield;
  const isPositive = card.change > 0;
  const isNegative = card.change < 0;
  const isNeutral = card.change === 0;

  const trendColor = card.icon === "shield"
    ? (isNegative ? "hsl(152 60% 50%)" : "hsl(0 72% 60%)")
    : isNeutral
      ? undefined
      : isPositive
        ? "hsl(var(--insights-accent))"
        : "hsl(0 72% 60%)";

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent/10">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-display font-bold text-card-foreground">
            {card.label}
          </h3>
          <div className="flex items-center gap-1 mt-0.5">
            {isNegative ? <TrendingDown className="h-3 w-3" style={{ color: trendColor }} />
              : isPositive ? <TrendingUp className="h-3 w-3" style={{ color: trendColor }} />
              : <Minus className="h-3 w-3 text-muted-foreground" />}
            <span className="text-xs font-display font-semibold" style={{ color: trendColor }}>
              {isNeutral ? "Stable" : `${Math.abs(card.change)}%`}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs sm:text-sm font-body leading-relaxed flex-1 text-muted-foreground">
        {card.summary}
      </p>
      <div className="mt-3 pt-3 border-t border-border">
        <span className="text-[10px] font-body uppercase tracking-wider text-muted-foreground">
          Year-on-year change
        </span>
      </div>
    </div>
  );
};

const HighlightCard = ({ card }: { card: Extract<InsightCard, { type: "highlight" }> }) => {
  const Icon = card.icon;
  const itemColor = card.style === "positive"
    ? "hsl(152 60% 50%)"
    : card.style === "negative"
      ? "hsl(0 72% 60%)"
      : "hsl(var(--foreground))";
  const bulletColor = card.style === "positive"
    ? "hsl(152 60% 50%)"
    : card.style === "negative"
      ? "hsl(0 72% 60%)"
      : undefined;
  const bullet = card.style === "positive" ? "✓" : card.style === "negative" ? "✗" : "•";

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent/10">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <h3 className="text-sm font-display font-bold text-card-foreground">
          {card.category}
        </h3>
      </div>
      <ul className="space-y-1.5 flex-1">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs sm:text-sm font-body leading-snug">
            <span className="shrink-0 mt-0.5" style={{ color: bulletColor }}>
              {bullet}
            </span>
            <span className={card.style === "neutral" ? "text-muted-foreground" : ""} style={{ color: card.style !== "neutral" ? itemColor : undefined }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightsSection;
