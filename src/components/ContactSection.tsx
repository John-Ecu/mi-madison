import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CreditCard, DollarSign, Check } from "lucide-react";

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
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Our Team</h2>
          <p className="text-xl opacity-90">
            Thank you for your time and interest in M&I Professional Services. 
            We can't wait to get in touch and work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardHeader>
                    <CardTitle className="text-primary-foreground">{member.name}</CardTitle>
                    <p className="text-primary-foreground/80">{member.title}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3" />
                      <a href={`tel:${member.phone}`} className="hover:opacity-80">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3" />
                      <a href={`mailto:${member.email}`} className="hover:opacity-80 break-all">
                        {member.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary-foreground/10 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-3" />
                <h4 className="text-lg font-semibold">Service Area</h4>
              </div>
              <p className="opacity-90">Madison, Wisconsin & surrounding Dane County area</p>
              <p className="opacity-90 mt-2">Available for travel throughout Wisconsin</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Payment Methods</h3>
            
            <div className="space-y-6">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-foreground">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Zelle Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-primary-foreground">
                  <p><strong>Email:</strong> john.castroflores2000@gmail.com</p>
                  <p><strong>Phone:</strong> 608.358.3706</p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-foreground">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Wire Transfer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-primary-foreground space-y-2">
                  <p><strong>Bank:</strong> Summit Credit Union</p>
                  <p><strong>Routing #:</strong> Contact Member</p>
                  <p><strong>Account #:</strong> Contact Member</p>
                  <p><strong>Name:</strong> John Castro Flores</p>
                  <p><strong>Address:</strong> 1 Birchwood Circle, Madison, Wisconsin, 53704</p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-foreground">
                    <Check className="w-5 h-5 mr-2" />
                    How to Pay with a Check
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-primary-foreground">
                  <p className="mb-2">Checks should be written out to <strong>M&I Professional Services</strong></p>
                  <p className="mb-2">Send to the following email:</p>
                  <p className="font-semibold">jc.miprofessionalservices@gmail.com</p>
                  <p className="text-sm mt-4 opacity-80">
                    Any check already sent to the email above should be disposed of properly - DO NOT SEND CHECK THROUGH MAIL
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Request Quote Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;