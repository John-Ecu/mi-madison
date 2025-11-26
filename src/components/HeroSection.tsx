import { Button } from "@/components/ui/button";
import DeerIcon from "./DeerIcon";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-brand-purple-dark text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <DeerIcon className="w-16 h-16 object-contain mr-4" />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold">M&I Teaming up with J&J</h2>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Your Trusted Family-Owned Service Providers</h3>
            <p className="text-xl mb-8 leading-relaxed">
              We're two family companies based in Dane County, serving homes and businesses 
              throughout Wisconsin. <strong>M&amp;I Professionals</strong> handles all your cleaning needs, 
              while <strong>J&amp;J Special Services</strong> takes care of building maintenance, power washing, 
              window cleaning, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative space-y-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3">M&amp;I Professionals - Cleaning</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  House &amp; Commercial Cleaning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Deep Cleaning &amp; Move-in/Move-out
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Residential Painting
                </li>
              </ul>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3">J&amp;J Special Services - Maintenance</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Power Washing &amp; Window Cleaning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Tree Trimming &amp; Landscaping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Snow Shoveling &amp; Light Maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;