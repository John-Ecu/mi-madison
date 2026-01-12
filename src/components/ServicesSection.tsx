import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Building2, Truck, Wrench, Sparkles, TreeDeciduous, Snowflake, Lightbulb } from "lucide-react";
import kitchenImage from "@/assets/kitchen-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";
import bathroomImage from "@/assets/bathroom-cleaning.jpg";
import windowImage1 from "@/assets/window-cleaning-1.jpg";
import windowImage2 from "@/assets/window-cleaning-2.jpg";
import windowImage3 from "@/assets/window-cleaning-3.jpg";
import houseCleaningExample from "@/assets/house-cleaning-example.jpg";
import houseCleaningLivingRoom from "@/assets/house-cleaning-living-room.jpg";
import paintingRedDoor from "@/assets/painting-red-door.jpg";
import paintingPorch from "@/assets/painting-porch.jpg";
import powerWashingHouse from "@/assets/power-washing-house.jpg";
import powerWashingEquipment from "@/assets/power-washing-equipment.jpg";
import windowCleaningMilwaukee1 from "@/assets/window-cleaning-milwaukee-1.jpg";
import windowCleaningMilwaukee2 from "@/assets/window-cleaning-milwaukee-2.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("mi");

  const miServices = [
    {
      icon: Home,
      title: "House Cleaning 🧹",
      description: "Comprehensive residential cleaning services for your home. We handle everything from regular maintenance to deep cleaning.",
      features: ["Regular maintenance cleaning", "Deep cleaning services", "Move-in/move-out cleaning", "Post-construction cleanup"],
      images: [houseCleaningExample, houseCleaningLivingRoom]
    },
    {
      icon: Building2,
      title: "Commercial Cleaning 🏢",
      description: "Professional commercial cleaning for offices, retail spaces, and business facilities.",
      features: ["Office cleaning 🖥️", "Retail space maintenance 🏪", "Medical facility cleaning 🏥", "Restaurant cleaning 🍽️"]
    },
    {
      icon: Truck,
      title: "Construction/Landscaping Cleanup",
      description: "Specialized post-construction and landscaping cleanup for residential and commercial properties.",
      features: ["Debris removal", "Dust elimination", "Surface cleaning", "Final touch-ups"],
      video: "/construction-cleanup.mov"
    }
  ];

  const jjServices = [
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "We're known for crystal-clear results! In fact, we've got customers from Milwaukee who make the drive to Madison just for our window cleaning.",
      features: ["Interior and exterior cleaning", "High-rise window access", "Screen cleaning", "Streak-free shine"],
      images: [windowCleaningMilwaukee1, windowCleaningMilwaukee2]
    },
    {
      icon: Wrench,
      title: "Power Washing",
      description: "High-pressure cleaning for driveways, decks, siding, and more. It's amazing what a difference a good power wash makes.",
      features: ["Driveway and sidewalk cleaning", "Deck and patio washing", "Exterior wall cleaning", "Gutter cleaning"],
      images: [powerWashingHouse, powerWashingEquipment]
    },
    {
      icon: TreeDeciduous,
      title: "Tree Trimming",
      description: "Keep your property looking neat and safe with professional tree trimming services.",
      features: ["Branch trimming", "Tree shaping", "Dead limb removal", "Hedge maintenance"]
    },
    {
      icon: Snowflake,
      title: "Snow Shoveling",
      description: "Don't let winter slow you down! We provide reliable snow removal services for residential and commercial properties.",
      features: ["Driveway clearing", "Sidewalk shoveling", "Entrance clearing", "Salt application"]
    },
    {
      icon: Lightbulb,
      title: "Light Maintenance",
      description: "Small maintenance tasks that make a big difference. From changing light bulbs to minor repairs.",
      features: ["Light bulb replacement", "Minor fixture repairs", "General maintenance", "Property upkeep"]
    },
    {
      icon: Home,
      title: "Residential Painting",
      description: "Fresh paint can completely transform a space! We handle interior and exterior painting projects.",
      features: ["Interior room painting", "Exterior house painting", "Trim and accent work", "Color consultation"],
      images: [paintingRedDoor, paintingPorch]
    }
  ];

  const renderServiceCards = (services: typeof miServices) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {service.video && (
              <div className="mb-4">
                <video 
                  src={service.video} 
                  controls 
                  className="w-full h-48 object-cover rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {service.images && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.images.map((img, imgIndex) => (
                  <img key={imgIndex} src={img} alt={`${service.title} example ${imgIndex + 1}`} className="w-full h-32 object-cover rounded-lg" loading="lazy" />
                ))}
              </div>
            )}
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two family companies, one commitment to excellence. Choose below to explore our offerings.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex w-full max-w-xl mx-auto mb-12 p-1 rounded-lg bg-muted gap-1">
            <button
              onClick={() => setActiveTab("mi")}
              className={`flex-1 py-4 text-base md:text-lg rounded-md transition-all font-medium ${
                activeTab === "mi" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              M & I Professionals
              <span className="hidden sm:inline ml-1">- Cleaning</span>
            </button>
            <button
              onClick={() => setActiveTab("jj")}
              className={`flex-1 py-4 text-base md:text-lg rounded-md transition-all font-medium ${
                activeTab === "jj" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              J & J Special Services
              <span className="hidden sm:inline ml-1">- Building Management</span>
            </button>
          </div>
          <TabsList className="hidden">
            <TabsTrigger value="mi">M & I</TabsTrigger>
            <TabsTrigger value="jj">J & J</TabsTrigger>
          </TabsList>

          <TabsContent value="mi" className="mt-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">M & I Professional Services LLC</h3>
              <p className="text-muted-foreground">Your trusted cleaning experts - from cozy homes to large commercial spaces</p>
            </div>
            {renderServiceCards(miServices)}

            {/* M&I Service showcase images */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">Our Work Speaks for Itself</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img src={kitchenImage} alt="Professional kitchen cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" loading="lazy" />
                  <h4 className="font-semibold text-primary">Kitchen Deep Clean</h4>
                  <p className="text-sm text-muted-foreground">Sparkling countertops and appliances</p>
                </div>
                <div className="text-center">
                  <img src={bathroomImage} alt="Bathroom deep cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" loading="lazy" />
                  <h4 className="font-semibold text-primary">Bathroom Restoration</h4>
                  <p className="text-sm text-muted-foreground">Sanitized and gleaming surfaces</p>
                </div>
                <div className="text-center">
                  <img src={officeImage} alt="Commercial office cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" loading="lazy" />
                  <h4 className="font-semibold text-primary">Commercial Spaces</h4>
                  <p className="text-sm text-muted-foreground">Professional business environments</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jj" className="mt-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">J & J Special Services</h3>
              <p className="text-muted-foreground">Building maintenance, outdoor services, and specialty work</p>
            </div>
            {renderServiceCards(jjServices)}

            {/* J&J Window Cleaning Showcase */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">Professional Window Cleaning</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Crystal-clear windows that transform your space. Contact us today for a customized quote.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img src={windowImage1} alt="Professional window cleaning - exterior view" className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />
                </div>
                <div className="text-center">
                  <img src={windowImage2} alt="Crystal clear window cleaning results" className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />
                </div>
                <div className="text-center">
                  <img src={windowImage3} alt="Commercial window cleaning services" className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Us for a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
