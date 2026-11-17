'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, Eye, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || 'S');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Maroon');
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  const savingsPKR = product.originalPricePKR - product.salePricePKR;

  return (
    <div 
      className="group relative bg-white rounded-2xl border border-brand-beige-200 overflow-hidden shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Image Area */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-brand-beige-100 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        
        {/* Primary and secondary hover image */}
        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src={isHovered ? product.hoverImage : product.primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-opacity duration-300"
            priority={false}
          />
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badge && (
            <span className="bg-gradient-to-r from-brand-purple-700 to-brand-purple-900 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              {product.badge}
            </span>
          )}
          <span className="bg-brand-maroon-700 text-brand-beige-50 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
            {product.discountPercent}% OFF
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-white/80 hover:bg-white text-brand-purple-900 shadow-sm hover:scale-105'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white/95 hover:bg-white text-brand-purple-950 text-xs font-semibold py-2 px-3 rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 transition active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-brand-purple-600" />
            <span>Quick View</span>
          </button>
        </div>

        {/* COD pill badge bottom left */}
        <div className="absolute bottom-3 left-3 opacity-90 group-hover:opacity-0 transition-opacity duration-200">
          <span className="bg-brand-beige-50/90 text-brand-purple-950 text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" /> COD Available
          </span>
        </div>

      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        
        <div>
          {/* Style Category & Rating */}
          <div className="flex items-center justify-between text-xs text-brand-beige-700 mb-1">
            <span className="font-semibold text-brand-purple-700 tracking-wide uppercase text-[11px]">
              {product.style} • {product.finish}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-brand-beige-600 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-sm sm:text-base font-bold text-brand-purple-950 group-hover:text-brand-purple-700 transition cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          {/* Price & Savings in PKR */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-brand-maroon-800 tracking-tight">
              Rs. {product.salePricePKR.toLocaleString()}
            </span>
            <span className="text-xs text-brand-beige-600 line-through">
              Rs. {product.originalPricePKR.toLocaleString()}
            </span>
          </div>

          {/* Middle Class Savings pill */}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[10px] font-bold text-brand-purple-800 bg-brand-purple-100/90 px-2 py-0.5 rounded">
              You Save Rs. {savingsPKR.toLocaleString()}
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">
              Free Delivery
            </span>
          </div>
        </div>

        {/* Size Selection quick bar */}
        <div className="pt-2 border-t border-brand-beige-100 space-y-2">
          
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-brand-beige-700 font-medium">Size: <strong>{selectedSize}</strong></span>
            <span className="text-brand-beige-600 text-[10px]">Pakistani Fit</span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] font-semibold px-2 py-1 rounded-md transition ${
                  selectedSize === size
                    ? 'bg-brand-purple-700 text-white shadow-xs'
                    : 'bg-brand-beige-100 text-brand-purple-900 hover:bg-brand-beige-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition duration-200 shadow-sm ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-purple-600 hover:bg-brand-purple-700 text-white hover:shadow-soft-purple active:scale-[0.98]'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart • Rs. {product.salePricePKR.toLocaleString()}</span>
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
};
