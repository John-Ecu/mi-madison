import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingData = [
    {
      service: "House Cleaning",
      hourlyRate: "$35 - $50 per cleaner",
      flatFee: "$100 - $350",
      roomRate: "$100 for 1bed/1bath • $30 for each additional bedroom or bathroom",
      sqftRate: "$0.05 - $0.15 per square foot"
    },
    {
      service: "Deep Cleaning",
      hourlyRate: "$40 - $70 per cleaner",
      flatFee: "$200 - $400+",
      roomRate: "$135 for 1bed/1bath • $25 • $30 for each additional bedroom or bathroom",
      sqftRate: "$0.10 - $0.17 per square foot"
    },
    {
      service: "Move-out Cleaning",
      hourlyRate: "$40 - $60 per cleaner",
      flatFee: "$200 - $400+",
      roomRate: "$120 for 1bed/1bath • $20 • $40 for each additional bedroom or bathroom",
      sqftRate: "$0.22 per square foot"
    },
    {
      service: "Commercial & Construction",
      hourlyRate: "$50 - $70 per cleaner",
      flatFee: "$200 - $800",
      roomRate: "Contact member for additional information",
      sqftRate: "$0.10 - $0.50 per square foot"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Price Guide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talk to a representative to see how you can save money and get a clean work environment. 
            All prices above are estimates. We will send final invoice once we visit the job site.
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
            Contact us for a personalized estimate based on your specific needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;