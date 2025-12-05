import bathroomTubBefore from "@/assets/bathroom-tub-before.jpg";
import bathroomTubAfter from "@/assets/bathroom-tub-after.jpg";
import deepCleanLivingBefore from "@/assets/deep-clean-living-before.jpg";
import deepCleanLivingAfter from "@/assets/deep-clean-living-after.jpg";
import deepCleanKitchenBefore from "@/assets/deep-clean-kitchen-before.jpg";
import deepCleanKitchenAfter from "@/assets/deep-clean-kitchen-after.jpg";
import deepCleanBathroomBefore from "@/assets/deep-clean-bathroom-before.jpg";
import deepCleanBathroomAfter from "@/assets/deep-clean-bathroom-after.jpg";

const BeforeAfterSection = () => {
  const beforeAfterExamples = [
    {
      title: "Bathtub Restoration",
      description: "Expert cleaning removing stubborn stains and buildup, restoring bathtubs to pristine condition",
      before: bathroomTubBefore,
      after: bathroomTubAfter
    },
    {
      title: "Deep Clean - Living Room",
      description: "Complete transformation from cluttered and dirty to spotless and organized",
      before: deepCleanLivingBefore,
      after: deepCleanLivingAfter
    },
    {
      title: "Deep Clean - Kitchen",
      description: "Professional deep cleaning bringing kitchens back to pristine condition",
      before: deepCleanKitchenBefore,
      after: deepCleanKitchenAfter
    },
    {
      title: "Deep Clean - Bathroom",
      description: "Thorough bathroom cleaning and sanitization for a fresh, clean space",
      before: deepCleanBathroomBefore,
      after: deepCleanBathroomAfter
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Transformation Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the remarkable difference our professional cleaning services make
          </p>
        </div>

        <div className="space-y-16">
          {beforeAfterExamples.map((example, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-2 text-primary">{example.title}</h3>
              <p className="text-center text-muted-foreground mb-8">{example.description}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={example.before} 
                      alt={`${example.title} - Before cleaning`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-semibold">
                      Before
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={example.after} 
                      alt={`${example.title} - After cleaning`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
