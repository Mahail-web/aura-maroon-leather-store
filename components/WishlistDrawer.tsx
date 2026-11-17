'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '@/types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveFromWishlist,
  onAddToCart,
  onQuickView,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-purple-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-brand-beige-200 bg-brand-beige-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-current" />
            <span className="font-serif text-lg font-bold text-brand-purple-950">
              Saved Wishlist ({wishlistedProducts.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-brand-beige-200 text-brand-purple-950 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-brand-beige-100">
          {wishlistedProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-purple-950">No Saved Jackets Yet</h3>
              <p className="text-xs text-brand-beige-700 max-w-xs mx-auto">
                Click the heart icon on any maroon leather jacket to save it to your wishlist for later.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-full bg-brand-purple-600 hover:bg-brand-purple-700 text-white text-xs font-bold transition shadow-soft-purple"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5">
                
                {/* Image */}
                <div 
                  className="relative w-20 h-24 rounded-xl overflow-hidden bg-brand-beige-100 border border-brand-beige-200 shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onQuickView(product);
                  }}
                >
                  <Image
                    src={product.primaryImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 
                      onClick={() => {
                        onClose();
                        onQuickView(product);
                      }}
                      className="font-serif text-xs sm:text-sm font-bold text-brand-purple-950 hover:text-brand-purple-700 cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs sm:text-sm font-extrabold text-brand-maroon-800">
                        Rs. {product.salePricePKR.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-brand-beige-600 line-through">
                        Rs. {product.originalPricePKR.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        onAddToCart(product, product.sizes[1] || 'S', product.colors[0]?.name || 'Maroon');
                      }}
                      className="flex-1 py-1.5 px-3 rounded-lg bg-brand-purple-600 hover:bg-brand-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-1.5 rounded-lg text-brand-beige-600 hover:text-rose-600 hover:bg-brand-beige-100 transition"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-brand-beige-200 bg-brand-beige-50/70 text-center text-xs text-brand-beige-700">
          <span>All items in your wishlist are eligible for Cash on Delivery</span>
        </div>

      </div>

    </div>
  );
};
