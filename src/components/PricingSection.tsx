import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingData = [
    {
      service: "House Cleaning",
      hourlyRate: "$28 - $45 per cleaner",
      flatFee: "$90 - $280",
      roomRate: "$85 for 1bed/1bath • $25 for each additional bedroom or bathroom",
      sqftRate: "$0.04 - $0.12 per square foot"
    },
    {
      service: "Deep Cleaning",
      hourlyRate: "$35 - $55 per cleaner",
      flatFee: "$150 - $350",
      roomRate: "$120 for 1bed/1bath • $30 for each additional bedroom or bathroom",
      sqftRate: "$0.08 - $0.15 per square foot"
    },
    {
      service: "Move-out Cleaning",
      hourlyRate: "$35 - $50 per cleaner",
      flatFee: "$180 - $350",
      roomRate: "$110 for 1bed/1bath • $25 for each additional bedroom or bathroom",
      sqftRate: "$0.15 - $0.20 per square foot"
    },
    {
      service: "Commercial & Construction",
      hourlyRate: "$40 - $60 per cleaner",
      flatFee: "$150 - $600",
      roomRate: "Contact us for custom pricing",
      sqftRate: "$0.08 - $0.35 per square foot"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Price Guide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our competitive rates are based on Madison area market standards. We're always willing to work with you on pricing to fit your budget. 
            All prices above are estimates - we provide final quotes after visiting your location.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="font-bold text-primary text-lg">Cleaning Task</div>
              <div className="font-bold text-primary text-lg">Hourly Rate</div>
              <div className="font-bold text-primary text-lg">Flat Fee</div>
              <div className="font-bold text-primary text-lg">Room Rate</div>
              <div className="font-bold text-primary text-lg">Sq Ft Rate</div>
            </div>
            
            {pricingData.map((item, index) => (
              <Card key={index} className="mb-4 border-primary/20">
                <CardContent className="p-4">
                  <div className="grid grid-cols-5 gap-4 items-start">
                    <div className="font-semibold text-primary">{item.service}</div>
                    <div className="text-sm">{item.hourlyRate}</div>
                    <div className="text-sm">{item.flatFee}</div>
                    <div className="text-sm">{item.roomRate}</div>
                    <div className="text-sm">{item.sqftRate}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Get Custom Quote
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Contact us for a personalized estimate - we're flexible and work with your budget!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;