const CityLensLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Buildings */}
    <rect x="4" y="12" width="4" height="12" rx="0.5" fill="currentColor" opacity="0.7" />
    <rect x="9" y="8" width="5" height="16" rx="0.5" fill="currentColor" opacity="0.85" />
    <rect x="15" y="10" width="4" height="14" rx="0.5" fill="currentColor" opacity="0.7" />
    {/* Lens circle */}
    <circle cx="21" cy="14" r="7" stroke="currentColor" strokeWidth="2.2" fill="none" />
    {/* Lens handle */}
    <line x1="26" y1="19" x2="30" y2="23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* Lens glare */}
    <path d="M17 11.5a4.5 4.5 0 0 1 3-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export default CityLensLogo;
