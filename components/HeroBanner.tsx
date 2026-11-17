'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Award, Sparkles, ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
  totalProductsCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  selectedStyle,
  onSelectStyle,
  totalProductsCount,
}) => {
  const styles = [
    { label: 'All Styles', value: 'All' },
    { label: 'Biker & Moto', value: 'Biker' },
    { label: 'Bomber & Casual', value: 'Bomber' },
    { label: 'Shearling & Warm', value: 'Shearling' },
    { label: 'Quilted Details', value: 'Quilted' },
    { label: 'Hooded Streetwear', value: 'Hooded' },
    { label: 'Tailored Blazers', value: 'Blazer' },
    { label: 'Varsity & Hybrid', value: 'Varsity' },
    { label: 'Long Trench', value: 'Trench' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-beige-100 via-brand-beige-50 to-brand-beige-50 border-b border-brand-beige-200">
      
      {/* Decorative feminine ambient background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-brand-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 bg-brand-beige-300/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-16 w-64 h-64 bg-brand-purple-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-brand-beige-700 mb-4">
          <a href="#" className="hover:text-brand-purple-700 transition">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-brand-beige-400" />
          <a href="#" className="hover:text-brand-purple-700 transition">Women</a>
          <ChevronRight className="w-3.5 h-3.5 text-brand-beige-400" />
          <a href="#" className="hover:text-brand-purple-700 transition">Leather Jackets</a>
          <ChevronRight className="w-3.5 h-3.5 text-brand-beige-400" />
          <span className="text-brand-purple-900 font-bold">Maroon Collection</span>
        </nav>

        {/* Main Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            
            {/* Value Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-100/90 border border-brand-purple-300 text-brand-purple-900 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple-600" />
              <span>Direct-to-Consumer Sialkot Atelier • No Boutique Markup</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple-950 tracking-tight leading-tight">
              Women&apos;s Maroon <span className="bg-gradient-to-r from-brand-purple-700 via-brand-maroon-700 to-brand-purple-900 bg-clip-text text-transparent">Leather Jackets</span>
            </h1>

            {/* Description tailored for Pakistani Middle-Class shoppers */}
            <p className="text-sm sm:text-base text-brand-beige-800 max-w-3xl leading-relaxed">
              Why spend <strong className="text-brand-maroon-700 font-bold">Rs. 35,000+</strong> at imported boutiques? Handcrafted with supple milled lamb-touch leather, plush winter shearling, and heavy-duty YKK hardware. Designed for Pakistani women who demand runway elegance at honest, accessible prices starting from <span className="text-brand-purple-800 font-bold bg-brand-purple-50 px-2 py-0.5 rounded border border-brand-purple-200">Rs. 5,490</span>.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-brand-beige-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-brand-purple-100 flex items-center justify-center text-brand-purple-700 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-purple-950">Free TCS Shipping</div>
                  <div className="text-[10px] text-brand-beige-700">Orders above Rs. 4,999</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-brand-beige-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-purple-950">Open Parcel Check</div>
                  <div className="text-[10px] text-brand-beige-700">Inspect before paying COD</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-brand-beige-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-purple-950">7-Day Free Exchange</div>
                  <div className="text-[10px] text-brand-beige-700">Easy size swap doorstep</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-brand-beige-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-800 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-purple-950">Sialkot Craft</div>
                  <div className="text-[10px] text-brand-beige-700">World-famous leather hub</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Highlight Box: The Middle Class Promise */}
          <div className="lg:col-span-4 bg-gradient-to-br from-white to-brand-beige-100/90 border border-brand-beige-300 rounded-2xl p-5 shadow-soft-beige">
            <div className="flex items-center justify-between pb-3 border-b border-brand-beige-200">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-700">
                The Aura Promise
              </span>
              <span className="text-xs bg-brand-maroon-100 text-brand-maroon-800 font-bold px-2 py-0.5 rounded-full">
                Affordability First
              </span>
            </div>

            <div className="space-y-3 py-3 text-xs text-brand-purple-950">
              <div className="flex items-start gap-2">
                <span className="text-brand-purple-600 font-bold">✓</span>
                <span><strong>No Export Middleman:</strong> Built in Sialkot, shipped directly to your house without 300% mall markups.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-purple-600 font-bold">✓</span>
                <span><strong>Realistic Middle-Class Budget:</strong> All 12 designs range between Rs. 5,490 and Rs. 8,950.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-purple-600 font-bold">✓</span>
                <span><strong>Pakistani Silhouette Cut:</strong> Tailored specifically for eastern kurti layering and western casual wear.</span>
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-brand-beige-200 flex items-center justify-between text-xs">
              <span className="text-brand-beige-700">Showing Collection:</span>
              <span className="font-extrabold text-brand-purple-900 bg-brand-purple-100 px-2 py-0.5 rounded">
                {totalProductsCount} Maroon Designs
              </span>
            </div>
          </div>

        </div>

        {/* Quick Style Switcher Chips */}
        <div className="mt-8 pt-6 border-t border-brand-beige-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-beige-800">
              Filter by Silhouette:
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {styles.map((style) => {
              const isSelected = selectedStyle === style.value;
              return (
                <button
                  key={style.value}
                  onClick={() => onSelectStyle(style.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-brand-purple-700 text-white shadow-soft-purple scale-105'
                      : 'bg-white hover:bg-brand-beige-200/80 text-brand-purple-950 border border-brand-beige-300'
                  }`}
                >
                  {style.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
