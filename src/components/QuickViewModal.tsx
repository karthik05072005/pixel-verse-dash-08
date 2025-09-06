import { X, ShoppingCart, Star, Package } from "lucide-react";
import { useEffect, useRef } from "react";
import { Product } from "../types";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }: QuickViewModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Focus first interactive element
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="backdrop fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-surface border-4 border-primary max-w-2xl w-full max-h-[90vh] overflow-y-auto bounce-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-border-muted">
            <h2 
              id="modal-title"
              className="text-xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              QUICK VIEW
            </h2>
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className="p-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.featured && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold">
                      <Star className="h-3 w-3" />
                      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>FEATURED</span>
                    </div>
                  )}
                  
                  {!product.inStock && (
                    <div className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold">
                      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>OUT OF STOCK</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h3 
                    className="text-2xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span 
                      className="text-3xl font-bold text-accent"
                      style={{ fontFamily: 'var(--font-pixel)' }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <span className="text-sm text-foreground/70 bg-surface-hover px-2 py-1 border border-border-muted">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-surface-hover text-foreground/80 border border-border-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-foreground/70" />
                  <span className={`font-semibold ${product.inStock ? 'text-primary' : 'text-destructive'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                  {product.inStock ? (
                    <button
                      onClick={handleAddToCart}
                      className="w-full btn-neon py-4 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>ADD TO CART</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full btn-neon py-4 opacity-50 cursor-not-allowed"
                    >
                      OUT OF STOCK
                    </button>
                  )}
                  
                  <button
                    onClick={onClose}
                    className="w-full btn-neon secondary py-3"
                  >
                    CONTINUE BROWSING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;