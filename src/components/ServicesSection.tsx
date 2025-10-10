import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Truck, Wrench, Sparkles } from "lucide-react";
import kitchenImage from "@/assets/kitchen-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";
import bathroomImage from "@/assets/bathroom-cleaning.jpg";
import windowCleaning1 from "@/assets/window-cleaning-1.jpg";
import windowCleaning2 from "@/assets/window-cleaning-2.jpg";
import windowCleaning3 from "@/assets/window-cleaning-3.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      description: "Comprehensive residential cleaning services for your home. We handle everything from regular maintenance to deep cleaning.",
      features: ["Regular maintenance cleaning", "Deep cleaning services", "Move-in/move-out cleaning", "Post-construction cleanup"]
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
      description: "Professional window cleaning for residential and commercial properties. Contact us for a custom quote.",
      features: ["Exterior window cleaning", "High-rise capabilities", "Streak-free results", "Custom quotes available"]
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
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

        {/* Window Cleaning Section */}
        <div className="mt-20 bg-secondary/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Professional Window Cleaning</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              We provide expert window cleaning services for buildings of all sizes. From residential homes to high-rise commercial properties, our experienced team delivers crystal-clear results.
            </p>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us for a Quote
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={windowCleaning1} alt="Professional window cleaning service - exterior work" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={windowCleaning2} alt="High-rise window cleaning with ladder" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={windowCleaning3} alt="Commercial building window cleaning" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;