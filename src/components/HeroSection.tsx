import { Button } from "@/components/ui/button";
import DeerIcon from "./DeerIcon";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-brand-purple-dark text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <DeerIcon className="w-16 h-16 mr-4" />
              <h2 className="text-5xl font-bold">M&I Professionals</h2>
            </div>
            <h3 className="text-3xl font-semibold mb-6">Your Trusted Family-Owned Cleaning Service</h3>
            <p className="text-xl mb-8 leading-relaxed">
              We're a small family company based in Dane County, serving homes and businesses 
              throughout Wisconsin. We know how important a clean space is - that's why we handle 
              all the cleaning, dusting, and organizing so you can focus on what matters most to you.
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
                className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-4">Why Choose M&I?</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Small family company with personal touch
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Serving all of Dane County & Wisconsin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Professional and experienced staff
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                  Flexible scheduling to meet your needs
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