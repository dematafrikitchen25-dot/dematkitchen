import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Afro Flavors
            </h3>
            <p className="text-muted-foreground font-inter text-sm">
              Authentic African cuisine in the heart of Qatar. Order now via WhatsApp!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+974 0000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>hello@afroflavors.qa</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-foreground">
              Opening Hours
            </h4>
            <ul className="space-y-2 font-inter text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Daily</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground font-inter">
            © {currentYear} Afro Flavors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
