import { Card, CardContent } from "@/components/ui/card";
import DeerIcon from "./DeerIcon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">About M & I Professional Services</h2>
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
                    No job is too small for us! We're a small family company based in Dane County, and we're 
                    happy to travel anywhere in Wisconsin. Whether it's your home or your business, we treat 
                    every space like it's our own. Our goal is simple: handle all the cleaning, dusting, and 
                    organizing so you can focus on what really matters.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Your property is in good hands with us - whether it's residential, commercial, or anything in between. 
                    We work with all kinds of clients: homes, offices, banks, auto shops, warehouses, construction sites, 
                    hospitals, and more. Have questions or need references? Just give us a call. We'd love to hear from you 
                    and show you what we can do!
                  </p>
                </div>
              </div>
              
              {/* Team Photos */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <h4 className="text-xl font-semibold mb-6 text-primary text-center">Meet Our Team</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/70e612cf-d82b-406d-bc7e-8b734b7d5ec2.png" 
                      alt="John Castro - Account Executive" 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-primary/20"
                    />
                    <p className="font-medium text-primary">John Castro</p>
                    <p className="text-sm text-muted-foreground">Account Executive</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/dee0d1ce-fab0-4b20-8f8e-fd4f1361a80c.png" 
                      alt="Mili Castro - Co-Owner" 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-primary/20"
                    />
                    <p className="font-medium text-primary">Mili Castro</p>
                    <p className="text-sm text-muted-foreground">Co-Owner</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/66bfe33a-3361-4dd3-84f8-29d679b5d629.png" 
                      alt="Ipatia Castro - Co-Owner" 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-primary/20"
                    />
                    <p className="font-medium text-primary">Ipatia Castro</p>
                    <p className="text-sm text-muted-foreground">Co-Owner</p>
                  </div>
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