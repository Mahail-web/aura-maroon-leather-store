'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShieldCheck, Truck, RotateCcw, ShoppingBag, Check, Heart, Ruler, MessageCircle } from 'lucide-react';
import { Product } from '@/types';
import { PAKISTANI_CITIES } from '@/data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product?.primaryImage || '');
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[1] || 'S');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0]?.name || 'Maroon');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState<string>('Lahore');
  const [addedToast, setAddedToast] = useState(false);

  // Sync state if product changes
  React.useEffect(() => {
    if (product) {
      setSelectedImage(product.primaryImage);
      setSelectedSize(product.sizes[1] || 'S');
      setSelectedColor(product.colors[0]?.name || 'Maroon');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  const getCityDeliveryEstimate = (city: string) => {
    if (['Lahore', 'Islamabad', 'Rawalpindi', 'Sialkot'].includes(city)) {
      return '2 Working Days via TCS Express (Next Day Dispatch)';
    }
    if (['Karachi', 'Faisalabad', 'Gujranwala', 'Multan'].includes(city)) {
      return '2 to 3 Working Days via Leopard Express';
    }
    return '3 to 4 Working Days via Trax Courier';
  };

  const savings = product.originalPricePKR - product.salePricePKR;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-purple-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-brand-beige-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-beige-100/90 text-brand-purple-950 hover:bg-brand-purple-100 hover:text-brand-purple-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left: Gallery */}
          <div className="space-y-4">
            
            {/* Main Featured Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-beige-100 border border-brand-beige-200 shadow-inner">
              <Image
                src={selectedImage || product.primaryImage}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition duration-300"
              />
              <div className="absolute top-3 left-3 bg-brand-maroon-700 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                Save {product.discountPercent}%
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                    selectedImage === img ? 'border-brand-purple-600 scale-95 shadow-xs' : 'border-brand-beige-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} angle ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Guarantee Pills */}
            <div className="bg-brand-beige-50 rounded-2xl p-3 border border-brand-beige-200 text-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-purple-950 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open-Parcel Check: Inspect leather before paying COD</span>
              </div>
              <div className="flex items-center gap-2 text-brand-purple-950 font-semibold">
                <RotateCcw className="w-4 h-4 text-brand-purple-700 shrink-0" />
                <span>Free 7-Day Size Exchange across Pakistan</span>
              </div>
            </div>

          </div>

          {/* Right: Product Details */}
          <div className="space-y-5 flex flex-col justify-between">
            
            <div className="space-y-3">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand-purple-700 uppercase tracking-wider">
                  {product.style} • {product.finish}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-brand-beige-600 font-normal">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-purple-950 leading-snug">
                {product.name}
              </h2>

              {/* Price Breakdown in PKR */}
              <div className="p-3.5 bg-brand-purple-50/70 border border-brand-purple-200 rounded-2xl space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-maroon-800">
                    Rs. {product.salePricePKR.toLocaleString()}
                  </span>
                  <span className="text-sm text-brand-beige-600 line-through">
                    Rs. {product.originalPricePKR.toLocaleString()}
                  </span>
                  <span className="text-xs bg-brand-purple-600 text-white font-bold px-2 py-0.5 rounded">
                    Middle-Class Price
                  </span>
                </div>
                <div className="text-xs text-brand-purple-900 font-semibold flex items-center justify-between">
                  <span>Direct Sialkot Workshop Saving:</span>
                  <span className="text-emerald-700 font-bold">You Save Rs. {savings.toLocaleString()}!</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brand-beige-800 leading-relaxed">
                {product.description}
              </p>

              {/* Leather Specifications */}
              <div className="border-t border-b border-brand-beige-200 py-3 space-y-1.5 text-xs">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-brand-beige-600">Leather:</span>
                  <span className="col-span-2 font-medium text-brand-purple-950">{product.leatherType}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-brand-beige-600">Lining:</span>
                  <span className="col-span-2 font-medium text-brand-purple-950">{product.lining}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-brand-beige-600">Hardware:</span>
                  <span className="col-span-2 font-medium text-brand-purple-950">{product.hardware}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-brand-beige-600">Closure:</span>
                  <span className="col-span-2 font-medium text-brand-purple-950">{product.closure}</span>
                </div>
              </div>

              {/* Color selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-brand-purple-950">
                  Leather Shade: <span className="font-normal text-brand-purple-700">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition ${
                        selectedColor === c.name
                          ? 'border-brand-purple-700 bg-brand-purple-50 text-brand-purple-950'
                          : 'border-brand-beige-300 bg-white text-brand-beige-800 hover:bg-brand-beige-50'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${c.class} shadow-inner`}></span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-brand-purple-950">
                    Select Size: <span className="font-normal text-brand-purple-700">{selectedSize}</span>
                  </label>
                  <button
                    onClick={onOpenSizeGuide}
                    className="text-xs text-brand-purple-700 hover:text-brand-purple-900 font-bold flex items-center gap-1 hover:underline"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Pakistani Size Chart</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        selectedSize === s
                          ? 'bg-brand-purple-700 text-white shadow-soft-purple scale-105'
                          : 'bg-brand-beige-100 hover:bg-brand-beige-200 text-brand-purple-950'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* City Delivery Estimator */}
              <div className="bg-brand-beige-100/70 p-3 rounded-2xl border border-brand-beige-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-purple-950 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-brand-purple-700" />
                    <span>Delivery Time to Your City:</span>
                  </span>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-white border border-brand-beige-300 rounded-lg text-xs font-semibold py-1 px-2 text-brand-purple-950 focus:outline-none focus:ring-1 focus:ring-brand-purple-500"
                  >
                    {PAKISTANI_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="text-[11px] text-brand-purple-900 font-medium">
                  {getCityDeliveryEstimate(selectedCity)} • <strong>Cash on Delivery (COD) Available</strong>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-brand-beige-200 space-y-3">
              
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-brand-beige-300 rounded-xl bg-brand-beige-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-brand-purple-950 hover:bg-brand-beige-200 rounded-l-xl text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-extrabold text-brand-purple-950 min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-brand-purple-950 hover:bg-brand-beige-200 rounded-r-xl text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition duration-200 shadow-soft-purple ${
                    addedToast
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-purple-600 hover:bg-brand-purple-700 text-white hover:scale-[1.01] active:scale-[0.98]'
                  }`}
                >
                  {addedToast ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart • Rs. {(product.salePricePKR * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>

                {/* Wishlist Heart */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3 rounded-xl border transition ${
                    isWishlisted
                      ? 'border-rose-400 bg-rose-50 text-rose-600'
                      : 'border-brand-beige-300 bg-white text-brand-purple-900 hover:bg-brand-beige-50'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Order option */}
              <a
                href={`https://wa.me/923001234567?text=Hi%20Aura%20Leather!%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}%20(Rs.%20${product.salePricePKR})%20in%20Size%20${selectedSize}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Quick Order via WhatsApp (+92 300 1234567)</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
