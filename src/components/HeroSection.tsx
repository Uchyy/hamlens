import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-uk.jpg";

const HeroSection = () => {
  const [postcode, setPostcode] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (postcode.trim()) {
      navigate(`/dashboard?location=${encodeURIComponent(postcode.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] px-8 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="UK cityscape with data overlays"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative z-10 py-12 sm:py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-8xl"
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-1 w-8 sm:w-12 bg-accent rounded-full" />
            <span className="text-accent font-body text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Open Government Data
            </span>
          </div>

          <h1 className="font-display text-white justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6">
            Understand Any UK Area in Seconds
          </h1>

          <p className="text-white/80 font-body text-base sm:text-lg justify-center md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-8xl">
            Explore crime, schools, housing, healthcare and transport data for any postcode across the United Kingdom.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-6xl mt-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <input
                type="text"
                placeholder="Enter postcode (PO4), city name (Portsmouth), or town (Southsea)"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-lg bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-accent font-body font-semibold text-base hover:brightness-110 transition-all shadow-lg"
            >
              <Search className="h-5 w-5" />
              <span>Explore</span>
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-8 sm:mt-10">
            {[
              { label: "Datasets", value: "45+" },
              { label: "Locations", value: "12K+" },
              { label: "Updated", value: "Daily" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-display text-accent tracking-wide"> {stat.value}</div>
                <div className="text-lg sm:text-xl text-white/70 font-body tracking-wider"> {stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;