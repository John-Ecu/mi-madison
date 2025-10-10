import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Truck, Wrench, Sparkles } from "lucide-react";
import kitchenImage from "@/assets/kitchen-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";
import bathroomImage from "@/assets/bathroom-cleaning.jpg";
import windowImage1 from "@/assets/window-cleaning-1.jpg";
import windowImage2 from "@/assets/window-cleaning-2.jpg";
import windowImage3 from "@/assets/window-cleaning-3.jpg";
import houseCleaningExample from "@/assets/house-cleaning-example.jpg";
import paintingRedDoor from "@/assets/painting-red-door.jpg";
import paintingPorch from "@/assets/painting-porch.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      description: "Comprehensive residential cleaning services for your home. We handle everything from regular maintenance to deep cleaning.",
      features: ["Regular maintenance cleaning", "Deep cleaning services", "Move-in/move-out cleaning", "Post-construction cleanup"],
      image: houseCleaningExample
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional commercial cleaning for offices, retail spaces, and business facilities.",
      features: ["Office cleaning", "Retail space maintenance", "Medical facility cleaning", "Restaurant cleaning"]
    },
    {
      icon: Truck,
      title: "Move-out Cleaning",
      description: "Thorough move-out cleaning services to help you get your security deposit back.",
      features: ["Complete property cleaning", "Appliance cleaning", "Carpet cleaning", "Window cleaning"]
    },
    {
      icon: Wrench,
      title: "Construction Cleanup",
      description: "Specialized post-construction cleaning for residential and commercial properties.",
      features: ["Debris removal", "Dust elimination", "Surface cleaning", "Final touch-ups"]
    },
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Professional window cleaning services for crystal-clear views. Contact us for a personalized quote.",
      features: ["Interior and exterior cleaning", "High-rise window access", "Screen cleaning", "Streak-free shine"]
    },
    {
      icon: Sparkles,
      title: "Power Washing",
      description: "High-pressure water cleaning for exterior surfaces, driveways, decks, and more.",
      features: ["Driveway and sidewalk cleaning", "Deck and patio washing", "Exterior wall cleaning", "Gutter cleaning"]
    },
    {
      icon: Home,
      title: "Residential Painting",
      description: "Professional painting services to refresh and transform your home's interior and exterior. We painted this front door in a bright Where's Waldo red and refreshed all the white trim on the front porch.",
      features: ["Interior room painting", "Exterior house painting", "Trim and accent work", "Color consultation"],
      images: [paintingRedDoor, paintingPorch]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Cleaning Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a range of services that we believe will fully meet your needs, 
            whether you own a home or buildings that are too big or small for our skilled and experienced staff.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {service.image && (
                  <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                )}
                {service.images && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.images.map((img, imgIndex) => (
                      <img key={imgIndex} src={img} alt={`${service.title} example ${imgIndex + 1}`} className="w-full h-32 object-cover rounded-lg" />
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

        {/* Service showcase images */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Our Work Speaks for Itself</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={kitchenImage} alt="Professional kitchen cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <h4 className="font-semibold text-primary">Kitchen Deep Clean</h4>
              <p className="text-sm text-muted-foreground">Sparkling countertops and appliances</p>
            </div>
            <div className="text-center">
              <img src={bathroomImage} alt="Bathroom deep cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <h4 className="font-semibold text-primary">Bathroom Restoration</h4>
              <p className="text-sm text-muted-foreground">Sanitized and gleaming surfaces</p>
            </div>
            <div className="text-center">
              <img src={officeImage} alt="Commercial office cleaning" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <h4 className="font-semibold text-primary">Commercial Spaces</h4>
              <p className="text-sm text-muted-foreground">Professional business environments</p>
            </div>
          </div>
        </div>

        {/* Window Cleaning Showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-primary">Professional Window Cleaning</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crystal-clear windows that transform your space. Contact us today for a customized quote based on your specific needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <img src={windowImage1} alt="Professional window cleaning - exterior view" className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
            </div>
            <div className="text-center">
              <img src={windowImage2} alt="Crystal clear window cleaning results" className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
            </div>
            <div className="text-center">
              <img src={windowImage3} alt="Commercial window cleaning services" className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us for a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;