'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ShieldCheck, Tag, ArrowRight, Truck } from 'lucide-react';
import { CartItem } from '@/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent?: number; flatDiscount?: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (item.product.salePricePKR * item.quantity), 0);
  
  // Calculate discount
  let discountAmount = 0;
  if (appliedCoupon?.discountPercent) {
    discountAmount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
  } else if (appliedCoupon?.flatDiscount) {
    discountAmount = appliedCoupon.flatDiscount;
  }

  // Free shipping threshold
  const freeShippingThreshold = 4999;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 250;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'MAROON15') {
      setAppliedCoupon({ code: 'MAROON15', discountPercent: 15 });
    } else if (code === 'SAVE500') {
      setAppliedCoupon({ code: 'SAVE500', flatDiscount: 500 });
    } else if (code === 'WOMENPOWER') {
      setAppliedCoupon({ code: 'WOMENPOWER', discountPercent: 10 });
    } else {
      setCouponError('Invalid code. Try MAROON15 or SAVE500');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-purple-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-brand-beige-200 bg-brand-beige-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-purple-700" />
            <span className="font-serif text-lg font-bold text-brand-purple-950">
              Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
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

        {/* Free Shipping Progress bar */}
        <div className="bg-brand-purple-50 px-4 py-3 border-b border-brand-purple-100">
          <div className="flex items-center justify-between text-xs font-semibold text-brand-purple-950 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-brand-purple-700" />
              {isFreeShipping ? (
                <span className="text-emerald-700 font-bold">🎉 Free TCS Delivery Unlocked!</span>
              ) : (
                <span>Add <strong>Rs. {(freeShippingThreshold - subtotal).toLocaleString()}</strong> more for FREE Shipping!</span>
              )}
            </span>
            <span className="text-brand-purple-700">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full bg-brand-purple-200/70 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-brand-purple-700 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-brand-beige-100">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-purple-100 text-brand-purple-700 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-purple-950">Your Bag is Empty</h3>
              <p className="text-xs text-brand-beige-700 max-w-xs mx-auto">
                Explore our handcrafted women&apos;s maroon leather jackets with middle-class friendly PKR prices!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-full bg-brand-purple-600 hover:bg-brand-purple-700 text-white text-xs font-bold transition shadow-soft-purple"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="pt-4 first:pt-0 flex gap-3.5">
                
                {/* Product Thumbnail */}
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-brand-beige-100 border border-brand-beige-200 shrink-0">
                  <Image
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-brand-purple-950 line-clamp-1">
                      {item.product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-brand-beige-700 mt-0.5">
                      <span>Size: <strong className="text-brand-purple-900">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span>{item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-brand-beige-300 rounded-lg bg-brand-beige-50">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                        className="px-2 py-0.5 text-brand-purple-950 hover:bg-brand-beige-200 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold text-brand-purple-950">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                        className="px-2 py-0.5 text-brand-purple-950 hover:bg-brand-beige-200 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total in PKR */}
                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-extrabold text-brand-maroon-800">
                        Rs. {(item.product.salePricePKR * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="p-1 text-brand-beige-600 hover:text-rose-600 transition"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-brand-beige-200 bg-brand-beige-50/70 space-y-3">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter coupon (e.g. MAROON15)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-white border border-brand-beige-300 rounded-xl py-1.5 pl-8 pr-3 text-xs text-brand-purple-950 uppercase font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
                  />
                  <Tag className="w-3.5 h-3.5 text-brand-purple-700 absolute left-2.5 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-brand-purple-700 hover:bg-brand-purple-800 text-white rounded-xl text-xs font-bold transition"
                >
                  Apply
                </button>
              </div>

              {appliedCoupon && (
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center justify-between">
                  <span>Code <strong>{appliedCoupon.code}</strong> applied!</span>
                  <button 
                    type="button"
                    onClick={() => { setAppliedCoupon(null); setCouponCode(''); }}
                    className="text-rose-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}
              {couponError && (
                <div className="text-[11px] text-rose-600">{couponError}</div>
              )}
            </form>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs pt-1 border-t border-brand-beige-200 text-brand-beige-800">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-brand-purple-950">Rs. {subtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Special Discount:</span>
                  <span>- Rs. {discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Nationwide Courier:</span>
                <span className={shippingFee === 0 ? "text-emerald-700 font-bold" : "text-brand-purple-950 font-bold"}>
                  {shippingFee === 0 ? "FREE" : `Rs. ${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-extrabold text-brand-purple-950 pt-2 border-t border-brand-beige-200">
                <span>Total Amount:</span>
                <span className="text-brand-maroon-800 font-black">Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-700 hover:to-brand-purple-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-soft-purple transition hover:scale-[1.01] active:scale-[0.98]"
            >
              <span>Proceed to Checkout (COD)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[11px] text-brand-beige-700 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cash on Delivery • Open Parcel Allowed</span>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
