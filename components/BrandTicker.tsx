'use client';

import React from 'react';

export const BrandTicker: React.FC = () => {
  const trustFeatures = [
    "100% REAL SHEEPSKIN",
    "RUST-PROOF YKK ZIPPERS",
    "SIALKOT ARTISAN DIRECT",
    "OPEN-PARCEL CHECK ALLOWED",
    "CASH ON DELIVERY (COD)",
    "7-DAY DOORSTEP EXCHANGE",
  ];

  return (
    <div className="bg-brand-purple-950 py-7 overflow-hidden text-white border-b border-brand-purple-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-center">
        {trustFeatures.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="font-sans font-black text-sm sm:text-base tracking-widest text-brand-beige-100 hover:text-amber-300 transition uppercase cursor-default">
              {feature}
            </span>
            {idx !== trustFeatures.length - 1 && (
              <span className="text-brand-purple-600 hidden md:inline">✦</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
