import { Card, CardContent } from "@/components/ui/card";

const BeforeAfterSection = () => {
  const beforeAfterImages = [
    {
      before: "/lovable-uploads/66bfe33a-3361-4dd3-84f8-29d679b5d629.png",
      after: "/lovable-uploads/70e612cf-d82b-406d-bc7e-8b734b7d5ec2.png",
      title: "Kitchen Transformation",
      description: "Deep cleaning and sanitization bringing back the shine to countertops and appliances"
    },
    {
      before: "/lovable-uploads/a8b52890-bb22-4b81-bd2a-d61ff209d86e.png",
      after: "/lovable-uploads/dee0d1ce-fab0-4b20-8f8e-fd4f1361a80c.png",
      title: "Bathroom Restoration",
      description: "Complete scrubbing and disinfection for a spotless, hygienic bathroom"
    }
  ];

  return (
    <section id="before-after" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Before & After</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible transformations we achieve with our professional cleaning services
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {beforeAfterImages.map((item, index) => (
            <Card key={index} className="overflow-hidden border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Before */}
                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-semibold">
                      BEFORE
                    </div>
                    <img 
                      src={item.before} 
                      alt={`Before ${item.title}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* After */}
                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
                      AFTER
                    </div>
                    <img 
                      src={item.after} 
                      alt={`After ${item.title}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 bg-card text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
