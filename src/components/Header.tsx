import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ cartItemsCount, onCartClick, searchQuery, onSearchChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b-2 border-primary/30">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-2xl mx-8">
            <SearchBox 
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search arcade treasures..."
            />
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={`Shopping cart with ${cartItemsCount} items`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center"
                  style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}
                >
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/30 fade-in">
            <SearchBox 
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search arcade treasures..."
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;