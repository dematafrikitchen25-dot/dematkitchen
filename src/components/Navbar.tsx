import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toZonedTime } from "date-fns-tz";
import logo from "@/assets/demat-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIfOpen = () => {
      const qatarTime = toZonedTime(new Date(), "Asia/Qatar");
      const day = qatarTime.getDay();
      const hours = qatarTime.getHours();
      const minutes = qatarTime.getMinutes();
      const currentTime = hours + minutes / 60;

      let openTime: number;
      let closeTime: number;

      if (day === 5) {
        openTime = 12;
        closeTime = 23;
      } else {
        openTime = 10;
        closeTime = 23;
      }

      setIsOpenNow(currentTime >= openTime && currentTime < closeTime);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Demat African Kitchen Logo" 
              className="h-14 w-14 object-contain transition-all duration-300 group-hover:scale-110"
            />
            <h1 className="font-playfair text-lg md:text-xl font-bold ">
              Demat African Kitchen
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(link.path)
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="order" size="default" asChild>
              <a
                href="https://wa.me/+97471962487"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="order" size="default" className="w-full" asChild>
                <a
                  href="https://wa.me/+97471962487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    
    {/* Open/Closed Indicator */}
    <div className="fixed top-20 left-0 right-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        <span className="text-sm font-medium text-foreground">
          {isOpenNow ? 'Open Now' : 'Closed Now'}
        </span>
      </div>
    </div>
    </>
  );
};

export default Navbar;
