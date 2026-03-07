import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DataCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  delay?: number;
}

const DataCategoryCard = ({ icon: Icon, title, description, stats, delay = 0 }: DataCategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group w-full h-full p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"      
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="font-display text-4xl text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">{description}</p>
      <div className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{stats}</div>
    </motion.div>
  );
};

export default DataCategoryCard;
