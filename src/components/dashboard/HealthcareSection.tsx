import { motion } from "framer-motion";
import { Heart, Star, CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { hospitals, gpSurgeries } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const HealthcareSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Heart}
      title="Healthcare"
      source="NHS England"
      frequency="occasional"
      lastUpdated="Dec 2025"
    />

    {/* Hospitals */}
    <h3 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">Hospitals</h3>
    <div className="space-y-2 mb-6">
      {hospitals.map((h) => (
        <div key={h.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex-1 min-w-0">
            <a href={h.website} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-medium text-card-foreground hover:text-accent transition-colors inline-flex items-center gap-1">
              {h.name} <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
            <div className="text-xs text-muted-foreground font-body">{h.type} · {h.distance} miles</div>
          </div>
          {h.hasAE && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-body font-semibold bg-destructive/10 text-destructive">
              A&E
            </span>
          )}
        </div>
      ))}
    </div>

    {/* GP Surgeries */}
    <h3 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">GP Surgeries</h3>
    <div className="space-y-2">
      {gpSurgeries.map((gp) => (
        <div key={gp.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex-1 min-w-0">
            <a href={gp.website} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-medium text-card-foreground hover:text-accent transition-colors inline-flex items-center gap-1">
              {gp.name} <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-muted-foreground font-body">{gp.distance} mi</span>
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 text-accent fill-accent" />
                <span className="text-xs font-body font-medium text-card-foreground">{gp.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {gp.accepting ? (
              <span className="flex items-center gap-1 text-[10px] font-body font-semibold text-success">
                <CheckCircle2 className="h-3 w-3" /> Accepting
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] font-body font-semibold text-destructive">
                <XCircle className="h-3 w-3" /> Full
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default HealthcareSection;
