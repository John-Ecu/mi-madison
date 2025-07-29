interface DeerIconProps {
  className?: string;
}

const DeerIcon = ({ className = "w-12 h-12" }: DeerIconProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Deer antlers */}
      <path d="M25 15L20 8M35 12L30 5M40 15L45 8M50 12L55 5M75 15L80 8M65 12L70 5M60 15L55 8M50 12L45 5" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Main antler branches */}
      <path d="M30 20C25 15 20 10 15 8M35 18C40 13 45 8 50 6M50 6C55 8 60 13 65 18M70 20C75 15 80 10 85 8" 
            stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      
      {/* Deer head outline */}
      <ellipse cx="50" cy="45" rx="18" ry="22" fill="currentColor" opacity="0.9"/>
      
      {/* Deer ears */}
      <ellipse cx="40" cy="35" rx="4" ry="8" fill="currentColor" transform="rotate(-20 40 35)"/>
      <ellipse cx="60" cy="35" rx="4" ry="8" fill="currentColor" transform="rotate(20 60 35)"/>
      
      {/* Inner ears */}
      <ellipse cx="41" cy="35" rx="2" ry="5" fill="white" opacity="0.8" transform="rotate(-20 41 35)"/>
      <ellipse cx="59" cy="35" rx="2" ry="5" fill="white" opacity="0.8" transform="rotate(20 59 35)"/>
      
      {/* Eyes */}
      <circle cx="44" cy="42" r="3" fill="white"/>
      <circle cx="56" cy="42" r="3" fill="white"/>
      <circle cx="44" cy="42" r="1.5" fill="currentColor"/>
      <circle cx="56" cy="42" r="1.5" fill="currentColor"/>
      
      {/* Nose */}
      <ellipse cx="50" cy="52" rx="2" ry="1.5" fill="currentColor" opacity="0.7"/>
      
      {/* Deer body */}
      <ellipse cx="50" cy="75" rx="12" ry="18" fill="currentColor" opacity="0.8"/>
      
      {/* Legs */}
      <rect x="42" y="88" width="3" height="8" fill="currentColor" rx="1.5"/>
      <rect x="47" y="88" width="3" height="8" fill="currentColor" rx="1.5"/>
      <rect x="52" y="88" width="3" height="8" fill="currentColor" rx="1.5"/>
      <rect x="57" y="88" width="3" height="8" fill="currentColor" rx="1.5"/>
    </svg>
  );
};

export default DeerIcon;