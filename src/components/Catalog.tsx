import { useState, useMemo } from "react";
import { products, categories } from "../data/products";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import FilterChip from "./FilterChip";

interface CatalogProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  searchQuery: string;
}

const Catalog = ({ onAddToCart, onQuickView, searchQuery }: CatalogProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="catalog" className="py-16 bg-surface/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            ARCADE CATALOG
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our collection of futuristic toys, gadgets, and collectibles. 
            Each item is crafted to bring the cyberpunk aesthetic into your world.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-foreground/70">
              {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid-products">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="panel-neon max-w-md mx-auto">
              <h3 
                className="text-xl font-bold text-primary mb-2"
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                NO TOYS FOUND
              </h3>
              <p className="text-foreground/70 mb-4">
                {searchQuery 
                  ? `No products match "${searchQuery}" in the ${activeCategory} category.`
                  : `No products found in the ${activeCategory} category.`
                }
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                }}
                className="btn-neon"
              >
                VIEW ALL PRODUCTS
              </button>
            </div>
          </div>
        )}

        {/* Featured Section */}
        {activeCategory === "All" && !searchQuery && (
          <div className="mt-16">
            <h3 
              className="text-2xl font-bold text-secondary mb-8 text-center"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              FEATURED COLLECTION
            </h3>
            <div className="grid-products">
              {products
                .filter((product) => product.featured)
                .slice(0, 3)
                .map((product) => (
                  <ProductCard
                    key={`featured-${product.id}`}
                    product={product}
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;