import { motion } from "framer-motion";
import { Shield, TrendingDown, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { crimeData, crimeSummary } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const CrimeSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Shield}
      title="Crime Statistics"
      source="UK Police API"
      frequency="monthly"
      lastUpdated="Feb 2026"
    />

    {/* Summary list */}
    <div className="space-y-2.5 mb-6">
      {crimeSummary.map((c) => (
        <div key={c.category} className="flex items-center justify-between text-sm font-body">
          <span className="text-card-foreground">{c.category}</span>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-card-foreground">{c.count}</span>
            <span className={`flex items-center gap-0.5 text-xs font-semibold ${c.change < 0 ? "text-success" : "text-destructive"}`}>
              {c.change < 0 ? <TrendingDown className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
              {Math.abs(c.change)}%
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Chart */}
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={crimeData} barGap={2}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Sans" }} stroke="hsl(220, 10%, 45%)" />
        <YAxis tick={{ fontSize: 11, fontFamily: "DM Sans" }} stroke="hsl(220, 10%, 45%)" />
        <Tooltip contentStyle={{ fontFamily: "DM Sans", fontSize: 12, borderRadius: 8, border: "1px solid hsl(220, 15%, 88%)" }} />
        <Bar dataKey="violence" fill="hsl(0, 72%, 51%)" radius={[2, 2, 0, 0]} name="Violence" />
        <Bar dataKey="asb" fill="hsl(38, 92%, 50%)" radius={[2, 2, 0, 0]} name="ASB" />
        <Bar dataKey="vehicle" fill="hsl(205, 75%, 50%)" radius={[2, 2, 0, 0]} name="Vehicle" />
        <Bar dataKey="burglary" fill="hsl(152, 60%, 40%)" radius={[2, 2, 0, 0]} name="Burglary" />
      </BarChart>
    </ResponsiveContainer>

    <div className="flex gap-4 mt-3 flex-wrap">
      {[
        { label: "Violence", color: "hsl(0, 72%, 51%)" },
        { label: "ASB", color: "hsl(38, 92%, 50%)" },
        { label: "Vehicle", color: "hsl(205, 75%, 50%)" },
        { label: "Burglary", color: "hsl(152, 60%, 40%)" },
      ].map((l) => (
        <div key={l.label} className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
          {l.label}
        </div>
      ))}
    </div>
  </motion.div>
);

export default CrimeSection;
