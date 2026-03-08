import { Link } from "react-router-dom";
import cityLensLogo from "@/assets/citylens-logo.png";

const SiteFooter = () => (
  <footer style={{ backgroundColor: "hsl(var(--utility-card-bg))", borderTop: "1px solid hsl(var(--utility-card-border))" }}>
    <div className="container py-10 sm:py-14 px-8 sm:px-8 mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-3">
            <img src={cityLensLogo} alt="HamLens" className="w-12 h-12 rounded-md object-contain" />
            <span className="font-display text-lg font-bold tracking-tight" style={{ color: "hsl(var(--utility-card-fg))" }}>HamLens</span>
          </Link>
          <p className="text-sm font-body leading-relaxed max-w-xs" style={{ color: "hsl(var(--utility-card-muted))" }}>
            Explore cities and neighbourhoods using open public data.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--utility-card-fg))" }}>
            Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Compare Areas", to: "/dashboard?location=PO2" },
              { label: "About", to: "#" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-body hover:underline text-accent transition-colors"
                  style={{ color: "hsl(var(--utility-card-muted))" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Data Sources */}
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--utility-card-fg))" }}>
            Data Sources
          </h4>
          <ul className="space-y-2">
            {[
              { label: "UK Police", url: "https://data.police.uk" },
              { label: "Office for National Statistics", url: "https://www.ons.gov.uk" },
              { label: "HM Land Registry", url: "https://www.gov.uk/government/organisations/land-registry" },
              { label: "OpenStreetMap", url: "https://www.openstreetmap.org" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body hover:underline text-accent transition-colors"
                  style={{ color: "hsl(var(--utility-card-muted))" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6" style={{ borderTop: "1px solid hsl(var(--utility-card-border))" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body" style={{ color: "hsl(var(--utility-card-muted))" }}>
            Built with open data.
          </p>
          <p className="text-xs font-body" style={{ color: "hsl(var(--utility-card-muted))" }}>
            © 2026 HamLens
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
