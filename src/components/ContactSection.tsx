import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, DollarSign, Send, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Service Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:jc.miprofessionalservices@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your message details have been prepared. Send the email to complete your request!",
    });
  };

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Our Team</h2>
          <p className="text-lg opacity-90">
            Thank you for your interest in M & I Professionals and J & J Special Services. We can't wait to work together!
          </p>
          <p className="text-base opacity-80 mt-2">
            Same team, same great service - whether you need cleaning or maintenance!
          </p>
        </div>

        {/* Contact Form & Map */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardHeader>
              <CardTitle className="text-primary-foreground flex items-center gap-2">
                <Send className="w-5 h-5" />
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(608) 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your cleaning or service needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-primary-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Our Service Area
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185596.83754854792!2d-89.57407899999999!3d43.0730517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536d3a2019ff%3A0x4e0cfcb5ba484198!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map - Madison, WI"
                className="rounded-b-lg"
              />
              <div className="p-4 text-primary-foreground text-sm">
                <p className="font-medium">Madison, WI & Dane County</p>
                <p className="opacity-80">Travel available throughout Wisconsin</p>
                <p className="opacity-80 italic mt-1">(Willing to do projects outside service area)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
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

        {/* Payment Info */}
        <div className="max-w-xl mx-auto">
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
              <p className="text-xs opacity-70 mt-2">Contact team members for other approved payment methods</p>
            </CardContent>
          </Card>
          
          {/* Instagram */}
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-primary-foreground text-lg">
                <Instagram className="w-5 h-5 mr-2" />
                Follow Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary-foreground text-sm">
              <a 
                href="https://www.instagram.com/mi_sparklecrew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                <span>@mi_sparklecrew</span>
              </a>
              <p className="text-xs opacity-70 mt-2">See our latest work and updates!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
