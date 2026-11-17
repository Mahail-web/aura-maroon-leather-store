'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-12 bg-brand-beige-100/60 border-t border-b border-brand-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-100 text-brand-purple-900 text-xs font-bold">
            <MessageSquareHeart className="w-3.5 h-3.5 text-brand-purple-700" />
            <span>Middle-Class Pakistani Customer Voices</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-purple-950">
            Loved Across Lahore, Karachi & Islamabad
          </h2>
          <p className="text-xs sm:text-sm text-brand-beige-800">
            Read authentic reviews from women who switched from expensive imported brands to our affordable Sialkot-crafted maroon jackets.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-brand-purple-950">
              4.9 / 5.0 Rating (890+ Happy Buyers)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CUSTOMER_REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl border border-brand-beige-200 p-5 shadow-xs hover:shadow-soft-beige transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-brand-beige-500">{review.date}</span>
                </div>

                {/* Review Title */}
                <h4 className="font-serif text-xs sm:text-sm font-bold text-brand-purple-950 line-clamp-1">
                  &quot;{review.title}&quot;
                </h4>

                {/* Comment */}
                <p className="text-xs text-brand-beige-800 leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              {/* Author & City info */}
              <div className="pt-3 border-t border-brand-beige-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-brand-purple-950 flex items-center gap-1">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[10px] text-brand-beige-600 font-medium">
                    {review.city}
                  </div>
                </div>

                <div className="text-[10px] text-brand-purple-800 font-semibold bg-brand-purple-50 px-2 py-0.5 rounded border border-brand-purple-200 max-w-[120px] truncate">
                  {review.productName}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner bottom */}
        <div className="bg-white rounded-2xl border border-brand-beige-200 p-4 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-xs text-brand-purple-950 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span><strong>Open Parcel Inspection</strong> on every delivery</span>
          </div>
          <div className="h-4 w-px bg-brand-beige-300 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🇵🇰</span>
            <span>Handcrafted in <strong>Sialkot, Pakistan</strong></span>
          </div>
          <div className="h-4 w-px bg-brand-beige-300 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-brand-purple-700 font-bold">7-Day</span>
            <span>Hassle-Free Doorstep Size Exchange</span>
          </div>
        </div>

      </div>
    </section>
  );
};
