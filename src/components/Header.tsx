import { Button } from "@/components/ui/button";
import DeerIcon from "./DeerIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <DeerIcon className="w-16 h-16 object-contain" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold">M&I + J&J Pro Services</h1>
              <p className="text-sm opacity-90">Small Family-Owned Companies</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#pricing" className="hover:opacity-80 transition-opacity">Pricing</a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
          <Button 
            variant="secondary" 
            className="hidden md:block"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;