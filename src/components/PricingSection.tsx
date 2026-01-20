import { Button } from "@/components/ui/button";
import { Clock, Sparkles, Users } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Transparent & Fair Pricing</h2>
          <p className="text-muted-foreground mb-8">
            Every space is unique. We provide personalized quotes based on your specific needs — no hidden fees, just honest pricing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-puzzle-orange" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-puzzle-green" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-puzzle-blue" />
              <span>Budget-Friendly Options</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;