const PuzzlePiece = ({ className, color }: { className?: string; color: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill={color}
  >
    <path d="M25,0 L25,20 C25,25 20,30 15,30 C10,30 5,25 5,20 L5,0 L0,0 L0,40 L20,40 C25,40 30,35 30,30 C30,25 25,20 20,20 L0,20 L0,0 L25,0 Z M75,0 L75,20 C75,25 80,30 85,30 C90,30 95,25 95,20 L95,0 L100,0 L100,40 L80,40 C75,40 70,35 70,30 C70,25 75,20 80,20 L100,20 L100,0 L75,0 Z M0,60 L20,60 C25,60 30,65 30,70 C30,75 25,80 20,80 L0,80 L0,100 L25,100 L25,80 C25,75 20,70 15,70 C10,70 5,75 5,80 L5,100 L0,100 L0,60 Z M100,60 L80,60 C75,60 70,65 70,70 C70,75 75,80 80,80 L100,80 L100,100 L75,100 L75,80 C75,75 80,70 85,70 C90,70 95,75 95,80 L95,100 L100,100 L100,60 Z M40,0 L40,100 L60,100 L60,0 L40,0 Z M0,40 L100,40 L100,60 L0,60 L0,40 Z" />
  </svg>
);

const SimplePuzzlePiece = ({ className, color }: { className?: string; color: string }) => (
  <svg 
    viewBox="0 0 60 60" 
    className={className}
    fill={color}
  >
    <path d="M15 0H45V10C45 10 50 10 50 15C50 20 45 20 45 20V40C45 40 50 40 50 45C50 50 45 50 45 50V60H15V50C15 50 10 50 10 45C10 40 15 40 15 40V20C15 20 10 20 10 15C10 10 15 10 15 10V0Z"/>
  </svg>
);

interface PuzzlePiecesProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PuzzlePieces = ({ position = 'top-left' }: PuzzlePiecesProps) => {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  if (position === 'top-left') {
    return (
      <div className={`absolute ${positionClasses[position]} flex flex-col gap-1 opacity-80`}>
        <div className="flex gap-1">
          <SimplePuzzlePiece className="w-8 h-8 md:w-10 md:h-10 -rotate-12" color="hsl(var(--puzzle-orange))" />
          <SimplePuzzlePiece className="w-8 h-8 md:w-10 md:h-10 rotate-12" color="hsl(var(--puzzle-red))" />
        </div>
        <SimplePuzzlePiece className="w-8 h-8 md:w-10 md:h-10 -rotate-6" color="hsl(var(--puzzle-green))" />
      </div>
    );
  }

  if (position === 'bottom-right') {
    return (
      <div className={`absolute ${positionClasses[position]} opacity-80`}>
        <SimplePuzzlePiece className="w-10 h-10 md:w-12 md:h-12 rotate-45" color="hsl(var(--puzzle-blue))" />
      </div>
    );
  }

  return null;
};

export default PuzzlePieces;
