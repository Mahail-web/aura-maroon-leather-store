'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
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
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <div 
      className="group flex flex-col justify-between cursor-pointer space-y-3 transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
    >
      
      {/* Shop.co Image Container with Soft Rounded Corners */}
      <div className="relative aspect-[3/4] w-full bg-[#F0EEED] rounded-[20px] overflow-hidden">
        
        <Image
          src={isHovered ? product.hoverImage : product.primaryImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Discount Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#FF3333]/15 text-[#FF3333] border border-[#FF3333]/20 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
            -{product.discountPercent}%
          </span>
        </div>

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 hover:bg-white text-brand-purple-950 shadow-xs'
          }`}
          title="Save to wishlist"
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Actions */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 rounded-full bg-white text-brand-purple-950 font-bold text-xs shadow-md flex items-center justify-center gap-1.5 hover:bg-brand-beige-50 transition"
          >
            <Eye className="w-3.5 h-3.5 text-brand-purple-600" />
            <span>Quick View</span>
          </button>
        </div>

      </div>

      {/* Product Content */}
      <div className="space-y-1.5 px-1">
        
        {/* Title */}
        <h3 className="font-sans font-bold text-sm sm:text-base text-brand-purple-950 group-hover:text-brand-purple-600 transition line-clamp-1">
          {product.name}
        </h3>

        {/* Shop.co Rating format: ★★★★★ 4.9/5 */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-brand-purple-950 text-xs">
            {product.rating}<span className="text-brand-beige-600 font-normal">/5</span>
          </span>
        </div>

        {/* Shop.co Price row: Current Price + Strikethrough + Discount */}
        <div className="flex items-center gap-2.5 pt-1">
          <span className="font-sans font-black text-base sm:text-lg text-brand-purple-950">
            Rs. {product.salePricePKR.toLocaleString()}
          </span>
          <span className="font-sans font-bold text-xs sm:text-sm text-brand-beige-600 line-through">
            Rs. {product.originalPricePKR.toLocaleString()}
          </span>
          <span className="bg-[#FF3333]/10 text-[#FF3333] text-[10px] font-black px-2 py-0.5 rounded-full">
            -{product.discountPercent}%
          </span>
        </div>

        {/* Quick Add Button */}
        <div className="pt-2">
          <button
            onClick={handleAdd}
            className={`w-full py-2 px-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-purple-950 hover:bg-brand-purple-800 text-white'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
