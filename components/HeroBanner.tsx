'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F2F0F1] border-b border-brand-beige-200">
      
      {/* Decorative Four-Point Sparkle Stars (Shop.co signature) */}
      <div className="absolute top-12 right-12 text-brand-purple-600 hidden lg:block animate-pulse">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-[45%] text-brand-purple-400 hidden lg:block scale-75">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Typography & Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-black tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple-600" />
              <span>Middle-Class Affordable Collection • Direct From Sialkot</span>
            </div>

            {/* Shop.co Massive Bold Headline */}
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-brand-purple-950 uppercase tracking-tight leading-[1.05]">
              FIND MAROON LEATHER THAT MATCHES <span className="text-brand-purple-600">YOUR STYLE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-brand-beige-800 max-w-xl leading-relaxed">
              Browse through our diverse range of meticulously crafted women&apos;s maroon leather jackets. Real sheepskin leather, authentic YKK zippers, and tailored Pakistani fits—starting from only <strong>Rs. 5,490</strong> instead of high-end export prices of Rs. 35,000+.
            </p>

            {/* Shop Now CTA Button */}
            <div className="pt-2">
              <a
                href="#collection"
                className="inline-flex items-center justify-center px-12 py-3.5 bg-brand-purple-950 hover:bg-brand-purple-800 text-white font-bold text-sm rounded-full transition shadow-md hover:scale-105 active:scale-95"
              >
                Shop Now
              </a>
            </div>

            {/* Shop.co Signature 3-Column Metrics Row */}
            <div className="pt-6 border-t border-brand-beige-300 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-black text-2xl sm:text-3xl text-brand-purple-950">12+</div>
                <div className="text-xs text-brand-beige-700 font-medium">Maroon Silhouettes</div>
              </div>
              <div className="border-l border-brand-beige-300 pl-4">
                <div className="font-black text-2xl sm:text-3xl text-brand-purple-600">80%</div>
                <div className="text-xs text-brand-beige-700 font-medium">Savings vs TJM</div>
              </div>
              <div className="border-l border-brand-beige-300 pl-4">
                <div className="font-black text-2xl sm:text-3xl text-brand-purple-950">30,000+</div>
                <div className="text-xs text-brand-beige-700 font-medium">Happy Pakistani Buyers</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Fashion Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85"
                alt="Women's Maroon Leather Biker Jacket - Aura Studio"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 inset-x-4 bg-brand-purple-950/80 backdrop-blur-md rounded-2xl p-3 text-white text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold">Flashback Maroon Biker</div>
                  <div className="text-[11px] text-brand-beige-200">100% Genuine Sheepskin</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-amber-300">Rs. 6,850</div>
                  <div className="text-[10px] line-through text-brand-beige-400">Rs. 13,900</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
