import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Doha, Qatar"],
      link: null,
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+974 0000 0000"],
      link: "tel:+97400000000",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@afroflavors.qa"],
      link: "mailto:hello@afroflavors.qa",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Open Daily", "11:00 AM - 11:00 PM"],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="font-inter text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up">
            We're here to serve you! Reach out to us via WhatsApp or through any of the channels below
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer border-border bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-4 bg-gradient-primary rounded-full mb-4 group-hover:animate-glow">
                    <info.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">
                    {info.title}
                  </h3>
                  <div className="font-inter text-muted-foreground space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i}>
                        {info.link && i === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-border bg-card shadow-elegant animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="inline-block p-6 bg-gradient-secondary rounded-full mb-6 animate-glow">
                <MessageCircle size={48} className="text-secondary-foreground" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Easiest Way to Order
              </h2>
              <p className="font-inter text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Simply send us a message on WhatsApp with your order details, and we'll take care
                of the rest. Fast, convenient, and reliable!
              </p>
              <Button variant="order" size="lg" asChild>
                <a
                  href="https://wa.me/97400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mx-auto"
                >
                  <MessageCircle size={20} />
                  Start Your Order on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              Order Information
            </h2>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6 font-inter">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">How to Order</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Click the "Order on WhatsApp" button or send us a message at +974 0000 0000</li>
                      <li>Tell us what dishes you'd like from our menu</li>
                      <li>Provide your delivery address and preferred time</li>
                      <li>We'll confirm your order and estimated delivery time</li>
                      <li>Enjoy your delicious African meal!</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Delivery Areas</h3>
                    <p className="text-muted-foreground">
                      We deliver throughout Doha and surrounding areas. Delivery fees may vary based
                      on distance. Please ask when placing your order.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Payment Methods</h3>
                    <p className="text-muted-foreground">
                      We accept cash on delivery and bank transfers. Payment details will be provided
                      when you confirm your order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
