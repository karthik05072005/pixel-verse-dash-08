import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

// ToyVerse Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import CartDrawer from "./components/CartDrawer";
import QuickViewModal from "./components/QuickViewModal";
import Footer from "./components/Footer";

// Hooks and Types
import { useCart } from "./hooks/useCart";
import { Product } from "./types";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const { toast } = useToast();
  
  // Cart functionality with localStorage persistence
  const {
    items: cartItems,
    isOpen: isCartOpen,
    addItem: addToCart,
    updateQuantity: updateCartQuantity,
    removeItem: removeFromCart,
    getTotalItems,
    openCart,
    closeCart
  } = useCart();

  // Handle adding items to cart with toast notification
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  // Handle quick view modal
  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with cart and search */}
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={openCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Catalog */}
        <Catalog
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
          searchQuery={searchQuery}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={closeCart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default App;
