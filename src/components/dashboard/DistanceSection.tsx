import { motion } from "framer-motion";
import { Navigation, Car, Bus, Footprints, Clock } from "lucide-react";
import { distanceToCentre, postcodeData } from "@/lib/mockData";

const DistanceSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <div className="flex items-center gap-2 mb-1">
      <Navigation className="h-5 w-5 text-accent" />
      <h2 className="font-display text-xl text-card-foreground">Distance to City Centre</h2>
    </div>
    <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-5">
      <span>{postcodeData.area} City Centre</span>
      <span className="text-border">·</span>
      <span className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        Calculated via Haversine
      </span>
    </div>

    {/* Big number */}
    <div className="text-center py-6">
      <div className="text-5xl font-display text-accent">{distanceToCentre.miles}</div>
      <div className="text-lg text-muted-foreground font-body mt-1">miles</div>
    </div>

    {/* Transport modes */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Car, label: "By car", value: distanceToCentre.byCar },
        { icon: Bus, label: "By bus", value: distanceToCentre.byBus },
        { icon: Footprints, label: "Walking", value: distanceToCentre.byWalk },
      ].map((m) => (
        <div key={m.label} className="text-center p-3 rounded-lg bg-muted/50 border border-border/50">
          <m.icon className="h-4 w-4 text-accent mx-auto mb-1.5" />
          <div className="text-sm font-body font-semibold text-card-foreground">{m.value}</div>
          <div className="text-[10px] text-muted-foreground font-body">{m.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default DistanceSection;
