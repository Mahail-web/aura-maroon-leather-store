'use client';

import React from 'react';
import { Filter, RotateCcw, Sparkles, ChevronDown } from 'lucide-react';

interface FilterSidebarProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedFinish: string;
  setSelectedFinish: (finish: string) => void;
  onResetFilters: () => void;
  totalFiltered: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedStyle,
  setSelectedStyle,
  priceRange,
  setPriceRange,
  selectedSize,
  setSelectedSize,
  selectedFinish,
  setSelectedFinish,
  onResetFilters,
  totalFiltered,
}) => {
  const styles = ['All', 'Biker', 'Bomber', 'Shearling', 'Quilted', 'Hooded', 'Blazer', 'Varsity', 'Trench'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', '2XL', 'Custom Made'];
  const finishes = ['All', 'Semi-Aniline', 'Matte Nappa', 'Distressed Vintage', 'Suede Velvet Touch'];

  const isFiltered = selectedStyle !== 'All' || priceRange !== 'All' || selectedSize !== 'All' || selectedFinish !== 'All';

  return (
    <aside className="w-full bg-white rounded-2xl border border-brand-beige-200 p-5 shadow-xs space-y-6">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-brand-beige-200">
        <div className="flex items-center gap-2 text-brand-purple-950 font-bold text-sm">
          <Filter className="w-4 h-4 text-brand-purple-700" />
          <span>Filter Collection ({totalFiltered})</span>
        </div>
        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="text-xs text-brand-purple-700 hover:text-brand-purple-900 font-semibold flex items-center gap-1 hover:underline"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {/* Middle Class Price Filter in PKR */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple-950 flex items-center justify-between">
          <span>Affordable Budget (PKR)</span>
          <span className="text-[10px] text-brand-purple-700 bg-brand-purple-50 px-2 py-0.5 rounded border border-brand-purple-200">
            Middle Class
          </span>
        </label>
        <div className="space-y-2 text-xs">
          {[
            { label: 'All Affordable Prices (Rs. 5,490 - 8,950)', value: 'All' },
            { label: 'Under Rs. 6,500 (Budget Friendly)', value: 'under6500' },
            { label: 'Rs. 6,500 - Rs. 7,500 (Most Popular)', value: '6500-7500' },
            { label: 'Above Rs. 7,500 (Heavy Shearling & Trench)', value: 'above7500' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${
                priceRange === option.value
                  ? 'bg-brand-purple-50 text-brand-purple-900 font-bold border border-brand-purple-200'
                  : 'text-brand-beige-800 hover:bg-brand-beige-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === option.value}
                  onChange={() => setPriceRange(option.value)}
                  className="text-brand-purple-600 focus:ring-brand-purple-500 accent-brand-purple-600"
                />
                <span>{option.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Style / Silhouette */}
      <div className="space-y-3 pt-3 border-t border-brand-beige-200">
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple-950">
          Jacket Silhouette
        </label>
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`py-1.5 px-2.5 rounded-lg text-left transition font-medium ${
                selectedStyle === style
                  ? 'bg-brand-purple-700 text-white font-bold shadow-xs'
                  : 'bg-brand-beige-50 text-brand-beige-900 hover:bg-brand-beige-100'
              }`}
            >
              {style === 'All' ? 'All Silhouettes' : style}
            </button>
          ))}
        </div>
      </div>

      {/* Pakistani Sizing */}
      <div className="space-y-3 pt-3 border-t border-brand-beige-200">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple-950">
            Available Size
          </label>
          <span className="text-[10px] text-brand-beige-600">Standard PK</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`text-xs py-1 px-2.5 rounded-md font-semibold transition ${
                selectedSize === size
                  ? 'bg-brand-purple-700 text-white shadow-xs'
                  : 'bg-brand-beige-100 text-brand-purple-950 hover:bg-brand-beige-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Finish & Texture */}
      <div className="space-y-3 pt-3 border-t border-brand-beige-200">
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple-950">
          Leather Finish
        </label>
        <div className="space-y-1.5 text-xs">
          {finishes.map((finish) => (
            <button
              key={finish}
              onClick={() => setSelectedFinish(finish)}
              className={`w-full py-1.5 px-2.5 rounded-lg text-left transition font-medium ${
                selectedFinish === finish
                  ? 'bg-brand-purple-100 text-brand-purple-900 font-bold border border-brand-purple-300'
                  : 'text-brand-beige-800 hover:bg-brand-beige-50'
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </div>

      {/* Sialkot Craft Highlight */}
      <div className="p-3 bg-gradient-to-br from-brand-beige-100 to-brand-beige-200/80 rounded-xl border border-brand-beige-300 text-xs space-y-1.5">
        <div className="font-bold text-brand-purple-950 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-brand-purple-700" />
          <span>Open Parcel Allowed</span>
        </div>
        <p className="text-[11px] text-brand-beige-800 leading-snug">
          Inspect the leather quality, stitching, and zippers before paying cash to the TCS rider!
        </p>
      </div>

    </aside>
  );
};
