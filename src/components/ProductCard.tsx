import { ShoppingCart, Eye, Zap } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onQuickView }: ProductCardProps) => {
  return (
    <div className="panel-neon group relative">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10 flex items-center space-x-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold">
          <Zap className="h-3 w-3" />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>FEATURED</span>
        </div>
      )}

      {/* Out of Stock Overlay */}
      {!product.inStock && (
        <div className="absolute inset-0 z-10 bg-background/80 flex items-center justify-center">
          <span 
            className="text-destructive font-bold text-lg transform -rotate-12"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            OUT OF STOCK
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.description}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button
            onClick={() => onQuickView(product)}
            className="p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="h-5 w-5" />
          </button>
          
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="p-2 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-3">
        <div>
          <h3 
            className="text-lg font-bold text-primary mb-1"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}
          >
            {product.name}
          </h3>
          <p className="text-sm text-foreground/70 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-surface-hover text-foreground/80 border border-border-muted"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2">
          <span 
            className="text-xl font-bold text-accent"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}
          >
            ${product.price}
          </span>
          
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="btn-neon px-4 py-2 text-xs"
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;