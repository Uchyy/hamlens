import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import cityLensLogo from "@/assets/citylens-logo.png";

const SiteHeader = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 border-b border-border/50 backdrop-blur-md ${isDashboard ? "bg-card/90" : "bg-primary/90"}`}>
      <div className="container flex items-center justify-between h-14 sm:h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={cityLensLogo} alt="HamLens" className="w-8 h-8 rounded-lg object-contain" />
          <span className={`font-display text-lg font-bold tracking-tight ${isDashboard ? "text-card-foreground" : "text-primary-foreground"}`}>
            HamLens
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {["Datasets", "About", "API"].map((item) => (
            <span
              key={item}
              className={`text-sm font-body font-medium cursor-pointer transition-colors ${
                isDashboard
                  ? "text-muted-foreground hover:text-card-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`sm:hidden p-2 rounded-lg transition-colors ${
            isDashboard ? "text-card-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`sm:hidden border-t border-border/50 ${isDashboard ? "bg-card" : "bg-primary"}`}>
          <div className="container py-3 flex flex-col gap-1">
            {["Datasets", "About", "API"].map((item) => (
              <span
                key={item}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-body font-medium cursor-pointer py-2.5 px-3 rounded-lg transition-colors ${
                  isDashboard
                    ? "text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
