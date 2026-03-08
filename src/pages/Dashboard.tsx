import { postcodeData } from "@/lib/mockData";
import { ArrowLeft, BarChart3, MapPin, Stethoscope, Train } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import AreaOverview  from "@/components/dashboard/AreaOverview";
import DemographicsSection from "@/components/dashboard/DemographicsSection";
import CompareSection from "@/components/dashboard/CompareSection";
import PhotosSection from "@/components/dashboard/PhotosSection";
import InsightsSection from "@/components/dashboard/InsightsSection";
import NewsSection from "@/components/dashboard/NewsSection";
import CrimeSection from "@/components/dashboard/CrimeSection";
import HousingSection from "@/components/dashboard/HousingSection";
import HealthcareSection from "@/components/dashboard/HealthcareSection";
import SchoolsSection from "@/components/dashboard/SchoolsSection";
import DentistSection from "@/components/dashboard/DentistSection";
import TransportSection from "@/components/dashboard/TransportSection";
import SiteFooter from "@/components/SiteFooter";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "PO2";

  const SectionDivider = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
    <div className="flex items-center gap-3 pt-4 sm:pt-6 pb-2">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <h2 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );


  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div className="relative overflow-hidden " style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-vh relative z-10 py-6 sm:py-10 mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body text-sm mb-4 sm:mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-8 rounded-full bg-accent" />
                <span className="text-accent font-body text-xs font-semibold tracking-widest uppercase">
                  Area Report
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-bold leading-tight">
                {postcodeData.area}
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/50 font-body mt-1">
                {location.toUpperCase()} · {postcodeData.localAuthority} · {postcodeData.region}
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="px-4 py-2.5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-center">
                <div className="text-lg sm:text-xl font-display font-bold text-accent">{postcodeData.population.toLocaleString()}</div>
                <div className="text-[10px] sm:text-xs text-primary-foreground/50 font-body">Population</div>
              </div>
              <div className="px-4 py-2.5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-center">
                <div className="text-lg sm:text-xl font-display font-bold text-accent">{postcodeData.latitude.toFixed(2)}°</div>
                <div className="text-[10px] sm:text-xs text-primary-foreground/50 font-body">Latitude</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 sm:py-12 space-y-10 sm:space-y-14">
         <AreaOverview/>   

        {/* ── Photos ── */}
        <PhotosSection />

        {/* ── Key Insights ── */}
        <InsightsSection />

        {/* ── Latest News ── */}
        <NewsSection />

        {/* ── Core Data ── */}
        <div>
          <SectionDivider icon={BarChart3} label="Core Data" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-4">
            <CrimeSection />
            <HousingSection />
          </div>
        </div>

        {/* ── Services & Education ── */}
        <div>
          <SectionDivider icon={Stethoscope} label="Services & Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mt-4">
            <HealthcareSection />
            <DentistSection />
            <SchoolsSection />
          </div>
        </div>

        {/* ── Transport ── */}
        <div>
          <SectionDivider icon={Train} label="Transport & Connectivity" />
          <div className="mt-4">
            <TransportSection />
          </div>
        </div>

        {/* ── Demographics ── */}
        <div>
          <SectionDivider icon={MapPin} label="People & Place" />
          <div className="mt-4">
            <DemographicsSection />
          </div>
        </div>

        {/* ── Compare ── */}
        <CompareSection currentPostcode={location.toUpperCase()} />

      </div>

      <SiteFooter />

     
        
    </div>
  );
}   

export default Dashboard