import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, UtensilsCrossed, Leaf, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.png";
import soupDish from "@/assets/soup-dish.jpg";
import mainDish from "@/assets/main-dish.jpg";
import juice from "@/assets/juice.jpg";

const Home = () => {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Authentic Recipes",
      description: "Traditional African dishes prepared with authentic recipes and fresh ingredients",
    },
    {
      icon: MessageCircle,
      title: "Easy WhatsApp Ordering",
      description: "Order your favorite meals directly through WhatsApp for quick and convenient service",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We use only the freshest, high-quality ingredients in every dish we prepare",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick preparation and delivery to bring African flavors to your doorstep",
    },
  ];

  const featuredDishes = [
    {
      name: "Traditional Soups",
      description: "Rich, hearty African soups made with authentic spices",
      image: soupDish,
    },
    {
      name: "Main Dishes",
      description: "Flavorful main courses with rice and vegetables",
      image: mainDish,
    },
    {
      name: "Fresh Juices",
      description: "Refreshing tropical fruit juices made fresh daily",
      image: juice,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up max-w-4xl mx-auto">
            Authentic Nigerian & African Soups and Foods in Qatar
          </h1>
          <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Bringing the flavors of home to Africans in diaspora and sharing African cuisine with Qatar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="order" size="lg" asChild>
              <a
                href="https://wa.me/97400000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Demat African Kitchen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-4 bg-gradient-primary rounded-full mb-4 group-hover:animate-glow">
                    <feature.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Our Signature Dishes
          </h2>
          <p className="font-inter text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring the best of African cuisine
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-card transition-all duration-500 hover:scale-105 cursor-pointer border-border bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">
                    {dish.name}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4">
                    {dish.description}
                  </p>
                  <Button variant="hero" size="sm" asChild>
                    <Link to="/menu">See Menu</Link>
                  </Button>
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
            Ready to Experience Authentic African Flavors?
          </h2>
          <p className="font-inter text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Order now via WhatsApp and enjoy delicious African cuisine delivered to your home
          </p>
          <Button variant="order" size="lg" asChild>
            <a
              href="https://wa.me/97400000000"
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

export default Home;
