'use client';

import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [userBust, setUserBust] = useState<number>(36);

  if (!isOpen) return null;

  // Predict size based on bust in inches
  const getPredictedSize = (bust: number) => {
    if (bust <= 33) return { size: 'XS', fit: 'Snug & Tailored', note: 'Best for petit frames and light inner shirts' };
    if (bust <= 35) return { size: 'S', fit: 'Standard Fit', note: 'Comfortable over everyday tops and tees' };
    if (bust <= 37) return { size: 'M', fit: 'Most Popular PK Fit', note: 'Perfect balance allowing light sweater or kurti layering' };
    if (bust <= 40) return { size: 'L', fit: 'Relaxed Comfort', note: 'Allows winter cardigan or hoodie layering' };
    if (bust <= 43) return { size: 'XL', fit: 'Roomy Comfort', note: 'Generous cut around bust and shoulders' };
    return { size: '2XL', fit: 'Extended Fit', note: 'Full comfort, or choose Custom Made for tailored dimensions' };
  };

  const prediction = getPredictedSize(userBust);

  const measurements = [
    { size: 'XS', bustIn: '32-33', bustCm: '81-84', shoulderIn: '14.5', shoulderCm: '37', waistIn: '26-27', waistCm: '66-69', sleeveIn: '23.0', sleeveCm: '58.5', lengthIn: '21.0', lengthCm: '53' },
    { size: 'S', bustIn: '34-35', bustCm: '86-89', shoulderIn: '15.0', shoulderCm: '38', waistIn: '28-29', waistCm: '71-74', sleeveIn: '23.5', sleeveCm: '60', lengthIn: '21.5', lengthCm: '55' },
    { size: 'M', bustIn: '36-37', bustCm: '91-94', shoulderIn: '15.5', shoulderCm: '39.5', waistIn: '30-31', waistCm: '76-79', sleeveIn: '24.0', sleeveCm: '61', lengthIn: '22.0', lengthCm: '56' },
    { size: 'L', bustIn: '38-40', bustCm: '96-102', shoulderIn: '16.0', shoulderCm: '41', waistIn: '32-34', waistCm: '81-86', sleeveIn: '24.5', sleeveCm: '62', lengthIn: '22.5', lengthCm: '57' },
    { size: 'XL', bustIn: '41-43', bustCm: '104-109', shoulderIn: '16.5', shoulderCm: '42', waistIn: '35-37', waistCm: '89-94', sleeveIn: '25.0', sleeveCm: '63.5', lengthIn: '23.0', lengthCm: '58.5' },
    { size: '2XL', bustIn: '44-46', bustCm: '112-117', shoulderIn: '17.0', shoulderCm: '43.5', waistIn: '38-40', waistCm: '96-102', sleeveIn: '25.5', sleeveCm: '65', lengthIn: '23.5', lengthCm: '60' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-purple-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-brand-beige-300 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-beige-100 text-brand-purple-950 hover:bg-brand-purple-100 hover:text-brand-purple-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-100 text-brand-purple-800 text-xs font-bold">
            <Ruler className="w-3.5 h-3.5" />
            <span>Pakistani Silhouette Standard Guide</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-purple-950">
            Find Your Exact Jacket Size
          </h2>
          <p className="text-xs sm:text-sm text-brand-beige-800">
            Our jackets are tailored specifically for Pakistani body measurements. Never guess your size again with our instant fit calculator.
          </p>
        </div>

        {/* Interactive Fit Calculator */}
        <div className="bg-gradient-to-br from-brand-purple-900 to-brand-maroon-900 rounded-2xl p-5 text-white mb-6 shadow-md space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Interactive Sizing Tool
              </span>
              <h3 className="font-serif text-lg font-bold">
                Slide to your Bust / Chest measurement:
              </h3>
            </div>
            
            {/* Unit Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20 self-start sm:self-auto">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition ${
                  unit === 'inches' ? 'bg-white text-brand-purple-950 shadow-sm' : 'text-brand-beige-200 hover:text-white'
                }`}
              >
                Inches (&quot;)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition ${
                  unit === 'cm' ? 'bg-white text-brand-purple-950 shadow-sm' : 'text-brand-beige-200 hover:text-white'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-bold text-sm">
              <span>Selected Bust:</span>
              <span className="text-xl text-amber-300 font-extrabold bg-white/15 px-3 py-1 rounded-lg border border-white/20">
                {unit === 'inches' ? `${userBust}"` : `${Math.round(userBust * 2.54)} cm`}
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="46"
              step="1"
              value={userBust}
              onChange={(e) => setUserBust(parseInt(e.target.value))}
              className="w-full accent-amber-400 h-2 bg-white/20 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-brand-beige-300 font-medium">
              <span>30&quot; (XS)</span>
              <span>36&quot; (M)</span>
              <span>42&quot; (XL)</span>
              <span>46&quot; (2XL)</span>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-3.5 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs text-brand-beige-200">Recommended Size for You:</div>
              <div className="text-xs text-emerald-300 font-medium">{prediction.note}</div>
            </div>
            <div className="bg-amber-400 text-brand-purple-950 px-4 py-2 rounded-xl text-center shadow-md">
              <div className="text-xl font-black">{prediction.size}</div>
              <div className="text-[10px] uppercase font-bold tracking-wider">{prediction.fit}</div>
            </div>
          </div>

        </div>

        {/* Detailed Measurement Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-sm font-bold text-brand-purple-950">
              Full Garment Measurement Chart ({unit === 'inches' ? 'Inches' : 'Centimeters'})
            </h3>
            <span className="text-[11px] text-brand-beige-600">Standard Pakistani Cut</span>
          </div>

          <div className="overflow-x-auto border border-brand-beige-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-beige-100 text-brand-purple-950 font-bold border-b border-brand-beige-200">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">Bust</th>
                  <th className="p-3">Shoulder</th>
                  <th className="p-3">Waist</th>
                  <th className="p-3">Sleeve</th>
                  <th className="p-3">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige-100 text-brand-purple-900">
                {measurements.map((m) => {
                  const isCurrent = m.size === prediction.size;
                  return (
                    <tr 
                      key={m.size}
                      className={isCurrent ? 'bg-brand-purple-50 font-bold text-brand-purple-950' : 'hover:bg-brand-beige-50'}
                    >
                      <td className="p-3 flex items-center gap-1.5">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs ${
                          isCurrent ? 'bg-brand-purple-700 text-white font-bold' : 'bg-brand-beige-200 text-brand-purple-950'
                        }`}>
                          {m.size}
                        </span>
                        {isCurrent && <span className="text-[10px] text-brand-purple-700 uppercase font-bold">(Your Match)</span>}
                      </td>
                      <td className="p-3">{unit === 'inches' ? `${m.bustIn}"` : `${m.bustCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${m.shoulderIn}"` : `${m.shoulderCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${m.waistIn}"` : `${m.waistCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${m.sleeveIn}"` : `${m.sleeveCm} cm`}</td>
                      <td className="p-3">{unit === 'inches' ? `${m.lengthIn}"` : `${m.lengthCm} cm`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Exchange Guarantee */}
        <div className="mt-6 p-4 rounded-2xl bg-brand-beige-100 border border-brand-beige-300 flex items-start gap-3">
          <RotateCcw className="w-5 h-5 text-brand-purple-700 shrink-0 mt-0.5" />
          <div className="text-xs text-brand-purple-950 space-y-1">
            <span className="font-bold">Worried about the fit? Don&apos;t be!</span>
            <p className="text-brand-beige-800 leading-snug">
              Every jacket ordered from Aura Leather Studio comes with a <strong>100% Free 7-Day Size Exchange</strong>. If your jacket feels too snug or too loose, our courier rider will deliver the replacement size right to your doorstep and pick up the other one!
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
