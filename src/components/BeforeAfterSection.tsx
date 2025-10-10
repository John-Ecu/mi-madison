import bathroomTubBefore from "@/assets/bathroom-tub-before.jpg";
import bathroomTubAfter from "@/assets/bathroom-tub-after.jpg";
import deepCleanBefore from "@/assets/deep-clean-apartment-before.jpg";

const BeforeAfterSection = () => {
  const beforeAfterExamples = [
    {
      title: "Bathtub Restoration",
      description: "Expert cleaning removing stubborn stains and buildup, restoring bathtubs to pristine condition",
      before: bathroomTubBefore,
      after: bathroomTubAfter
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
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Deep Clean Example */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-2 text-primary">Deep Clean Apartment</h3>
            <p className="text-center text-muted-foreground mb-8">Comprehensive deep cleaning bringing spaces back to life</p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <img 
                  src={deepCleanBefore} 
                  alt="Deep clean apartment transformation"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
                  Before Deep Clean
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
