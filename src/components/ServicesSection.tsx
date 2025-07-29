import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Truck, Wrench } from "lucide-react";

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
      </div>
    </section>
  );
};

export default ServicesSection;