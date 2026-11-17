'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/data/products';

export const HappyCustomers: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : CUSTOMER_REVIEWS.length - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < CUSTOMER_REVIEWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Header with Title and Arrows (Shop.co signature) */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <h2 className="font-sans font-black text-2xl sm:text-4xl text-brand-purple-950 uppercase tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full border border-brand-purple-950/20 hover:bg-brand-beige-100 text-brand-purple-950 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full border border-brand-purple-950/20 hover:bg-brand-beige-100 text-brand-purple-950 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Grid (3 visible cards on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="rounded-[20px] border border-black/10 p-6 sm:p-7 bg-white shadow-xs space-y-3.5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Stars */}
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Author with Verified Badge */}
              <div className="flex items-center gap-1.5 font-bold text-base text-brand-purple-950">
                <span>{review.author}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              </div>

              {/* Review Text in quotes */}
              <p className="text-xs sm:text-sm text-brand-beige-800 leading-relaxed">
                &quot;{review.comment}&quot;
              </p>
            </div>

            {/* City & Product Tag */}
            <div className="pt-3 border-t border-brand-beige-200 flex items-center justify-between text-xs text-brand-beige-600">
              <span>{review.city}</span>
              <span className="font-semibold text-brand-purple-700">{review.productName}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
