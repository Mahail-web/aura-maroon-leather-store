'use client';

import React from 'react';
import Image from 'next/image';

interface BrowseByStyleProps {
  onSelectStyle: (style: string) => void;
}

export const BrowseByStyle: React.FC<BrowseByStyleProps> = ({ onSelectStyle }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Shop.co Signature Rounded Bento Grid Box */}
      <div className="bg-[#F0F0F0] rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 md:p-16">
        
        {/* Title */}
        <h2 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl text-center text-brand-purple-950 uppercase tracking-tight mb-8 sm:mb-12">
          BROWSE BY JACKET SILHOUETTE
        </h2>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1 (1 Col): Biker & Moto */}
          <div 
            onClick={() => {
              onSelectStyle('Biker');
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-1 relative h-56 sm:h-64 rounded-[20px] overflow-hidden bg-white cursor-pointer group shadow-xs hover:shadow-md transition duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
              alt="Biker & Moto Leather Jackets"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/70 via-transparent to-transparent" />
            <h3 className="absolute top-5 left-5 font-sans font-black text-xl sm:text-2xl text-white uppercase drop-shadow-md">
              Biker Motos
            </h3>
            <span className="absolute bottom-5 left-5 text-xs text-brand-beige-200 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              4 Silhouettes • From Rs. 6,490
            </span>
          </div>

          {/* Card 2 (2 Cols Wide): Shearling & Aviator Bombers */}
          <div 
            onClick={() => {
              onSelectStyle('Shearling');
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-2 relative h-56 sm:h-64 rounded-[20px] overflow-hidden bg-white cursor-pointer group shadow-xs hover:shadow-md transition duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80"
              alt="Shearling & Aviator Leather Jackets"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/70 via-transparent to-transparent" />
            <h3 className="absolute top-5 left-5 font-sans font-black text-xl sm:text-2xl text-white uppercase drop-shadow-md">
              Shearling & Bombers
            </h3>
            <span className="absolute bottom-5 left-5 text-xs text-brand-beige-200 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              Plush Winter Warmth • Rs. 8,450
            </span>
          </div>

          {/* Card 3 (2 Cols Wide): Quilted & Streetwear */}
          <div 
            onClick={() => {
              onSelectStyle('Quilted');
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-2 relative h-56 sm:h-64 rounded-[20px] overflow-hidden bg-white cursor-pointer group shadow-xs hover:shadow-md transition duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=80"
              alt="Quilted Leather Jackets"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/70 via-transparent to-transparent" />
            <h3 className="absolute top-5 left-5 font-sans font-black text-xl sm:text-2xl text-white uppercase drop-shadow-md">
              Quilted Motos
            </h3>
            <span className="absolute bottom-5 left-5 text-xs text-brand-beige-200 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              Artisan Diamond Stitch • From Rs. 6,490
            </span>
          </div>

          {/* Card 4 (1 Col): Tailored Blazers & Trench */}
          <div 
            onClick={() => {
              onSelectStyle('Blazer');
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-1 relative h-56 sm:h-64 rounded-[20px] overflow-hidden bg-white cursor-pointer group shadow-xs hover:shadow-md transition duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
              alt="Tailored Leather Blazers"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-950/70 via-transparent to-transparent" />
            <h3 className="absolute top-5 left-5 font-sans font-black text-xl sm:text-2xl text-white uppercase drop-shadow-md">
              Tailored Blazers
            </h3>
            <span className="absolute bottom-5 left-5 text-xs text-brand-beige-200 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              Executive Luxe • Rs. 7,850
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
