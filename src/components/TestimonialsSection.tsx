import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tracy",
      role: "UW Madison Staff",
      context: "House Cleaning - Weekly Service",
      quote: "Great service! They have been cleaning my house for over a decade, wouldn't have it any other way!",
      highlight: "Giant dog owner - extra vacuuming needed!"
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

        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
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
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{testimonial.context}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.highlight}</p>
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