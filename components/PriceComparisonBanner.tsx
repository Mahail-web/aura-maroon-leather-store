'use client';

import React from 'react';
import { Check, X, Sparkles, TrendingDown, DollarSign } from 'lucide-react';

export const PriceComparisonBanner: React.FC = () => {
  return (
    <section id="price-comparison" className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-brand-purple-900 via-brand-purple-800 to-brand-maroon-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-maroon-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-beige-200 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Middle-Class Affordability Promise
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-beige-50">
              Why Pay <span className="text-rose-300 line-through">Rs. 38,000+</span> for Maroon Leather?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-beige-200">
              How we made export-standard women&apos;s maroon leather jackets accessible to every Pakistani household without cutting corners on leather grade or stitching durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* The Old Export / Boutique Way */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-beige-100">
                    High-End Export Boutiques
                  </h3>
                  <p className="text-xs text-brand-beige-300">The Jacket Maker & Mall Brands</p>
                </div>
                <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2.5 py-1 rounded-full border border-rose-500/30">
                  Export Pricing
                </span>
              </div>

              <div className="py-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-rose-300">
                  Rs. 35,000 - 65,000+
                </div>
                <div className="text-xs text-brand-beige-400 mt-1">
                  Out of reach for average middle-class budgets
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-brand-beige-300">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>300% brand marketing markups and international agency cuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>High commercial mall rental overheads in Gulberg & Clifton</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Dollar-pegged foreign export price lists converted to PKR</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Often requires advance credit card payment without open-box check</span>
                </li>
              </ul>
            </div>

            {/* Aura Leather Studio (Direct Sialkot Craft) */}
            <div className="bg-gradient-to-br from-brand-purple-600/90 to-brand-purple-700/90 border-2 border-brand-purple-400/80 rounded-2xl p-6 space-y-4 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-amber-400 text-brand-purple-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                ⭐ Honest Middle-Class Value
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-brand-purple-400/40">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Aura Leather Studio
                  </h3>
                  <p className="text-xs text-brand-beige-100">Sialkot Artisan Workshop Direct</p>
                </div>
                <span className="text-xs bg-emerald-500/30 text-emerald-200 font-bold px-2.5 py-1 rounded-full border border-emerald-400/40">
                  Save Up to 75%
                </span>
              </div>

              <div className="py-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                  Rs. 5,490 - 8,950
                </div>
                <div className="text-xs text-brand-beige-100 mt-1 font-medium">
                  Affordable for university students & working professionals
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-brand-beige-100">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Direct Sialkot Tannery:</strong> Zero middleman, direct artisan-to-doorstep craft</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Same Hardware:</strong> Heavy-gauge anti-rust YKK metallic zippers & satin lining</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Open Parcel Before Payment:</strong> Check the leather quality before paying courier</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Full Nationwide COD:</strong> Cash on Delivery, JazzCash, EasyPaisa, & Raast</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom callout */}
          <div className="mt-8 text-center text-xs text-brand-beige-200 flex flex-wrap items-center justify-center gap-4">
            <span>✨ Premium Supple Milled Leather</span>
            <span>•</span>
            <span>🇵🇰 100% Made in Sialkot, Pakistan</span>
            <span>•</span>
            <span>🚚 Free TCS Delivery on Rs. 4,999+</span>
            <span>•</span>
            <span>🔄 7-Day Easy Size Swap</span>
          </div>

        </div>

      </div>
    </section>
  );
};
