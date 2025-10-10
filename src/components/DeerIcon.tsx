import deerLogo from "@/assets/deer-logo.png";

interface DeerIconProps {
  className?: string;
}

const DeerIcon = ({ className = "w-12 h-12" }: DeerIconProps) => {
  return (
    <img 
      src={deerLogo}
      alt="M&I Professional Services Deer Logo"
      className={className}
    />
  );
};

export default DeerIcon;
