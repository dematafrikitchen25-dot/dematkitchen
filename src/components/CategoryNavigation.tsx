import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "soups-stews", name: "Soups & Stews" },
  { id: "swallows", name: "Swallows" },
  { id: "rice-sides", name: "Rice & Sides" },
  { id: "rice-pasta", name: "Rice & Pasta" },
  { id: "pepper-soups", name: "Pepper Soups" },
  { id: "protein-addons", name: "Protein (Add-ons)" },
  { id: "sides-small-chops", name: "Sides and Small Chops" },
  { id: "drinks-juices", name: "Drinks & Juices" },
  { id: "smoothies-exotic", name: "Smoothies & Exotic Mixes" },
  { id: "fresh-juice-mixes", name: "Fresh Juice Mixes" },
];

const CategoryNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsExpanded(false);
    }
  };

  return (
    <div className="sticky top-20 z-40 mb-8 animate-fade-in-up">
      <Card className="border-border bg-card/95 backdrop-blur-sm shadow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-playfair text-lg font-semibold text-foreground">
              Menu Categories
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>
          </div>
          
          <div
            className={`grid grid-cols-2 md:grid-cols-5 gap-2 transition-all duration-300 ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 md:max-h-none opacity-0 md:opacity-100 overflow-hidden md:overflow-visible"
            }`}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                onClick={() => scrollToCategory(category.id)}
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryNavigation;
