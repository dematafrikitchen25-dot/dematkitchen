import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Flavor",
      description: "Every dish is prepared with love and dedication to bring you authentic African tastes",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We serve the African community in Qatar with pride, bringing a taste of home",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Only the finest, freshest ingredients make it into our kitchen",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="font-inter text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Bringing the rich culinary heritage of Africa to Qatar, one dish at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 font-inter text-lg text-muted-foreground animate-fade-in">
              <p className="text-foreground font-semibold text-xl">
                Welcome to Demat African Kitchen – where tradition meets taste in the heart of Qatar.
              </p>
              <p>
                Our journey began with a simple yet powerful mission: to share the incredible diversity
                and richness of African cuisine with the people of Qatar. We understand that food is more
                than just sustenance – it's a connection to home, culture, and cherished memories.
              </p>
              <p>
                At Demat African Kitchen, we specialize in traditional African soups, authentic main dishes, and
                refreshing fresh juices. Each recipe has been passed down through generations, refined
                and perfected to deliver the most authentic flavors possible. From the rich, hearty
                Egusi soup to the perfectly spiced Jollof rice, every dish tells a story.
              </p>
              <p>
                We take pride in using only the freshest, highest-quality ingredients, sourced with care
                to ensure that every meal we prepare meets our exacting standards. Our kitchen is a place
                where tradition and quality come together, creating dishes that not only taste incredible
                but also nourish the soul.
              </p>
              <p className="text-foreground font-semibold">
                Through convenient WhatsApp ordering, we make it easy for you to enjoy authentic African
                cuisine in the comfort of your home. Whether you're craving the familiar tastes of home
                or exploring African flavors for the first time, we're here to serve you with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer border-border bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-block p-4 bg-gradient-primary rounded-full mb-6 group-hover:animate-glow">
                    <value.icon size={40} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Experience Our Passion for African Cuisine
          </h2>
          <p className="font-inter text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied customers and taste the difference that authentic,
            lovingly prepared African food can make
          </p>
          <Button variant="order" size="lg" asChild>
            <a
              href="https://wa.me/97471962487"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={20} />
              Order Now on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
