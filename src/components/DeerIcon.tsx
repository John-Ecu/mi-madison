
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
      {/* Clean deer head silhouette with antlers */}
      <g>
        {/* Left antler */}
        <path d="M35 20 L30 15 L28 10 M35 20 L32 12 L30 8 M35 20 L38 15 L40 10" 
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Right antler */}
        <path d="M65 20 L70 15 L72 10 M65 20 L68 12 L70 8 M65 20 L62 15 L60 10" 
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Deer head */}
        <path d="M35 20 
                 C30 18, 25 25, 25 35
                 C25 45, 28 55, 35 65
                 C40 75, 45 80, 50 80
                 C55 80, 60 75, 65 65
                 C72 55, 75 45, 75 35
                 C75 25, 70 18, 65 20
                 L65 20
                 C62 22, 58 25, 50 25
                 C42 25, 38 22, 35 20 Z" 
              fill="currentColor"/>
        
        {/* Ears */}
        <ellipse cx="40" cy="28" rx="5" ry="8" fill="currentColor"/>
        <ellipse cx="60" cy="28" rx="5" ry="8" fill="currentColor"/>
        
        {/* Eyes */}
        <circle cx="42" cy="40" r="2" fill="white"/>
        <circle cx="58" cy="40" r="2" fill="white"/>
        
        {/* Nose */}
        <ellipse cx="50" cy="55" rx="3" ry="2" fill="white"/>
      </g>
    </svg>
  );
};

export default DeerIcon;
