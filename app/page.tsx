'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { BrandTicker } from '@/components/BrandTicker';
import { BrowseByStyle } from '@/components/BrowseByStyle';
import { HappyCustomers } from '@/components/HappyCustomers';
import { NewsletterOverlay } from '@/components/NewsletterOverlay';
import { PriceComparisonBanner } from '@/components/PriceComparisonBanner';
import { FilterSidebar } from '@/components/FilterSidebar';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductCard } from '@/components/ProductCard';
import { QuickViewModal } from '@/components/QuickViewModal';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { GoogleSheetsModal } from '@/components/GoogleSheetsModal';
import { Chatbot } from '@/components/Chatbot';
import { Footer } from '@/components/Footer';

import { MAROON_PRODUCTS } from '@/data/products';
import { CartItem, Product } from '@/types';

export default function Home() {
  // Navigation & Modals State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['prod-01', 'prod-02']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedFinish, setSelectedFinish] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Add to Cart Handler
  const handleAddToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSize: size, selectedColor: color, quantity }];
      }
    });
  };

  // Quantity Update
  const handleUpdateQuantity = (productId: string, size: string, color: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Remove Item
  const handleRemoveItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
      )
    );
  };

  // Toggle Wishlist
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedStyle('All');
    setPriceRange('All');
    setSelectedSize('All');
    setSelectedFinish('All');
    setSearchQuery('');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...MAROON_PRODUCTS];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.style.toLowerCase().includes(q) ||
          p.finish.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (selectedStyle !== 'All') {
      result = result.filter((p) => p.style === selectedStyle);
    }

    if (priceRange === 'under6500') {
      result = result.filter((p) => p.salePricePKR < 6500);
    } else if (priceRange === '6500-7500') {
      result = result.filter((p) => p.salePricePKR >= 6500 && p.salePricePKR <= 7500);
    } else if (priceRange === 'above7500') {
      result = result.filter((p) => p.salePricePKR > 7500);
    }

    if (selectedSize !== 'All') {
      result = result.filter((p) => p.sizes.includes(selectedSize as any));
    }

    if (selectedFinish !== 'All') {
      result = result.filter((p) => p.finish === selectedFinish);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.salePricePKR - b.salePricePKR);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.salePricePKR - a.salePricePKR);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [searchQuery, selectedStyle, priceRange, selectedSize, selectedFinish, sortBy]);

  // Shop.co Split: New Arrivals (first 4) & Top Selling (next 4)
  const newArrivals = useMemo(() => MAROON_PRODUCTS.slice(0, 4), []);
  const topSelling = useMemo(() => MAROON_PRODUCTS.slice(4, 8), []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. Shop.co Navbar */}
      <Navbar
        cartItems={cartItems}
        wishlist={wishlist}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenSheetsModal={() => setIsSheetsModalOpen(true)}
      />

      <main className="flex-1">
        
        {/* 2. Shop.co Hero Section */}
        <HeroBanner />

        {/* 3. Shop.co Brand Ticker */}
        <BrandTicker />

        {/* 4. Shop.co Signature Section: NEW ARRIVALS */}
        <section id="new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-brand-beige-200">
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-center text-brand-purple-950 uppercase tracking-tight mb-10">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p, size, color) => handleAddToCart(p, size, color)}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#collection"
              className="inline-block px-14 py-3 rounded-full border border-black/10 hover:border-brand-purple-600 hover:text-brand-purple-600 font-bold text-xs sm:text-sm text-brand-purple-950 transition"
            >
              View All Maroon Jackets
            </a>
          </div>
        </section>

        {/* 5. Shop.co Signature Section: TOP SELLING */}
        <section id="top-selling" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-brand-beige-200">
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-center text-brand-purple-950 uppercase tracking-tight mb-10">
            TOP SELLING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSelling.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p, size, color) => handleAddToCart(p, size, color)}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#collection"
              className="inline-block px-14 py-3 rounded-full border border-black/10 hover:border-brand-purple-600 hover:text-brand-purple-600 font-bold text-xs sm:text-sm text-brand-purple-950 transition"
            >
              View All Top Sellers
            </a>
          </div>
        </section>

        {/* 6. Shop.co Bento Grid: BROWSE BY JACKET SILHOUETTE */}
        <BrowseByStyle
          onSelectStyle={(style) => {
            setSelectedStyle(style);
          }}
        />

        {/* 7. Price Comparison (The Jacket Maker vs Aura Studio) */}
        <PriceComparisonBanner />

        {/* 8. Full Product Collection with Filter Sidebar */}
        <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-purple-600 uppercase tracking-wider">
              Handcrafted in Sialkot, Pakistan
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-brand-purple-950 uppercase tracking-tight mt-1">
              Explore Complete Maroon Collection ({filteredProducts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Filter Sidebar */}
            <div className="lg:col-span-1 sticky top-28">
              <FilterSidebar
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedFinish={selectedFinish}
                setSelectedFinish={setSelectedFinish}
                onResetFilters={handleResetFilters}
                totalFiltered={filteredProducts.length}
              />
            </div>

            {/* Product Grid (3 cols on desktop) */}
            <div className="lg:col-span-3">
              <ProductGrid
                products={filteredProducts}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p, size, color) => handleAddToCart(p, size, color)}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onResetFilters={handleResetFilters}
              />
            </div>

          </div>
        </section>

        {/* 9. Shop.co Testimonials Carousel */}
        <HappyCustomers />

        {/* 10. Shop.co Overlapping Newsletter Banner */}
        <NewsletterOverlay />

      </main>

      {/* 11. Shop.co Multi-Column Footer */}
      <Footer />

      {/* MODALS & DRAWERS */}
      
      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size, color, qty) => handleAddToCart(p, size, color, qty)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Interactive Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        products={MAROON_PRODUCTS}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(p, s, c) => {
          handleAddToCart(p, s, c);
          setIsWishlistOpen(false);
          setIsCartOpen(true);
        }}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Pakistani Nationwide Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      {/* Google Sheets Sync Modal */}
      <GoogleSheetsModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
      />

      {/* Floating AI Shopping Stylist Chatbot */}
      <Chatbot
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onFilterUnder7000={() => setPriceRange('under6500')}
        onFilterStyle={(style) => setSelectedStyle(style)}
        onQuickViewProduct={(slug) => {
          const found = MAROON_PRODUCTS.find((p) => p.slug === slug);
          if (found) setQuickViewProduct(found);
        }}
      />

    </div>
  );
}
