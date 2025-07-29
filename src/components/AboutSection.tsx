import { Card, CardContent } from "@/components/ui/card";
import DeerIcon from "./DeerIcon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">About M&I Professional Services</h2>
          <p className="text-xl text-muted-foreground">A family business committed to excellence</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <DeerIcon className="w-12 h-12 text-primary mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Story</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    No job is too small for our amazing staff at M&I! Need something cleaned? Contact us for quotes! 
                    We are a small family company! We operate in the Dane County area and are willing to travel 
                    anywhere within Wisconsin. We are professionals who understand the importance of a clean environment. 
                    That's why we do all the cleaning, dusting, sanitizing, and organizing so you and your employees 
                    can focus on the tasks at hand.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You can rest assured that our cleaning is residential, commercial, or private building is in good hands! 
                    We offer a range of services that we believe will fully meet your needs, whether you own homes or buildings 
                    that are too big or small for our skilled and experienced staff. This includes banks, auto shops, warehouses, 
                    construction sites, hospitals, etc. We look forward to working with you and keeping your place beautiful. 
                    We have many clients and if you need any references from them, please do not hesitate to contact us.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">Family</div>
                <p className="text-muted-foreground">Owned & operated by the Castro family</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">Wisconsin</div>
                <p className="text-muted-foreground">Serving Dane County & beyond</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">Professional</div>
                <p className="text-muted-foreground">Experienced & skilled team</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;