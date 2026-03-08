import { motion } from "framer-motion";
import { Train, Clock } from "lucide-react";
import { trainStations, travelTimes } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const TransportSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Train}
      title="Transport"
      source="National Rail"
      frequency="occasional"
      lastUpdated="Mar 2026"
    />

    {/* Nearest stations */}
    <h3 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">Nearest Stations</h3>
    <div className="space-y-2 mb-6">
      {trainStations.map((s) => (
        <div key={s.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-body font-medium text-card-foreground">{s.name}</span>
          </div>
          <span className="text-xs text-muted-foreground font-body">{s.distance} mi</span>
        </div>
      ))}
    </div>

    {/* Travel times */}
    <h3 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">Travel Times</h3>
    <div className="space-y-2">
      {travelTimes.map((t) => (
        <div key={t.destination} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <span className="text-sm font-body font-medium text-card-foreground">{t.destination}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground font-body">
              <Clock className="h-3 w-3" />
              {t.duration}
            </div>
            {t.changes > 0 && (
              <span className="text-[10px] font-body text-muted-foreground">({t.changes} change)</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default TransportSection;
