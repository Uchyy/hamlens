import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftRight, Search, TrendingUp, TrendingDown } from "lucide-react";
import { currentAreaStats, comparisonData } from "@/lib/mockData";

interface CompareLocationProps {
  currentPostcode: string;
}

const metrics = [
  { key: "population", label: "Population", format: (v: number) => v.toLocaleString() },
  { key: "avgHousePrice", label: "Avg House Price", format: (v: number) => `£${v.toLocaleString()}` },
  { key: "crimeRate", label: "Crime Rate (per 1K)", format: (v: number) => v.toString() },
  { key: "schoolsGoodOrAbove", label: "Schools Good+", format: (v: number) => `${v}%` },
  { key: "avgRent", label: "Avg Monthly Rent", format: (v: number) => `£${v}` },
  { key: "distanceToCentre", label: "Distance to Centre", format: (v: number) => `${v} mi` },
] as const;

const lowerIsBetter = ["crimeRate", "distanceToCentre"];

const CompareSection = ({ currentPostcode }: CompareLocationProps) => {
  const [compareInput, setCompareInput] = useState("");
  const [showComparison, setShowComparison] = useState(true);

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    setShowComparison(true);
  };

  const current = currentAreaStats;
  const compare = comparisonData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-4 sm:p-6 rounded-xl mb-8 col-span-full"
      style={{
        backgroundColor: "hsl(var(--compare-bg))",
        borderColor: "hsl(var(--compare-border))",
        borderWidth: 1,
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5" style={{ color: "hsl(var(--compare-accent))" }} />
          <h2 className="font-display text-lg sm:text-xl font-bold" style={{ color: "hsl(var(--compare-fg))" }}>Compare Areas</h2>
        </div>

        <form onSubmit={handleCompare} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5" style={{ color: "hsl(var(--compare-muted))" }} />
            <input
              type="text"
              placeholder="Enter postcode or city"
              value={compareInput}
              onChange={(e) => setCompareInput(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-sm font-body focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "hsl(20 22% 16%)",
                border: "1px solid hsl(var(--compare-border))",
                color: "hsl(var(--compare-fg))",
                boxShadow: "0 0 0 0 hsl(var(--compare-accent) / 0.5)",
              }}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all"
            style={{ backgroundColor: "hsl(var(--compare-accent))", color: "hsl(20 25% 10%)" }}
          >
            Compare
          </button>
        </form>
      </div>

      {showComparison && (
        <div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 px-2">
            <div className="text-xs font-body font-semibold uppercase tracking-wider" style={{ color: "hsl(var(--compare-muted))" }}>Metric</div>
            <div className="text-xs font-body font-semibold uppercase tracking-wider text-center" style={{ color: "hsl(var(--compare-accent))" }}>
              {current.postcode} – {current.area}
            </div>
            <div className="text-xs font-body font-semibold uppercase tracking-wider text-center" style={{ color: "hsl(var(--compare-muted))" }}>
              {compare.postcode} – {compare.area}
            </div>
          </div>

          <div className="space-y-1.5">
            {metrics.map((metric) => {
              const currentVal = current[metric.key as keyof typeof current] as number;
              const compareVal = compare[metric.key as keyof typeof compare] as number;
              const diff = currentVal - compareVal;
              const isLowerBetter = lowerIsBetter.includes(metric.key);
              const currentWins = isLowerBetter ? diff < 0 : diff > 0;
              const tie = diff === 0;

              return (
                <div
                  key={metric.key}
                  className="grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg items-center"
                  style={{
                    backgroundColor: "hsl(20 22% 16%)",
                    border: "1px solid hsl(var(--compare-border) / 0.5)",
                  }}
                >
                  <div className="text-xs sm:text-sm font-body" style={{ color: "hsl(var(--compare-fg))" }}>{metric.label}</div>
                  <div className="text-center">
                    <span className={`text-xs sm:text-sm font-body font-semibold ${!tie && currentWins ? "text-success" : ""}`}
                      style={tie || !currentWins ? { color: "hsl(var(--compare-fg))" } : undefined}
                    >
                      {metric.format(currentVal)}
                    </span>
                    {!tie && currentWins && (
                      <span className="inline-flex ml-1">
                        {isLowerBetter
                          ? <TrendingDown className="h-3 w-3 text-success inline" />
                          : <TrendingUp className="h-3 w-3 text-success inline" />
                        }
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    <span className={`text-xs sm:text-sm font-body font-semibold ${!tie && !currentWins ? "text-success" : ""}`}
                      style={tie || currentWins ? { color: "hsl(var(--compare-fg))" } : undefined}
                    >
                      {metric.format(compareVal)}
                    </span>
                    {!tie && !currentWins && (
                      <span className="inline-flex ml-1">
                        {isLowerBetter
                          ? <TrendingDown className="h-3 w-3 text-success inline" />
                          : <TrendingUp className="h-3 w-3 text-success inline" />
                        }
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] font-body mt-3 italic" style={{ color: "hsl(var(--compare-muted))" }}>
            Default comparison: {compare.area} ({compare.postcode}). Enter a different postcode or city above.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CompareSection;
