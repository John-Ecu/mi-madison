import DeerIcon from "./DeerIcon";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <DeerIcon className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-lg font-bold">M & I Professionals</h3>
                <h3 className="text-base font-bold opacity-90">J & J Special Services</h3>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Family-owned companies serving Dane County and all of Wisconsin.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">M & I - Cleaning</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>House Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">J & J - Building Management</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Window Cleaning</li>
              <li>Power Washing</li>
              <li>Tree Trimming</li>
              <li>Snow Shoveling</li>
              <li>Residential Painting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Service Area</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Madison, WI</li>
              <li>Dane County</li>
              <li>All of Wisconsin</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} M & I Professional Services LLC | J & J Special Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;