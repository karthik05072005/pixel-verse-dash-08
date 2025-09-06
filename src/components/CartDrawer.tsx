import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartDrawer = ({ isOpen, items, onClose, onUpdateQuantity, onRemoveItem }: CartDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Handle escape key and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="backdrop fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l-4 border-primary z-50 slide-in-right overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-border-muted">
          <h2 
            id="cart-title"
            className="text-xl font-bold text-primary"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            SHOPPING CART
          </h2>
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-foreground/30 mx-auto mb-4" />
              <h3 
                className="text-lg font-bold text-foreground/70 mb-2"
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                CART IS EMPTY
              </h3>
              <p className="text-foreground/50 mb-6">
                Add some awesome toys to get started!
              </p>
              <button
                onClick={onClose}
                className="btn-neon"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 panel-neon p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                      loading="lazy"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-bold text-primary text-sm mb-1 truncate"
                        style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-foreground/70 mb-2">
                        ${item.price.toFixed(2)} each
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="qty-control"
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        
                        <span 
                          className="w-8 text-center text-sm font-bold text-accent"
                          style={{ fontFamily: 'var(--font-pixel)' }}
                        >
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="qty-control"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-destructive hover:text-destructive/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive rounded ml-2"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span 
                        className="font-bold text-accent"
                        style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem' }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t-2 border-border-muted pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Items ({itemCount}):</span>
                  <span 
                    className="font-bold text-primary"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-lg">
                  <span 
                    className="font-bold text-primary"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    TOTAL:
                  </span>
                  <span 
                    className="font-bold text-accent text-xl"
                    style={{ fontFamily: 'var(--font-pixel)' }}
                  >
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t-2 border-border-muted space-y-3">
            <button className="w-full btn-neon py-4">
              PROCEED TO CHECKOUT
            </button>
            <button
              onClick={onClose}
              className="w-full btn-neon secondary py-3"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;