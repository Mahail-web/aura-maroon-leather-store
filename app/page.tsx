'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { PriceComparisonBanner } from '@/components/PriceComparisonBanner';
import { FilterSidebar } from '@/components/FilterSidebar';
import { ProductGrid } from '@/components/ProductGrid';
import { QuickViewModal } from '@/components/QuickViewModal';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { GoogleSheetsModal } from '@/components/GoogleSheetsModal';
import { Chatbot } from '@/components/Chatbot';
import { ReviewsSection } from '@/components/ReviewsSection';
import { Footer } from '@/components/Footer';

import { MAROON_PRODUCTS } from '@/data/products';
import { CartItem, Product } from '@/types';

export default function Home() {
  // Navigation & Modals State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['prod-01', 'prod-02']); // Sample initial liked jackets
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

    // Search
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

    // Style
    if (selectedStyle !== 'All') {
      result = result.filter((p) => p.style === selectedStyle);
    }

    // Price
    if (priceRange === 'under6500') {
      result = result.filter((p) => p.salePricePKR < 6500);
    } else if (priceRange === '6500-7500') {
      result = result.filter((p) => p.salePricePKR >= 6500 && p.salePricePKR <= 7500);
    } else if (priceRange === 'above7500') {
      result = result.filter((p) => p.salePricePKR > 7500);
    }

    // Size
    if (selectedSize !== 'All') {
      result = result.filter((p) => p.sizes.includes(selectedSize as any));
    }

    // Finish
    if (selectedFinish !== 'All') {
      result = result.filter((p) => p.finish === selectedFinish);
    }

    // Sorting
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

  return (
    <div className="min-h-screen flex flex-col bg-brand-beige-50">
      
      {/* Navbar */}
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
        
        {/* Collection Hero Banner with Feminine Purple & Beige theme */}
        <HeroBanner
          selectedStyle={selectedStyle}
          onSelectStyle={(s) => setSelectedStyle(s)}
          totalProductsCount={filteredProducts.length}
        />

        {/* Price Comparison Explanation */}
        <PriceComparisonBanner />

        {/* Main Products Grid with Filter Sidebar */}
        <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Filter Sidebar (Desktop & Tablet) */}
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

            {/* Product Grid (3 columns on desktop) */}
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

        {/* Verified Pakistani Customer Reviews Section */}
        <ReviewsSection />

      </main>

      {/* Footer */}
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

      {/* Google Sheets Live Sync Modal */}
      <GoogleSheetsModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
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

      {/* Floating AI Shopping Assistant & Sizing Chatbot */}
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
