'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export const NewsletterOverlay: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div id="newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mb-24 z-20">
      
      {/* Shop.co Signature Rounded Black/Dark Newsletter Banner */}
      <div className="bg-brand-purple-950 rounded-[28px] sm:rounded-[36px] p-7 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Bold All-Caps Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight leading-tight">
              STAY UP TO DATE ABOUT OUR LATEST MAROON DROPS & OFFERS
            </h2>
          </div>

          {/* Right: Email Input + Button */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-brand-purple-950 placeholder-brand-beige-600 rounded-full py-3.5 pl-12 pr-4 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <Mail className="w-5 h-5 text-brand-beige-600 absolute left-4 top-3.5" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-brand-beige-100 text-brand-purple-950 font-bold text-xs sm:text-sm transition duration-200 shadow-md"
              >
                {subscribed ? (
                  <span className="flex items-center justify-center gap-1.5 text-emerald-700 font-extrabold">
                    <Check className="w-4 h-4" />
                    <span>Coupon Code: MAROON15 Activated!</span>
                  </span>
                ) : (
                  "Subscribe to Newsletter"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};
