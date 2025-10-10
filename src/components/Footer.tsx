import DeerIcon from "./DeerIcon";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <DeerIcon className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-primary">M&I Professional Services LLC</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A small family-owned company providing professional cleaning services. 
              Proudly serving Madison and all of Wisconsin since our founding.
            </p>
            <p className="text-sm text-muted-foreground">
              Licensed, Insured & Bonded
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Move-out Cleaning</li>
              <li>Construction Cleanup</li>
              <li>Deep Cleaning</li>
              <li>Sanitization Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Service Area</h4>
            <p className="text-muted-foreground mb-2">Madison, Wisconsin</p>
            <p className="text-muted-foreground mb-2">Dane County Area</p>
            <p className="text-muted-foreground mb-4">Available throughout Wisconsin</p>
            <p className="text-sm text-muted-foreground">
              Call us to discuss your specific location needs
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 mt-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <DeerIcon className="w-6 h-6 text-primary mr-2" />
            <DeerIcon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground">
            © 2024 M&I Professional Services LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Proudly serving Madison, Wisconsin and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;