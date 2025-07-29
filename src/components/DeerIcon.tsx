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
      {/* Deer head silhouette with antlers */}
      <path d="M50 20
               C55 15, 60 10, 65 8
               C67 6, 69 5, 71 6
               C73 7, 72 9, 70 10
               L65 15
               C68 12, 72 8, 76 6
               C78 5, 80 6, 79 8
               C78 10, 76 11, 74 12
               L68 18
               C70 20, 72 25, 70 30
               L65 35
               C60 40, 55 42, 50 42
               C45 42, 40 40, 35 35
               L30 30
               C28 25, 30 20, 32 18
               L26 12
               C24 11, 22 10, 21 8
               C20 6, 22 5, 24 6
               C28 8, 32 12, 35 15
               L30 10
               C28 9, 27 7, 29 6
               C31 5, 33 6, 35 8
               C40 10, 45 15, 50 20
               Z
               
               M50 42
               C42 42, 35 48, 32 55
               C30 60, 32 65, 35 68
               C40 72, 45 74, 50 74
               C55 74, 60 72, 65 68
               C68 65, 70 60, 68 55
               C65 48, 58 42, 50 42
               Z" 
            fill="currentColor"/>
      
      {/* Eyes */}
      <circle cx="44" cy="50" r="2" fill="white"/>
      <circle cx="56" cy="50" r="2" fill="white"/>
      
      {/* Nose */}
      <ellipse cx="50" cy="58" rx="1.5" ry="1" fill="white"/>
    </svg>
  );
};

export default DeerIcon;