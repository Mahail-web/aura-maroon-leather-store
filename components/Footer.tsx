'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, Sparkles, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-brand-purple-950 text-brand-beige-200 border-t border-brand-purple-900">
      
      {/* Newsletter Bar */}
      <div className="bg-gradient-to-r from-brand-purple-900 via-brand-purple-800 to-brand-maroon-900 py-8 px-4 sm:px-6 lg:px-8 border-b border-brand-purple-800/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
              Exclusive Pakistani Member Club
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Get an Extra Rs. 500 OFF Your First Order
            </h3>
            <p className="text-xs text-brand-beige-200 max-w-md">
              Receive secret flash sale alerts, styling tips for maroon leather, and seasonal winter drops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 max-w-md">
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-brand-beige-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <Mail className="w-4 h-4 text-brand-beige-300 absolute left-3 top-3 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="py-2.5 px-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-brand-purple-950 text-xs font-bold rounded-xl transition shadow-md whitespace-nowrap"
            >
              {subscribed ? "Voucher Code: FIRST500 🎉" : "Claim Rs. 500 Off"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-extrabold text-white tracking-tight">
                AURA
              </span>
              <span className="h-4 w-px bg-brand-purple-700"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
                LEATHER STUDIO
              </span>
            </div>

            <p className="text-xs text-brand-beige-300 leading-relaxed max-w-sm">
              Crafted in Sialkot, Pakistan. Dedicated to creating export-standard women&apos;s maroon leather jackets that celebrate feminine elegance at honest, accessible prices tailored for middle-class budgets.
            </p>

            <div className="space-y-2 text-xs text-brand-beige-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-purple-400 shrink-0" />
                <span>Small Industries Estate, Sialkot, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-purple-400 shrink-0" />
                <span>Customer Care & WhatsApp: +92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-purple-400 shrink-0" />
                <span>care@auraleather.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
              Maroon Styles
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-300">
              <li><a href="#collection" className="hover:text-amber-300 transition">Asymmetrical Biker</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition">Sherpa & Aviator Bombers</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition">Quilted Moto Jackets</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition">Tailored Leather Blazers</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition">Long Trench Dusters</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition">College Varsity Hybrids</a></li>
            </ul>
          </div>

          {/* Middle-Class Customer Service */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
              Pakistani Buyer Care
            </h4>
            <ul className="space-y-2 text-xs text-brand-beige-300">
              <li><a href="#price-comparison" className="hover:text-amber-300 transition">Why We Are Affordable</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">Open-Parcel Delivery Policy</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">Cash on Delivery (COD) Terms</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">7-Day Free Size Exchange</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">TCS & Leopard Delivery Cities</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">Leather Cleaning & Conditioning</a></li>
            </ul>
          </div>

          {/* Sialkot Atelier Heritage */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
              Craft & Heritage
            </h4>
            <p className="text-xs text-brand-beige-300 leading-relaxed">
              Sialkot produces leather jackets for top international fashion houses in Milan, London, and New York. By selling directly within Pakistan, we eliminate exorbitant export taxes and middleman markups.
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-amber-200">
              🇵🇰 <strong>Support Local Craft:</strong> Every purchase supports our community of master stitchers and tanners.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Payment Partners & Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-purple-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-beige-400">
          
          <div className="flex items-center gap-1 text-center md:text-left">
            <span>© 2026 Aura Leather Studio. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current inline mx-0.5" />
            <span>for Pakistani Women.</span>
          </div>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-brand-beige-300 font-semibold">
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">Cash on Delivery</span>
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">JazzCash</span>
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">EasyPaisa</span>
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">Raast ID</span>
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">TCS Express</span>
            <span className="bg-white/10 px-2.5 py-1 rounded border border-white/15">Visa / Mastercard</span>
          </div>

        </div>

      </div>

    </footer>
  );
};
