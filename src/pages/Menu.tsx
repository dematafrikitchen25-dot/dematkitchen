import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import soupDish from "@/assets/soup-dish.jpg";
import mainDish from "@/assets/main-dish.jpg";
import juice from "@/assets/juice.jpg";

const Menu = () => {
  const menuCategories = [
    {
      category: "Traditional Soups",
      image: soupDish,
      items: [
        { name: "Egusi Soup", description: "Rich melon seed soup with vegetables and spices", price: "35 QAR" },
        { name: "Ogbono Soup", description: "Traditional soup with African wild mango seeds", price: "35 QAR" },
        { name: "Pepper Soup", description: "Spicy and aromatic soup with meat or fish", price: "40 QAR" },
        { name: "Okra Soup", description: "Classic okra soup with your choice of protein", price: "35 QAR" },
      ],
    },
    {
      category: "Main Dishes",
      image: mainDish,
      items: [
        { name: "Jollof Rice", description: "Signature one-pot rice dish with tomatoes and spices", price: "45 QAR" },
        { name: "Fried Rice & Chicken", description: "Flavorful fried rice with seasoned grilled chicken", price: "50 QAR" },
        { name: "Pounded Yam & Soup", description: "Smooth pounded yam served with your choice of soup", price: "55 QAR" },
        { name: "Waakye", description: "Rice and beans dish with special sauces", price: "40 QAR" },
        { name: "Suya Platter", description: "Spiced grilled meat skewers with sides", price: "60 QAR" },
      ],
    },
    {
      category: "Fresh Juices",
      image: juice,
      items: [
        { name: "Zobo", description: "Refreshing hibiscus drink, served chilled", price: "15 QAR" },
        { name: "Chapman", description: "Special fruit punch with a unique blend", price: "18 QAR" },
        { name: "Mango Juice", description: "Freshly blended mango juice", price: "15 QAR" },
        { name: "Pineapple Juice", description: "Fresh tropical pineapple juice", price: "15 QAR" },
        { name: "Mixed Fruit Smoothie", description: "Blend of seasonal fruits", price: "20 QAR" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Menu
          </h1>
          <p className="font-inter text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up">
            Explore our delicious selection of authentic African dishes, soups, and refreshing beverages
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Category Image */}
                  <div className="w-full lg:w-1/3">
                    <div className="sticky top-24">
                      <div className="relative h-80 rounded-xl overflow-hidden shadow-card group">
                        <img
                          src={category.image}
                          alt={category.category}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-primary/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h2 className="font-playfair text-4xl font-bold text-primary-foreground text-center px-4">
                            {category.category}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="w-full lg:w-2/3 space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card animate-scale-in"
                        style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-inter text-xl font-bold text-secondary whitespace-nowrap ml-4">
                              {item.price}
                            </span>
                          </div>
                          <p className="font-inter text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Send us a message on WhatsApp with your order and delivery details
          </p>
          <Button variant="order" size="lg" asChild>
            <a
              href="https://wa.me/97400000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
