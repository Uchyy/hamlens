import { LucideIcon, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

type DataFrequency = "monthly" | "yearly" | "occasional";

interface TimeOption {
  label: string;
  value: string;
}

const frequencyOptions: Record<DataFrequency, TimeOption[]> = {
  monthly: [
    { label: "Last month", value: "1m" },
    { label: "Last 3 months", value: "3m" },
    { label: "Last 6 months", value: "6m" },
    { label: "Last 12 months", value: "12m" },
  ],
  yearly: [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2021 Census", value: "2021" },
  ],
  occasional: [
    { label: "Latest data", value: "latest" },
  ],
};

const frequencyLabels: Record<DataFrequency, string> = {
  monthly: "Updated monthly",
  yearly: "Updated yearly",
  occasional: "Updated periodically",
};

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  source: string;
  frequency: DataFrequency;
  lastUpdated: string;
  onTimeChange?: (value: string) => void;
}

const SectionHeader = ({ icon: Icon, title, source, frequency, lastUpdated, onTimeChange }: SectionHeaderProps) => {
  const [open, setOpen] = useState(false);
  const options = frequencyOptions[frequency];
  const [selected, setSelected] = useState(options[0].value);
  const selectedLabel = options.find((o) => o.value === selected)?.label || options[0].label;
  const hasMultipleOptions = options.length > 1;

  return (
    <div className="mb-4 sm:mb-5">
      <div className="flex items-start sm:items-center justify-between gap-2 mb-1.5 sm:mb-1">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
          <h2 className="font-display text-lg sm:text-xl text-card-foreground">{title}</h2>
        </div>

        {hasMultipleOptions && (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 border border-border/50 text-xs font-body font-medium text-card-foreground hover:bg-muted transition-colors"
            >
              {selectedLabel}
              <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-20 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[140px]">
                  {options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSelected(opt.value);
                        onTimeChange?.(opt.value);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-body transition-colors ${
                        selected === opt.value
                          ? "text-accent font-semibold bg-accent/5"
                          : "text-card-foreground hover:bg-muted/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] sm:text-xs text-muted-foreground font-body">
        <span>{source}</span>
        <span className="text-border">·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {lastUpdated}
        </span>
        <span className="text-border">·</span>
        <span className="italic">{frequencyLabels[frequency]}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
