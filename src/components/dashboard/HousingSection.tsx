import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { housingPrices, housingTrend } from "@/lib/mockData";
import SectionHeader from "./SectionHeader";

const formatPrice = (v: number) => `£${(v / 1000).toFixed(0)}K`;

const HousingSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
    className="p-4 sm:p-6 rounded-xl bg-card border border-border"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <SectionHeader
      icon={Home}
      title="Housing Prices"
      source="HM Land Registry"
      frequency="monthly"
      lastUpdated="Jan 2026"
    />

    {/* Price cards */}
    <div className="grid grid-cols-2 gap-3 mb-6">
      {[
        { label: "Detached", price: housingPrices.detached },
        { label: "Semi-detached", price: housingPrices.semiDetached },
        { label: "Terraced", price: housingPrices.terraced },
        { label: "Flat", price: housingPrices.flat },
      ].map((h) => (
        <div key={h.label} className="p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="text-xs text-muted-foreground font-body">{h.label}</div>
          <div className="text-lg font-display text-card-foreground">£{h.price.toLocaleString()}</div>
        </div>
      ))}
    </div>

    {/* Trend chart */}
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={housingTrend}>
        <defs>
          <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "DM Sans" }} stroke="hsl(220, 10%, 45%)" />
        <YAxis tick={{ fontSize: 11, fontFamily: "DM Sans" }} stroke="hsl(220, 10%, 45%)" tickFormatter={formatPrice} />
        <Tooltip
          contentStyle={{ fontFamily: "DM Sans", fontSize: 12, borderRadius: 8, border: "1px solid hsl(220, 15%, 88%)" }}
          formatter={(value: any) => [`£${typeof value === 'number' ? value.toLocaleString() : value}`, "Avg Price"]}
        />
        <Area type="monotone" dataKey="avgPrice" stroke="hsl(38, 92%, 50%)" fill="url(#priceGrad)" strokeWidth={2.5} />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

export default HousingSection;
