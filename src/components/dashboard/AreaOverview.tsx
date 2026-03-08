import { motion } from "framer-motion";
import { MapPin, Building2, Users, Navigation, Car, Bus, Footprints, Globe } from "lucide-react";
import { postcodeData, distanceToCentre } from "@/lib/mockData";

const AreaOverviewSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="rounded-xl overflow-hidden bg-card border border-border mt-6"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    {/* Light accent header bar */}
    <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-border bg-accent/5">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
          <Globe className="h-4 w-4 text-accent" />
        </div>
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-card-foreground">Area Overview</h2>
          <p className="text-[11px] font-body text-muted-foreground">
            ONS & Postcodes.io · 2021 Census
          </p>
        </div>
      </div>
    </div>

    {/* Content area */}
    <div className="px-5 sm:px-8 py-5 sm:py-7">
      {/* Key stats */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:mt-7">
            {[
            { icon: MapPin, label: "Postcode Area", value: postcodeData.postcode },
            { icon: Building2, label: "Local Authority", value: postcodeData.localAuthority },
            { icon: MapPin, label: "Region", value: postcodeData.region },
            { icon: Users, label: "Population", value: postcodeData.population.toLocaleString() },
            ].map((item) => (
            <div key={item.label} className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <item.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                <div className="text-lg text-muted-foreground font-body uppercase tracking-wider mb-0.5">{item.label}</div>
                <div className="text-sm text-card-foreground font-body font-semibold">{item.value}</div>
                </div>
            </div>
            ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-5 mt-5 sm:mb-7 sm:mt-7" />

        {/* Distance to City Centre */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Navigation className="h-4 w-4 text-accent" />
            </div>
            <div>
                <div className="text-[11px] text-muted-foreground font-body uppercase tracking-wider mb-0.5">Distance to City Centre</div>
                <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-display font-bold text-accent">{distanceToCentre.miles}</span>
                <span className="text-sm text-muted-foreground font-body">miles</span>
                </div>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            {[
                { icon: Car, label: "By car", value: distanceToCentre.byCar },
                { icon: Bus, label: "By bus", value: distanceToCentre.byBus },
                { icon: Footprints, label: "Walking", value: distanceToCentre.byWalk },
            ].map((m) => (
                <div key={m.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50">
                <m.icon className="h-4 w-4 text-accent shrink-0" />
                <div>
                    <div className="text-sm font-body font-semibold text-card-foreground leading-tight">{m.value}</div>
                    <div className="text-[10px] text-muted-foreground font-body">{m.label}</div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  </motion.div>
);

export default AreaOverviewSection;
