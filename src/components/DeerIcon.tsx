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
      {/* Exact deer head silhouette matching the reference image */}
      <path d="M50 10
               L45 5 L40 8 L35 5 L30 10 L25 8 L20 12 L18 18 L22 22 L28 20
               L32 25 L35 30 L40 35 L45 38 L50 40 L55 38 L60 35 L65 30 L68 25
               L72 20 L78 22 L82 18 L80 12 L75 8 L70 10 L65 5 L60 8 L55 5 L50 10
               
               M35 30 
               C30 35, 28 45, 30 55
               C32 65, 38 70, 45 72
               L50 73 L55 72
               C62 70, 68 65, 70 55
               C72 45, 70 35, 65 30
               
               L60 35 L55 38 L50 40 L45 38 L40 35 L35 30
               
               Z" 
            fill="currentColor"/>
    </svg>
  );
};

export default DeerIcon;