import { motion } from "framer-motion";
import { Users, TrendingUp, Briefcase, Home, GraduationCap, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const demographics = [
  { icon: Users, label: "Median Age", value: "39", detail: "UK avg: 40" },
  { icon: Briefcase, label: "Employment Rate", value: "74.2%", detail: "UK avg: 75.6%" },
  { icon: Home, label: "Home Ownership", value: "58%", detail: "UK avg: 63%" },
  { icon: GraduationCap, label: "Degree Educated", value: "32%", detail: "UK avg: 34%" },
  { icon: Heart, label: "Life Expectancy", value: "79.4 yrs", detail: "UK avg: 81.0 yrs" },
  { icon: TrendingUp, label: "Avg Household Income", value: "£31,200", detail: "UK avg: £34,500" },
];

const DemographicsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Users}
      title="Demographics"
      source="ONS Census"
      frequency="occasional"
      lastUpdated="2021"
    />

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {demographics.map((d) => (
        <div
          key={d.label}
          className="p-3 rounded-lg bg-muted/50 border border-border/50 text-center"
        >
          <d.icon className="h-4 w-4 text-accent mx-auto mb-2" />
          <div className="text-lg font-display font-bold text-card-foreground">{d.value}</div>
          <div className="text-xs font-body font-medium text-card-foreground mt-0.5">{d.label}</div>
          <div className="text-[10px] font-body text-muted-foreground mt-1">{d.detail}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default DemographicsSection;
