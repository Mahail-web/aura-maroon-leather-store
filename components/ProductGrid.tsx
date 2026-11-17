'use client';

import React from 'react';
import { ArrowUpDown, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  sortBy: string;
  setSortBy: (sort: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onResetFilters: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  sortBy,
  setSortBy,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onResetFilters,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl border border-brand-beige-200 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold text-brand-purple-950">
            Maroon Jackets
          </span>
          <span className="text-xs text-brand-beige-700 bg-brand-beige-100 px-2.5 py-0.5 rounded-full font-semibold">
            {products.length} Designs Found
          </span>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <label htmlFor="sortSelect" className="text-xs text-brand-beige-700 font-medium flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-brand-purple-700" />
            <span>Sort By:</span>
          </label>
          <select
            id="sortSelect"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-brand-beige-50 border border-brand-beige-300 rounded-xl py-1.5 px-3 text-xs font-semibold text-brand-purple-950 focus:outline-none focus:ring-2 focus:ring-brand-purple-500 cursor-pointer"
          >
            <option value="featured">Featured (Top Sialkot Picks)</option>
            <option value="price-asc">Price: Low to High (Most Affordable)</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Customer Rating</option>
            <option value="reviews">Most Reviewed in Pakistan</option>
          </select>
        </div>

      </div>

      {/* Grid of Jackets */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-brand-beige-200 p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-brand-purple-50 text-brand-purple-700 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-purple-950">
            No Maroon Jackets Match This Filter
          </h3>
          <p className="text-xs sm:text-sm text-brand-beige-700 max-w-md mx-auto">
            Try adjusting your budget or silhouette filters, or clear all filters to see our complete collection of 12 maroon leather styles.
          </p>
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-purple-600 hover:bg-brand-purple-700 text-white text-xs font-bold transition shadow-soft-purple"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

    </div>
  );
};
