import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import soupDish from "@/assets/soup-dish.jpg";
import mainDish from "@/assets/main-dish.jpg";
import juice from "@/assets/juice.jpg";
import blackSoup from "@/assets/black-soup.jpg";
import stewBeef from "@/assets/stew-beef.jpg";
import whiteSoup from "@/assets/white-soup.jpg";
import egusiSoup from "@/assets/egusi-soup.jpg";
import ogbonoSoup from "@/assets/ogbono-soup.jpg";
import poundedYam from "@/assets/pounded-yam.jpg";
import groundnutSoup from "@/assets/groundnut-soup.jpg";
import edikaikongSoup from "@/assets/edikaikong-soup.jpg";
import afangSoup from "@/assets/afang-soup.jpg";
import okraSoup from "@/assets/okra-soup.jpg";
import mangoOrange from "@/assets/mango-orange.jpg";
import yellowGarri from "@/assets/yellow-garri.jpg";
import plantainPorridge from "@/assets/plantain-porridge.jpg";
import ogbonoEgusi from "@/assets/ogbono-egusi.jpg";
import bangaSoup from "@/assets/banga-soup.jpg";

const Menu = () => {
  const [selectedVariations, setSelectedVariations] = useState<{ [key: string]: number }>({});

  const menuCategories = [
    {
      category: "Soups & Stews",
      items: [
        {
          name: "Egusi Soup",
          description: "Ground melon seed soup served with proteins",
          image: egusiSoup,
          variations: [
            { name: "Regular", price: "25 QAR" },
            { name: "Small Pot", price: "200 QAR" },
            { name: "Big Pot", price: "250 QAR" },
          ],
        },
        {
          name: "White Soup (Ofe Nsala)",
          description: "Light, clear soup made with proteins and aromatic spices",
          image: whiteSoup,
          variations: [{ name: "Regular", price: "30 QAR" }],
        },
        {
          name: "Afang Soup",
          description: "Traditional Nigerian soup made with afang leaves and assorted proteins",
          image: afangSoup,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Edikaikong Soup",
          description: "Delicious vegetable soup with waterleaf and fluted pumpkin leaves",
          image: edikaikongSoup,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Groundnut (Peanut) Soup",
          description: "Rich and creamy soup made with groundnuts and assorted proteins",
          image: groundnutSoup,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Ogbono Soup",
          description: "Traditional soup with African wild mango seeds",
          image: ogbonoSoup,
          variations: [
            { name: "Regular", price: "25 QAR" },
            { name: "Small Pot", price: "200 QAR" },
            { name: "Big Pot", price: "250 QAR" },
          ],
        },
        {
          name: "Pepper Soup",
          description: "Spicy and aromatic soup with meat or fish",
          image: soupDish,
          variations: [
            { name: "Regular", price: "30 QAR" },
            { name: "Small Pot", price: "220 QAR" },
            { name: "Big Pot", price: "270 QAR" },
          ],
        },
        {
          name: "Okra Soup",
          description: "Classic okra soup with your choice of protein",
          image: okraSoup,
          variations: [
            { name: "Regular", price: "25 QAR" },
            { name: "Small Pot", price: "200 QAR" },
            { name: "Big Pot", price: "250 QAR" },
          ],
        },
        {
          name: "Banga Soup",
          description: "Rich palm fruit soup with traditional spices",
          image: bangaSoup,
          variations: [
            { name: "Regular", price: "30 QAR" },
            { name: "Small Pot", price: "220 QAR" },
            { name: "Big Pot", price: "270 QAR" },
          ],
        },
        {
          name: "Plantain Porridge",
          description: "Plantain cooked with palm oil, spices, and vegetables",
          image: plantainPorridge,
          variations: [{ name: "Regular", price: "31 QAR" }],
        },
        {
          name: "Ogbono & Egusi Mix",
          description: "Combination of ground ogbono and egusi with meat or fish",
          image: ogbonoEgusi,
          variations: [{ name: "Regular", price: "30 QAR" }],
        },
        {
          name: "Black Soup",
          description: "Thick herbal soup made with assorted meats and native spices",
          image: blackSoup,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Stew with Beef",
          description: "Tomato-based Nigerian stew cooked with beef and spices",
          image: stewBeef,
          variations: [{ name: "Regular", price: "28 QAR" }],
        },
      ],
    },
    {
      category: "Swallows",
      items: [
        {
          name: "Pounded Yam",
          description: "Smooth pounded yam served with your choice of soup",
          image: poundedYam,
          variations: [
            { name: "Single", price: "25 QAR" },
            { name: "Double", price: "40 QAR" },
          ],
        },
        {
          name: "Eba (Garri)",
          description: "Traditional cassava swallow",
          image: yellowGarri,
          variations: [
            { name: "Single", price: "20 QAR" },
            { name: "Double", price: "35 QAR" },
          ],
        },
        {
          name: "Fufu",
          description: "Soft and smooth cassava fufu",
          image: mainDish,
          variations: [
            { name: "Single", price: "22 QAR" },
            { name: "Double", price: "37 QAR" },
          ],
        },
      ],
    },
    {
      category: "Rice & Sides",
      items: [
        {
          name: "Jollof Rice",
          description: "Signature one-pot rice dish with tomatoes and spices",
          image: mainDish,
          variations: [
            { name: "Regular", price: "35 QAR" },
            { name: "With Chicken", price: "50 QAR" },
            { name: "With Beef", price: "55 QAR" },
          ],
        },
        {
          name: "Fried Rice",
          description: "Flavorful fried rice with mixed vegetables",
          image: mainDish,
          variations: [
            { name: "Regular", price: "35 QAR" },
            { name: "With Chicken", price: "50 QAR" },
            { name: "With Beef", price: "55 QAR" },
          ],
        },
        {
          name: "Waakye",
          description: "Rice and beans dish with special sauces",
          image: mainDish,
          variations: [
            { name: "Regular", price: "30 QAR" },
            { name: "With Protein", price: "45 QAR" },
          ],
        },
        {
          name: "Suya Platter",
          description: "Spiced grilled meat skewers with sides",
          image: mainDish,
          variations: [
            { name: "Beef", price: "60 QAR" },
            { name: "Chicken", price: "55 QAR" },
            { name: "Mixed", price: "70 QAR" },
          ],
        },
      ],
    },
    {
      category: "Rice & Pasta",
      items: [
        {
          name: "Native Jollof Rice",
          description: "Traditional Jollof rice with authentic spices",
          image: mainDish,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Jollof Rice Only",
          description: "Classic Jollof rice without proteins",
          image: mainDish,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "White Rice with Pepper Soup Side",
          description: "Steamed white rice served with pepper soup",
          image: mainDish,
          variations: [{ name: "Regular", price: "35 QAR" }],
        },
        {
          name: "Spaghetti Jollof Only",
          description: "Jollof-style spaghetti with spices",
          image: mainDish,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Waakye",
          description: "Rice and beans dish with special sauces",
          image: mainDish,
          variations: [{ name: "Regular", price: "30 QAR" }],
        },
      ],
    },
    {
      category: "Pepper Soups",
      items: [
        {
          name: "Catfish Pepper Soup",
          description: "Spicy pepper soup with fresh catfish",
          image: soupDish,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Assorted Pepper Soup",
          description: "Mixed meat pepper soup with traditional spices",
          image: soupDish,
          variations: [{ name: "Regular", price: "38 QAR" }],
        },
        {
          name: "Chicken Pepper Soup",
          description: "Aromatic pepper soup with tender chicken",
          image: soupDish,
          variations: [{ name: "Regular", price: "36 QAR" }],
        },
        {
          name: "Goat Meat Pepper Soup",
          description: "Rich pepper soup with goat meat",
          image: soupDish,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
      ],
    },
    {
      category: "Protein (Add-ons)",
      items: [
        {
          name: "Shaki (Beef Tripe)",
          description: "Tender beef tripe, perfectly cooked",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Fried Chicken",
          description: "Crispy fried chicken pieces",
          image: mainDish,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Fried Fish",
          description: "Golden fried fish",
          image: mainDish,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Smoked Titus Fish",
          description: "Premium smoked Titus fish",
          image: mainDish,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Turkey (Big)",
          description: "Large portion of tender turkey",
          image: mainDish,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Roasted Turkey Only",
          description: "Perfectly roasted turkey",
          image: mainDish,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Fried Beef",
          description: "Tender fried beef pieces",
          image: mainDish,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
      ],
    },
    {
      category: "Sides and Small Chops",
      items: [
        {
          name: "Boiled Plantain",
          description: "Perfectly boiled plantain",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Boiled Yams",
          description: "Soft boiled yams",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Fried Plantain (Dodo)",
          description: "Sweet fried plantain",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Roasted Plantain (Boil)",
          description: "Traditional roasted plantain",
          image: mainDish,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Fried Yam",
          description: "Crispy fried yam",
          image: mainDish,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Boiled Yam And Egg Sauce",
          description: "Boiled yam with savory egg sauce",
          image: mainDish,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Fried Yam With Egg Sauce",
          description: "Fried yam with savory egg sauce",
          image: mainDish,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Moin Moin Only",
          description: "Steamed bean pudding",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Beans And Stew Only",
          description: "Beans served with rich stew",
          image: mainDish,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Beans Porridge (Beans + Sauce + Plantain)",
          description: "Traditional beans with special sauce and plantain",
          image: mainDish,
          variations: [{ name: "Regular", price: "30 QAR" }],
        },
        {
          name: "French Fries",
          description: "Crispy golden french fries",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Veggie Salad",
          description: "Fresh mixed vegetable salad",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Coleslaw Salad",
          description: "Creamy coleslaw salad",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Chin Chin",
          description: "Crunchy fried snack",
          image: mainDish,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Puff Puff",
          description: "Sweet fried dough balls",
          image: mainDish,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
      ],
    },
    {
      category: "Drinks & Juices",
      items: [
        {
          name: "Palm Wine",
          description: "Refreshing traditional palm wine",
          image: juice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Hibiscus Drink (Zobo / Sobolo / Bissap)",
          description: "Traditional hibiscus drink served chilled",
          image: juice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Avocado Juice",
          description: "Creamy and smooth avocado juice",
          image: juice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Watermelon Juice",
          description: "Fresh and refreshing watermelon juice",
          image: juice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Banana Juice",
          description: "Creamy banana juice",
          image: juice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice",
          image: juice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
      ],
    },
    {
      category: "Smoothies & Exotic Mixes",
      items: [
        {
          name: "Pineapple + Mango + Passionfruit",
          description: "Exotic tropical blend with three premium fruits",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Orange + Mango + Pineapple",
          description: "Triple tropical fruit smoothie with rich flavors",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Watermelon + Pineapple + Mint",
          description: "Refreshing smoothie with cooling mint finish",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Coconut Water + Pineapple + Lemon",
          description: "Hydrating coconut water blend with tropical fruits",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Papaya + Pineapple + Orange",
          description: "Vitamin-rich tropical smoothie with papaya goodness",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Banana + Mango + Pineapple",
          description: "Creamy and sweet tropical fruit smoothie blend",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Pineapple + Guava + Orange",
          description: "Exotic smoothie with unique guava flavor profile",
          image: juice,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
      ],
    },
    {
      category: "Fresh Juice Mixes",
      items: [
        {
          name: "Orange + Pineapple",
          description: "Tropical blend of orange and pineapple",
          image: juice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Mango + Orange",
          description: "Sweet and tangy mango orange mix",
          image: mangoOrange,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Watermelon + Pineapple",
          description: "Refreshing tropical fruit combination",
          image: juice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Apple + Carrot",
          description: "Healthy and nutritious blend",
          image: juice,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Pineapple + Ginger",
          description: "Zesty pineapple with a ginger kick",
          image: juice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Lemon + Ginger",
          description: "Refreshing citrus with warming ginger",
          image: juice,
          variations: [
            { name: "Regular", price: "15 QAR" },
            { name: "Small", price: "10 QAR" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in">
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
                {/* Category Heading */}
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                  {category.category}
                </h2>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const itemKey = `${categoryIndex}-${itemIndex}`;
                    const selectedVariationIndex = selectedVariations[itemKey] || 0;
                    const selectedVariation = item.variations[selectedVariationIndex];

                    return (
                      <Card
                        key={itemIndex}
                        className="group hover:shadow-elegant transition-all duration-300 border-border bg-card animate-scale-in overflow-hidden"
                        style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                      >
                        {/* Item Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <CardContent className="p-6">
                          <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {item.name}
                          </h3>
                          <p className="font-inter text-muted-foreground text-sm mb-4">
                            {item.description}
                          </p>
                          
                          {/* Variation Buttons */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.variations.map((variation, varIndex) => (
                              <Button
                                key={varIndex}
                                variant={selectedVariationIndex === varIndex ? "selected" : "outline"}
                                size="sm"
                                onClick={() => setSelectedVariations({ ...selectedVariations, [itemKey]: varIndex })}
                                className="text-xs"
                              >
                                {variation.name} – {variation.price}
                              </Button>
                            ))}
                          </div>

                          {/* Order Now Button */}
                          <Button variant="order" size="sm" asChild className="w-full">
                            <a
                              href={`https://wa.me/97471962487?text=Hi! I'd like to order: ${encodeURIComponent(item.name)} (${encodeURIComponent(selectedVariation.name)}) - ${encodeURIComponent(selectedVariation.price)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 justify-center"
                            >
                              <MessageCircle size={16} />
                              Order Now
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Send us a message on WhatsApp with your order and delivery details
          </p>
          <Button variant="order" size="lg" asChild>
            <a
              href="https://wa.me/97471962487"
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
