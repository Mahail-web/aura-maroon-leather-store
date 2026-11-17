'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F0F0F0] border-t border-brand-beige-200 pt-36 sm:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 pb-12 border-b border-black/10">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-sans font-black text-3xl tracking-tighter text-brand-purple-950">
                AURA<span className="text-brand-purple-600">.CO</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-brand-beige-800 leading-relaxed max-w-sm">
              We have genuine sheepskin maroon leather jackets that suit your style and which you&apos;re proud to wear. Handcrafted in Sialkot, priced for every Pakistani household.
            </p>
            <div className="flex items-center gap-3 pt-1 text-brand-purple-950">
              <span className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs font-bold shadow-2xs hover:bg-brand-purple-600 hover:text-white transition cursor-pointer">
                𝕏
              </span>
              <span className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs font-bold shadow-2xs hover:bg-brand-purple-600 hover:text-white transition cursor-pointer">
                f
              </span>
              <span className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs font-bold shadow-2xs hover:bg-brand-purple-600 hover:text-white transition cursor-pointer">
                📷
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-purple-950">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-800 font-medium">
              <li><a href="#collection" className="hover:text-brand-purple-600">About Sialkot Craft</a></li>
              <li><a href="#collection" className="hover:text-brand-purple-600">Maroon Collection</a></li>
              <li><a href="#price-comparison" className="hover:text-brand-purple-600">Why Affordable</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Artisan Careers</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-purple-950">
              HELP
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-800 font-medium">
              <li><a href="#" className="hover:text-brand-purple-600">Customer Support</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">TCS Delivery Times</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Open-Parcel Terms</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">7-Day Free Exchange</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-purple-950">
              FAQ
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-800 font-medium">
              <li><a href="#" className="hover:text-brand-purple-600">Account</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Track TCS Order</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Cash on Delivery</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Leather Care Tips</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-purple-950">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-800 font-medium">
              <li><a href="#" className="hover:text-brand-purple-600">Pakistani Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Tannery Standards</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Video Walkthrough</a></li>
              <li><a href="#" className="hover:text-brand-purple-600">Styling Lookbook</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-beige-700">
          <div>
            Aura.co © 2000-2026, All Rights Reserved. Handcrafted in Sialkot, Pakistan.
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-2 font-bold text-[10px]">
            <span className="bg-white border border-black/10 px-2.5 py-1 rounded-md text-brand-purple-950 shadow-2xs">
              Cash on Delivery (COD)
            </span>
            <span className="bg-white border border-black/10 px-2.5 py-1 rounded-md text-brand-purple-950 shadow-2xs">
              JazzCash
            </span>
            <span className="bg-white border border-black/10 px-2.5 py-1 rounded-md text-brand-purple-950 shadow-2xs">
              EasyPaisa
            </span>
            <span className="bg-white border border-black/10 px-2.5 py-1 rounded-md text-brand-purple-950 shadow-2xs">
              Visa / Master
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
