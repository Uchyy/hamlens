import { motion } from "framer-motion";
import { ExternalLink, Landmark, Train, Heart, ShieldCheck, GraduationCap, Stethoscope } from "lucide-react";
import { usefulLinks, hospitals, schools } from "@/lib/mockData";

const UsefulLinksSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.45 }}
    className="p-4 sm:p-6 rounded-xl"
    style={{
      backgroundColor: "hsl(var(--links-bg))",
      borderColor: "hsl(var(--links-border))",
      borderWidth: 1,
      boxShadow: "var(--shadow-card)",
    }}
  >
    <div className="flex items-center gap-2 mb-4">
      <ExternalLink className="h-5 w-5" style={{ color: "hsl(var(--links-accent))" }} />
      <h2 className="font-display text-lg sm:text-xl font-bold" style={{ color: "hsl(var(--links-fg))" }}>Useful Links</h2>
    </div>

    <div className="space-y-2">
      {[
        { icon: Landmark, ...usefulLinks.council, category: "Local Council" },
        { icon: ShieldCheck, ...usefulLinks.police, category: "Police" },
        { icon: Heart, ...usefulLinks.nhs, category: "NHS" },
        { icon: Train, ...usefulLinks.transport, category: "Transport" },
      ].map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-lg transition-colors group"
          style={{ backgroundColor: "hsl(160 22% 16%)", border: "1px solid hsl(var(--links-border))" }}
        >
          <div className="flex items-center gap-2.5">
            <link.icon className="h-4 w-4 shrink-0" style={{ color: "hsl(var(--links-accent))" }} />
            <div>
              <div className="text-sm font-body font-medium transition-colors" style={{ color: "hsl(var(--links-fg))" }}>
                {link.name}
              </div>
              <div className="text-[10px] font-body" style={{ color: "hsl(var(--links-muted))" }}>{link.category}</div>
            </div>
          </div>
          <ExternalLink className="h-3 w-3 shrink-0" style={{ color: "hsl(var(--links-muted))" }} />
        </a>
      ))}

      <div className="pt-2">
        <div className="text-[10px] font-body font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(var(--links-muted))" }}>
          Hospitals & Schools
        </div>
        {hospitals.slice(0, 2).map((h) => (
          <a
            key={h.name}
            href={h.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Stethoscope className="h-3.5 w-3.5" style={{ color: "hsl(var(--links-muted))" }} />
              <span className="text-xs font-body transition-colors" style={{ color: "hsl(var(--links-fg))" }}>{h.name}</span>
            </div>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--links-muted))" }} />
          </a>
        ))}
        {schools.slice(0, 3).map((s) => (
          <a
            key={s.name}
            href={s.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" style={{ color: "hsl(var(--links-muted))" }} />
              <span className="text-xs font-body transition-colors" style={{ color: "hsl(var(--links-fg))" }}>{s.name}</span>
            </div>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--links-muted))" }} />
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

export default UsefulLinksSection;
