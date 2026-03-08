import { motion } from "framer-motion";
import { Newspaper, Clock, ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "Portsmouth named one of UK's top 10 cities for young professionals",
    source: "The News",
    date: "2 Mar 2026",
    category: "Economy",
    url: "#",
    excerpt: "A new report by Lloyds Bank ranks Portsmouth among the most affordable coastal cities for first-time buyers under 35.",
  },
  {
    title: "New cycle lanes connecting Southsea to city centre approved",
    source: "Portsmouth City Council",
    date: "28 Feb 2026",
    category: "Transport",
    url: "#",
    excerpt: "The £4.2m active travel scheme will add 3.5km of protected cycle routes along key commuter corridors.",
  },
  {
    title: "Crime rates fall for third consecutive quarter in PO2",
    source: "Hampshire Constabulary",
    date: "25 Feb 2026",
    category: "Crime",
    url: "#",
    excerpt: "Anti-social behaviour incidents dropped 12% year-on-year, with community policing cited as a key factor.",
  },
  {
    title: "Queen Alexandra Hospital A&E rated 'Good' by CQC",
    source: "NHS England",
    date: "20 Feb 2026",
    category: "Health",
    url: "#",
    excerpt: "The Care Quality Commission praised improvements in emergency department wait times and patient care standards.",
  },
];

const categoryColor: Record<string, string> = {
  Economy: "bg-accent/15 text-accent",
  Transport: "bg-info/15 text-info",
  Crime: "bg-success/15 text-success",
  Health: "bg-destructive/15 text-destructive",
};

const NewsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.12 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <Newspaper className="h-5 w-5 text-accent" />
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Latest News</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      {newsItems.map((item, i) => (
        <motion.a
          key={item.title}
          href={item.url}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.05 }}
          className="group p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-body font-semibold ${categoryColor[item.category] || "bg-muted text-muted-foreground"}`}>
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-body">
              <Clock className="h-2.5 w-2.5" />
              {item.date}
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-body font-semibold text-card-foreground group-hover:text-accent transition-colors leading-snug mb-2">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed mb-3">
            {item.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-body font-medium text-muted-foreground">{item.source}</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default NewsSection;
