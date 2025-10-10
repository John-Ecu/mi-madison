import { Card, CardContent } from "@/components/ui/card";
import bathroomBefore from "@/assets/deep-clean-bathroom-before.jpg";
import bathroomAfter from "@/assets/deep-clean-bathroom-after.jpg";
import bathroomTubBefore from "@/assets/bathroom-tub-before.jpg";
import bathroomTubAfter from "@/assets/bathroom-tub-after.jpg";
import kitchenBefore from "@/assets/deep-clean-kitchen-before.jpg";
import kitchenAfter from "@/assets/deep-clean-kitchen-after.jpg";
import apartmentBefore from "@/assets/deep-clean-apartment-before.jpg";
import apartmentAfter from "@/assets/deep-clean-apartment-after.jpg";

const BeforeAfterSection = () => {
  const beforeAfterImages = [
    {
      before: bathroomBefore,
      after: bathroomAfter,
      title: "Bathroom Deep Clean",
      description: "Complete transformation from cluttered to spotless, with thorough sanitization and organization"
    },
    {
      before: bathroomTubBefore,
      after: bathroomTubAfter,
      title: "Bathtub Restoration",
      description: "Expert cleaning removing stubborn stains and buildup, restoring bathtubs to pristine condition"
    },
    {
      before: kitchenBefore,
      after: kitchenAfter,
      title: "Kitchen Deep Clean",
      description: "Professional deep cleaning removing all clutter, sanitizing surfaces, and restoring shine"
    },
    {
      before: apartmentBefore,
      after: apartmentAfter,
      title: "Living Space Deep Clean",
      description: "Complete apartment transformation from overwhelming mess to pristine living environment"
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
