import HeroSection from "@/components/HeroSection";
import DataCategoryCard from "@/components/DataCategoryCard";
import SiteFooter from "@/components/SiteFooter";
import { Shield, Home, Heart, BarChart3, MapPin, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Categories section */}
      <section className="container py-12 sm:py-20 px-4 mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
            Comprehensive UK Datasets
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto">
            Aggregating government datasets into one interactive, location-based dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <DataCategoryCard
            icon={Shield}
            title="Crime Statistics"
            description="Street-level crime data from the Police API, broken down by category and month."
            stats="43 Police Forces"
            delay={0.1}
          />
          <DataCategoryCard
            icon={Heart}
            title="NHS Services"
            description="Locate hospitals, GP surgeries, pharmacies, and dentists with ratings and wait times."
            stats="58,000+ Services"
            delay={0.2}
          />
          <DataCategoryCard
            icon={Home}
            title="Housing Data"
            description="Property prices, transactions, and market trends from HM Land Registry."
            stats="28M+ Records"
            delay={0.3}
          />
          <DataCategoryCard
            icon={BarChart3}
            title="Demographics"
            description="Census data including population, employment, deprivation indices, and more."
            stats="ONS Data"
            delay={0.4}
          />
          <DataCategoryCard
            icon={MapPin}
            title="Local Services"
            description="Schools, transport links, and council services mapped to your location."
            stats="200K+ Points"
            delay={0.5}
          />
          <DataCategoryCard
            icon={Database}
            title="Planning & Land"
            description="Planning applications, land use classifications, and environmental data."
            stats="Real-time API"
            delay={0.6}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
