'use client';

import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Table } from 'lucide-react';
import { CartItem } from '@/types';

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
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-brand-beige-200">
      
      {/* Shop.co Top Announcement Bar */}
      {announcementVisible && (
        <div className="bg-brand-purple-950 text-white text-xs py-2.5 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
            <div className="flex-1 text-center font-medium">
              <span>Sign up and get 15% off your first maroon leather jacket order. </span>
              <a href="#newsletter" className="underline font-bold text-amber-300 hover:text-white transition ml-1">
                Claim Code: MAROON15
              </a>
            </div>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="text-brand-beige-300 hover:text-white text-xs p-1 hidden sm:block"
              aria-label="Close Announcement"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Shop.co Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-purple-950 md:hidden hover:bg-brand-beige-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Shop.co Bold Brand Logo: AURA.CO */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-baseline gap-1 group">
              <span className="font-sans font-black text-2xl sm:text-3xl tracking-tighter text-brand-purple-950 group-hover:text-brand-purple-700 transition">
                AURA<span className="text-brand-purple-600">.CO</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-brand-beige-600 hidden sm:inline">
                LEATHER
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-brand-purple-900 shrink-0">
            <a href="#collection" className="hover:text-brand-purple-600 transition flex items-center gap-1">
              <span>Shop</span>
              <ChevronDown className="w-3.5 h-3.5 text-brand-beige-600" />
            </a>
            <a href="#collection" className="hover:text-brand-purple-600 transition">
              On Sale
            </a>
            <a href="#new-arrivals" className="hover:text-brand-purple-600 transition">
              New Arrivals
            </a>
            <button
              onClick={onOpenSizeGuide}
              className="hover:text-brand-purple-600 transition cursor-pointer"
            >
              Size Guide
            </button>
            <a href="#price-comparison" className="hover:text-brand-purple-600 transition">
              Why Affordable?
            </a>
          </nav>

          {/* Shop.co Wide Pill Search Bar */}
          <div className="hidden sm:flex flex-1 items-center relative max-w-md lg:max-w-xl">
            <input
              type="text"
              placeholder="Search for women's maroon leather jackets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F0EEED] hover:bg-[#eae7e5] focus:bg-white border border-transparent focus:border-brand-purple-400 rounded-full py-2.5 pl-11 pr-4 text-xs font-medium text-brand-purple-950 placeholder-brand-beige-600 focus:outline-none focus:ring-2 focus:ring-brand-purple-500/20 transition"
            />
            <Search className="w-4 h-4 text-brand-beige-600 absolute left-4 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 text-xs text-brand-beige-600 hover:text-brand-purple-950"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Google Sheets Sync Pill */}
            <button
              onClick={onOpenSheetsModal}
              className="hidden lg:flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-semibold transition"
              title="Google Sheet Live Order Sync"
            >
              <Table className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sheet Sync</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-brand-purple-950 hover:bg-brand-beige-100 transition"
              title="Saved Jackets"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute 0 top-1 right-1 bg-brand-maroon-700 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shop.co Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-brand-purple-950 hover:bg-brand-beige-100 transition"
              title="Shopping Bag"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute top-1 right-1 bg-brand-purple-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>

          </div>

        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 sm:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search maroon jackets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F0EEED] rounded-full py-2 pl-10 pr-4 text-xs font-medium text-brand-purple-950 placeholder-brand-beige-600 focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
            />
            <Search className="w-4 h-4 text-brand-beige-600 absolute left-3.5 top-2.5" />
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-beige-200 px-5 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-sm text-brand-purple-950">
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-purple-600">
              Shop Maroon Collection
            </a>
            <a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-purple-600">
              New Arrivals
            </a>
            <a href="#top-selling" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-purple-600">
              Top Selling Jackets
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeGuide();
              }}
              className="text-left hover:text-brand-purple-600"
            >
              Pakistani Sizing Guide
            </button>
            <a href="#price-comparison" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-purple-600">
              Why 80% More Affordable?
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSheetsModal();
              }}
              className="text-left text-emerald-700 font-bold"
            >
              📊 Connect Google Sheet
            </button>
          </nav>
        </div>
      )}

    </header>
  );
};
