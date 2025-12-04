import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tracy Lewis",
      role: "Private Practice Psychotherapist",
      quote: "Great service! They've been cleaning my home for over a decade."
    },
    {
      name: "Ryan",
      role: "Property Manager, Smith Management",
      quote: "I rely on them for summer turnovers. They handle everything—maintenance, appliance changes, cleaning, painting, and even small repairs. Highly recommend giving them a shot!"
    },
    {
      name: "Kurt",
      role: "Cleaning Contractor",
      quote: "I handle high-volume commercial and residential cleaning, and M & I has helped me with countless projects. When last-minute jobs come up, it's usually impossible to find reliable help the same day—but M & I always comes through. They continue to impress me!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers we're proud to serve
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;