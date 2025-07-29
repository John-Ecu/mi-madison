interface DeerIconProps {
  className?: string;
}

const DeerIcon = ({ className = "w-12 h-12" }: DeerIconProps) => {
  return (
    <img 
      src="/lovable-uploads/a8b52890-bb22-4b81-bd2a-d61ff209d86e.png"
      alt="M&I Professional Services Deer Logo"
      className={className}
      style={{ filter: 'brightness(0) invert(1)' }} // Makes it match the current text color
    />
  );
};

export default DeerIcon;