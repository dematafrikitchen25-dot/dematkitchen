import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsAppButton = () => {
  return (
    <Button
      variant="order"
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-elegant hover:shadow-glow animate-bounce-subtle"
      asChild
    >
      <a
        href="https://wa.me/+97471962487"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </Button>
  );
};

export default FloatingWhatsAppButton;
