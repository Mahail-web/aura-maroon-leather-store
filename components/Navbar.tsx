'use client';

import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Sparkles, ShieldCheck, Truck, Phone, ChevronDown } from 'lucide-react';
import { CartItem, Product } from '@/types';

interface NavbarProps {
  cartItems: CartItem[];
  wishlist: string[];
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenSizeGuide: () => void;
  onOpenSheetsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  wishlist,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  onOpenSizeGuide,
  onOpenSheetsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.product.salePricePKR * item.quantity), 0);

  return (
    <header className="sticky top-0 z-40 bg-brand-beige-50/95 backdrop-blur-md border-b border-brand-beige-200 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-purple-900 via-brand-purple-700 to-brand-maroon-800 text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="bg-brand-purple-500/30 text-brand-purple-100 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-brand-purple-400/40 uppercase">
              Pakistan Middle-Class Special
            </span>
            <span>✨ <strong>FREE Delivery</strong> Across Pakistan on orders above Rs. 4,999 | <strong>Cash on Delivery (COD)</strong> Available</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-brand-beige-100">
            <button
              onClick={onOpenSheetsModal}
              className="inline-flex items-center gap-1 bg-emerald-500/30 hover:bg-emerald-500/50 text-emerald-200 border border-emerald-400/40 px-2 py-0.5 rounded transition cursor-pointer"
              title="Google Sheets Live Order Sync"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Google Sheet Sync</span>
            </button>
            <span className="hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Open-Parcel Inspection Allowed
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-amber-300" /> Delivery via TCS & Leopard in 2-3 Days
            </span>
            <span className="text-amber-200 font-bold bg-white/10 px-2 py-0.5 rounded border border-white/20">
              Code: MAROON15 (15% OFF)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-purple-900 hover:bg-brand-purple-50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 ml-1 rounded-lg text-brand-purple-900 hover:bg-brand-purple-50 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start">
            <a href="#" className="flex flex-col items-center md:items-start group">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-purple-700 via-brand-purple-900 to-brand-maroon-700 bg-clip-text text-transparent group-hover:from-brand-purple-600 transition">
                  AURA
                </span>
                <span className="h-4 w-px bg-brand-beige-400"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-purple-700">
                  LEATHER
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-beige-700 group-hover:text-brand-purple-600 transition">
                Women&apos;s Maroon Collective • Sialkot Craft
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            <a 
              href="#collection" 
              className="text-brand-purple-950 hover:text-brand-purple-600 font-semibold transition border-b-2 border-brand-purple-600 pb-1"
            >
              Maroon Jackets
            </a>
            <a 
              href="#bestsellers" 
              className="text-brand-purple-900/80 hover:text-brand-purple-600 transition"
            >
              Bestsellers
            </a>
            <a 
              href="#price-comparison" 
              className="flex items-center gap-1 text-brand-purple-900/80 hover:text-brand-purple-600 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-purple-600" />
              <span>Why Affordable?</span>
            </a>
            <button 
              onClick={onOpenSizeGuide}
              className="text-brand-purple-900/80 hover:text-brand-purple-600 transition"
            >
              Pakistani Size Guide
            </button>
            <a 
              href="#reviews" 
              className="text-brand-purple-900/80 hover:text-brand-purple-600 transition"
            >
              Customer Reviews
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Input on Desktop */}
            <div className="hidden lg:flex items-center relative w-56 xl:w-64">
              <input
                type="text"
                placeholder="Search maroon jackets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-beige-100/80 border border-brand-beige-300 rounded-full py-1.5 pl-9 pr-3 text-xs text-brand-purple-950 placeholder-brand-beige-600 focus:outline-none focus:ring-2 focus:ring-brand-purple-500 focus:bg-white transition"
              />
              <Search className="w-4 h-4 text-brand-purple-700 absolute left-3 pointer-events-none" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-xs text-brand-beige-600 hover:text-brand-purple-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Currency Pill */}
            <div className="hidden sm:flex items-center gap-1.5 bg-brand-beige-100 border border-brand-beige-300 rounded-full px-2.5 py-1 text-xs font-semibold text-brand-purple-950 shadow-sm">
              <span className="text-sm">🇵🇰</span>
              <span>PKR (Rs.)</span>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-brand-purple-900 hover:bg-brand-purple-100/70 hover:text-brand-purple-700 transition"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-maroon-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button with Subtotal */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-700 hover:to-brand-purple-800 text-white rounded-full pl-3 pr-4 py-2 text-xs font-semibold shadow-soft-purple transition hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-brand-purple-950 text-[9px] font-extrabold w-3.5 h-3.5 rounded-full flex items-center justify-center shadow">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {totalCartCount === 0 ? 'Bag (0)' : `Rs. ${cartSubtotal.toLocaleString()}`}
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Search Bar toggle */}
      {searchOpen && (
        <div className="p-3 bg-brand-beige-100 border-t border-brand-beige-200 md:hidden animate-in slide-in-from-top duration-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jackets by name, biker, shearling..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-beige-300 rounded-xl py-2 pl-10 pr-4 text-sm text-brand-purple-950 placeholder-brand-beige-600 focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
              autoFocus
            />
            <Search className="w-5 h-5 text-brand-purple-600 absolute left-3 top-2.5" />
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-beige-50 border-b border-brand-beige-300 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-sm text-brand-purple-950">
            <a 
              href="#collection" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg bg-brand-purple-100/80 text-brand-purple-800 font-semibold"
            >
              🧥 Women&apos;s Maroon Leather Collection
            </a>
            <a 
              href="#bestsellers" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-brand-beige-100 text-brand-purple-900"
            >
              ⭐ Most Popular in Pakistan
            </a>
            <a 
              href="#price-comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-brand-beige-100 text-brand-purple-900"
            >
              💰 Price Comparison: Why We are 70% Cheaper
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeGuide();
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-brand-beige-100 text-brand-purple-900"
            >
              📏 Pakistani Size Measurement Guide
            </button>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-brand-beige-100 text-brand-purple-900"
            >
              💬 Customer Reviews from Lahore, Karachi & Islamabad
            </a>
          </div>

          <div className="pt-3 border-t border-brand-beige-200 flex items-center justify-between text-xs text-brand-beige-700">
            <span>Cash on Delivery across Pakistan</span>
            <span className="font-bold text-brand-purple-700">TCS & Leopard Express</span>
          </div>
        </div>
      )}
    </header>
  );
};
