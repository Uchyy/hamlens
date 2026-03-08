import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { schools } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const ofstedColor = (rating: string) => {
  switch (rating) {
    case "Outstanding": return "text-success bg-success/10";
    case "Good": return "text-info bg-info/10";
    case "Requires Improvement": return "text-warning bg-warning/10";
    default: return "text-destructive bg-destructive/10";
  }
};

const SchoolsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={GraduationCap}
      title="Schools"
      source="Dept. for Education"
      frequency="occasional"
      lastUpdated="Sep 2025"
    />

    <div className="space-y-2">
      {schools.map((s) => (
        <div key={s.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex-1 min-w-0">
            <a href={s.website} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-medium text-card-foreground hover:text-accent transition-colors inline-flex items-center gap-1">
              {s.name} <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-body font-semibold bg-secondary text-secondary-foreground">
                {s.type}
              </span>
              <span className="text-xs text-muted-foreground font-body">{s.distance} mi</span>
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-body font-semibold ${ofstedColor(s.ofsted)}`}>
            {s.ofsted}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SchoolsSection;
