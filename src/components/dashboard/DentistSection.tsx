import { motion } from "framer-motion";
import { Smile, Star, CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { dentists } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const DentistSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Smile}
      title="Dentists"
      source="NHS England"
      frequency="occasional"
      lastUpdated="Nov 2025"
    />

    <div className="space-y-2">
      {dentists.map((d) => (
        <div key={d.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex-1 min-w-0">
            <a href={d.website} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-medium text-card-foreground hover:text-accent transition-colors inline-flex items-center gap-1">
              {d.name} <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-muted-foreground font-body">{d.distance} mi</span>
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 text-accent fill-accent" />
                <span className="text-xs font-body font-medium text-card-foreground">{d.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {d.nhsAccepting ? (
              <span className="flex items-center gap-1 text-[10px] font-body font-semibold text-success">
                <CheckCircle2 className="h-3 w-3" /> NHS
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] font-body font-semibold text-muted-foreground">
                <XCircle className="h-3 w-3" /> Private only
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default DentistSection;
