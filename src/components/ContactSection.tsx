import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, DollarSign } from "lucide-react";

const ContactSection = () => {
  const teamMembers = [
    {
      name: "John Castro",
      title: "Account Executive",
      phone: "608-358-3706",
      email: "jc.miprofessionalservices@gmail.com"
    },
    {
      name: "Mili Castro",
      title: "Co-Owner",
      phone: "608-698-7669",
      email: "miprofessionalservices0310@gmail.com"
    },
    {
      name: "Ipatia Castro",
      title: "Co-Owner",
      phone: "608-573-0470",
      email: "ipatiacastro3088@yahoo.com"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Our Team</h2>
          <p className="text-lg opacity-90">
            Thank you for your interest in M&amp;I Professionals and J&amp;J Special Services. We can't wait to work together!
          </p>
          <p className="text-base opacity-80 mt-2">
            Same team, same great service - whether you need cleaning or maintenance!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-primary-foreground text-lg">{member.name}</CardTitle>
                <p className="text-primary-foreground/80 text-sm">{member.title}</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <a href={`tel:${member.phone}`} className="flex items-center hover:opacity-80 transition-opacity">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center hover:opacity-80 transition-opacity">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="break-all text-xs">{member.email}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-primary-foreground text-lg">
                <DollarSign className="w-5 h-5 mr-2" />
                Zelle Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground text-sm space-y-1">
              <p><strong>Email:</strong> john.castroflores2000@gmail.com</p>
              <p><strong>Phone:</strong> 608.358.3706</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-primary-foreground text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Service Area
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground text-sm">
              <p className="opacity-90">Madison, WI &amp; Dane County</p>
              <p className="opacity-90 mt-1">Travel available throughout Wisconsin</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm opacity-80 mb-4">Contact team members for approved payment methods</p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
