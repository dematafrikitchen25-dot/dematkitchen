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
import catfishPepperSoup from "@/assets/catfish-pepper-soup.jpg";
import waakye from "@/assets/waakye.jpg";
import spaghettiJollof from "@/assets/spaghetti-jollof.jpg";
import whiteRicePepperSoup from "@/assets/white-rice-pepper-soup.jpg";
import nativeJollof from "@/assets/native-jollof.jpg";
import assortedPepperSoup from "@/assets/assorted-pepper-soup.jpg";
import chickenPepperSoup from "@/assets/chicken-pepper-soup.jpg";
import turkeyBig from "@/assets/turkey-big.jpg";
import smokedTitusFish from "@/assets/smoked-titus-fish.jpg";
import friedFish from "@/assets/fried-fish.jpg";
import friedChicken from "@/assets/fried-chicken.jpg";
import shakiBeefTripe from "@/assets/shaki-beef-tripe.jpg";
import goatMeatPepperSoup from "@/assets/goat-meat-pepper-soup.jpg";
import riceFlour from "@/assets/rice-flour.jpg";
import semolina from "@/assets/semolina.jpg";
import amala from "@/assets/amala.jpg";
import poundoYam from "@/assets/poundo-yam.jpg";
import jollofRice from "@/assets/jollof-rice.jpg";
import friedPlantainDodo from "@/assets/fried-plantain-dodo.jpg";
import boiledYams from "@/assets/boiled-yams.jpg";
import boiledPlantain from "@/assets/boiled-plantain.jpg";
import friedBeef from "@/assets/fried-beef.jpg";
import roastedTurkey from "@/assets/roasted-turkey.jpg";
import suyaPlatter from "@/assets/suya-platter.jpg";
import coleslawSalad from "@/assets/coleslaw-salad.jpg";
import veggieSalad from "@/assets/veggie-salad.jpg";
import frenchFries from "@/assets/french-fries.jpg";
import ewaAgoyin from "@/assets/ewa-agoyin.png";
import beansAndStewOnly from "@/assets/beans-and-stew-only.jpg";
import moinMoinOnly from "@/assets/moin-moin-only.jpg";
import friedYamWithEggSauce from "@/assets/fried-yam-with-egg-sauce.jpg";
import boiledYamAndEggSauce from "@/assets/boiled-yam-and-egg-sauce.jpg";
import friedYam from "@/assets/fried-yam.jpg";
import roastedPlantainBoli from "@/assets/roasted-plantain-boli.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import orangePineapple from "@/assets/orange-pineapple.jpg";
import freshOrangeJuice from "@/assets/fresh-orange-juice.jpg";
import bananaJuice from "@/assets/banana-juice.jpg";
import watermelonJuice from "@/assets/watermelon-juice.jpg";
import avocadoJuice from "@/assets/avocado-juice.jpg";
import palmWine from "@/assets/palm-wine.jpg";
import puffPuff from "@/assets/puff-puff.jpg";
import chinChin from "@/assets/chin-chin.jpg";
import pineappleMangoPassionfruit from "@/assets/pineapple-mango-passionfruit.jpg";
import lemonGinger from "@/assets/lemon-ginger.jpg";
import pineappleGinger from "@/assets/pineapple-ginger.jpg";
import appleCarrot from "@/assets/apple-carrot.jpg";
import watermelonPineapple from "@/assets/watermelon-pineapple.jpg";
import pineappleGuavaOrange from "@/assets/pineapple-guava-orange.jpg";
import bananaMangoP from "@/assets/banana-mango-pineapple.jpg";
import papayaPineappleOrange from "@/assets/papaya-pineapple-orange.jpg";
import coconutWaterPineappleLemon from "@/assets/coconut-water-pineapple-lemon.jpg";
import watermelonPineappleMint from "@/assets/watermelon-pineapple-mint.jpg";
import orangeMangoPineapple from "@/assets/orange-mango-pineapple.jpg";
import hibiscusDrink from "@/assets/hibiscus-drink.jpg";

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
        {
          name: "Poundo Yam",
          description: "Traditional pounded yam powder swallow",
          image: poundoYam,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Amala (Yam Fufu)",
          description: "Traditional yam flour swallow",
          image: amala,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Semolina",
          description: "Smooth semolina swallow",
          image: semolina,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Rice Flour / Ground Rice",
          description: "Rice flour swallow",
          image: riceFlour,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
      ],
    },
    {
      category: "Rice & Sides",
      items: [
        {
          name: "Jollof Rice",
          description: "Signature one-pot rice dish with tomatoes and spices",
          image: jollofRice,
          variations: [
            { name: "Regular", price: "35 QAR" },
            { name: "With Chicken", price: "50 QAR" },
            { name: "With Beef", price: "55 QAR" },
          ],
        },
        {
          name: "Fried Rice",
          description: "Flavorful fried rice with mixed vegetables",
          image: friedRice,
          variations: [
            { name: "Regular", price: "35 QAR" },
            { name: "With Chicken", price: "50 QAR" },
            { name: "With Beef", price: "55 QAR" },
          ],
        },
        {
          name: "Waakye",
          description: "Rice and beans dish with special sauces",
          image: waakye,
          variations: [
            { name: "Regular", price: "30 QAR" },
            { name: "With Protein", price: "45 QAR" },
          ],
        },
        {
          name: "Suya Platter",
          description: "Spiced grilled meat skewers with sides",
          image: suyaPlatter,
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
          image: nativeJollof,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Jollof Rice Only",
          description: "Classic Jollof rice without proteins",
          image: jollofRice,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "White Rice with Pepper Soup Side",
          description: "Steamed white rice served with pepper soup",
          image: whiteRicePepperSoup,
          variations: [{ name: "Regular", price: "35 QAR" }],
        },
        {
          name: "Spaghetti Jollof Only",
          description: "Jollof-style spaghetti with spices",
          image: spaghettiJollof,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
      ],
    },
    {
      category: "Pepper Soups",
      items: [
        {
          name: "Catfish Pepper Soup",
          description: "Spicy pepper soup with fresh catfish",
          image: catfishPepperSoup,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Assorted Pepper Soup",
          description: "Mixed meat pepper soup with traditional spices",
          image: assortedPepperSoup,
          variations: [{ name: "Regular", price: "38 QAR" }],
        },
        {
          name: "Chicken Pepper Soup",
          description: "Aromatic pepper soup with tender chicken",
          image: chickenPepperSoup,
          variations: [{ name: "Regular", price: "36 QAR" }],
        },
        {
          name: "Goat Meat Pepper Soup",
          description: "Rich pepper soup with goat meat",
          image: goatMeatPepperSoup,
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
          image: shakiBeefTripe,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Fried Chicken",
          description: "Crispy fried chicken pieces",
          image: friedChicken,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Fried Fish",
          description: "Golden fried fish",
          image: friedFish,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Smoked Titus Fish",
          description: "Premium smoked Titus fish",
          image: smokedTitusFish,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Turkey (Big)",
          description: "Large portion of tender turkey",
          image: turkeyBig,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Roasted Turkey Only",
          description: "Perfectly roasted turkey",
          image: roastedTurkey,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Fried Beef",
          description: "Tender fried beef pieces",
          image: friedBeef,
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
          image: boiledPlantain,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Boiled Yams",
          description: "Soft boiled yams",
          image: boiledYams,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Fried Plantain (Dodo)",
          description: "Sweet fried plantain",
          image: friedPlantainDodo,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Roasted Plantain (Boil)",
          description: "Traditional roasted plantain",
          image: roastedPlantainBoli,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Fried Yam",
          description: "Crispy fried yam",
          image: friedYam,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Boiled Yam And Egg Sauce",
          description: "Boiled yam with savory egg sauce",
          image: boiledYamAndEggSauce,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Fried Yam With Egg Sauce",
          description: "Fried yam with savory egg sauce",
          image: friedYamWithEggSauce,
          variations: [{ name: "Regular", price: "40 QAR" }],
        },
        {
          name: "Moin Moin Only",
          description: "Steamed bean pudding",
          image: moinMoinOnly,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Beans And Stew Only",
          description: "Beans served with rich stew",
          image: beansAndStewOnly,
          variations: [{ name: "Regular", price: "25 QAR" }],
        },
        {
          name: "Beans Porridge (Beans + Sauce + Plantain)",
          description: "Traditional beans with special sauce and plantain",
          image: ewaAgoyin,
          variations: [{ name: "Regular", price: "30 QAR" }],
        },
        {
          name: "French Fries",
          description: "Crispy golden french fries",
          image: frenchFries,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Veggie Salad",
          description: "Fresh mixed vegetable salad",
          image: veggieSalad,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Coleslaw Salad",
          description: "Creamy coleslaw salad",
          image: coleslawSalad,
          variations: [{ name: "Regular", price: "10 QAR" }],
        },
        {
          name: "Chin Chin",
          description: "Crunchy fried snack",
          image: chinChin,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Puff Puff",
          description: "Sweet fried dough balls",
          image: puffPuff,
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
          image: palmWine,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Hibiscus Drink (Zobo / Sobolo / Bissap)",
          description: "Traditional hibiscus drink served chilled",
          image: hibiscusDrink,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Avocado Juice",
          description: "Creamy and smooth avocado juice",
          image: avocadoJuice,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Watermelon Juice",
          description: "Fresh and refreshing watermelon juice",
          image: watermelonJuice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Banana Juice",
          description: "Creamy banana juice",
          image: bananaJuice,
          variations: [{ name: "Regular", price: "12 QAR" }],
        },
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice",
          image: freshOrangeJuice,
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
          image: pineappleMangoPassionfruit,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Orange + Mango + Pineapple",
          description: "Triple tropical fruit smoothie with rich flavors",
          image: orangeMangoPineapple,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Watermelon + Pineapple + Mint",
          description: "Refreshing smoothie with cooling mint finish",
          image: watermelonPineappleMint,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Coconut Water + Pineapple + Lemon",
          description: "Hydrating coconut water blend with tropical fruits",
          image: coconutWaterPineappleLemon,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Papaya + Pineapple + Orange",
          description: "Vitamin-rich tropical smoothie with papaya goodness",
          image: papayaPineappleOrange,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Banana + Mango + Pineapple",
          description: "Creamy and sweet tropical fruit smoothie blend",
          image: bananaMangoP,
          variations: [{ name: "Regular", price: "18 QAR" }],
        },
        {
          name: "Pineapple + Guava + Orange",
          description: "Exotic smoothie with unique guava flavor profile",
          image: pineappleGuavaOrange,
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
          image: orangePineapple,
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
          image: watermelonPineapple,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Apple + Carrot",
          description: "Healthy and nutritious blend",
          image: appleCarrot,
          variations: [{ name: "Regular", price: "20 QAR" }],
        },
        {
          name: "Pineapple + Ginger",
          description: "Zesty pineapple with a ginger kick",
          image: pineappleGinger,
          variations: [{ name: "Regular", price: "15 QAR" }],
        },
        {
          name: "Lemon + Ginger",
          description: "Refreshing citrus with warming ginger",
          image: lemonGinger,
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
