'use client';

import React, { useState } from 'react';
import { X, Table, CheckCircle2, AlertCircle, Copy, ExternalLink, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({ isOpen, onClose }) => {
  const serviceAccountEmail = "women-leather-jackets@ecommerce-chatbot-515011.iam.gserviceaccount.com";
  
  const [sheetInput, setSheetInput] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [statusResult, setStatusResult] = useState<{
    success: boolean;
    title?: string;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(serviceAccountEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestConnection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sheetInput.trim()) return;

    setIsTesting(true);
    setStatusResult(null);

    try {
      const res = await fetch('/api/sheet-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sheetUrlOrId: sheetInput }),
      });

      const data = await res.json();
      if (data.success) {
        setStatusResult({
          success: true,
          title: data.sheetTitle,
          message: data.message,
        });
      } else {
        setStatusResult({
          success: false,
          message: data.message || data.error,
        });
      }
    } catch (err: any) {
      setStatusResult({
        success: false,
        message: 'Network error connecting to API route.',
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-purple-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-brand-beige-300 p-6 sm:p-8"
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
            <Table className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google Sheets Live Order Sync</span>
          </div>
          <h2 className="font-serif text-2xl font-extrabold text-brand-purple-950">
            Connect Your Google Sheet
          </h2>
          <p className="text-xs text-brand-beige-800 leading-relaxed">
            Every customer order placed on this website (COD, Customer Name, Phone, City, Maroon Jacket Style, Total PKR) will automatically record into your Google Sheet in real-time.
          </p>
        </div>

        {/* 2-Step Instructions */}
        <div className="space-y-4 mb-6">
          
          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-brand-beige-50 border border-brand-beige-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-purple-900 uppercase tracking-wider">
                Step 1: Share Your Google Sheet
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                Required
              </span>
            </div>
            <p className="text-xs text-brand-beige-800">
              Open your Google Sheet, click the top-right <strong className="text-brand-purple-950">&quot;Share&quot;</strong> button, and add this Service Account email as <strong className="text-emerald-700">&quot;Editor&quot;</strong>:
            </p>

            <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-brand-beige-300">
              <span className="text-xs font-mono text-brand-purple-950 select-all flex-1 truncate">
                {serviceAccountEmail}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1 bg-brand-purple-700 hover:bg-brand-purple-800 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <form onSubmit={handleTestConnection} className="p-4 rounded-2xl bg-brand-purple-50/70 border border-brand-purple-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-purple-900 uppercase tracking-wider">
                Step 2: Paste Google Sheet Link or ID
              </span>
            </div>

            <div className="space-y-1">
              <input
                type="text"
                placeholder="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit"
                value={sheetInput}
                onChange={(e) => setSheetInput(e.target.value)}
                className="w-full bg-white border border-brand-beige-300 rounded-xl py-2 px-3 text-xs text-brand-purple-950 focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
              />
              <span className="text-[10px] text-brand-beige-600 block">
                Paste the full URL from your browser address bar.
              </span>
            </div>

            <button
              type="submit"
              disabled={isTesting || !sheetInput.trim()}
              className="w-full py-2.5 px-4 bg-brand-purple-700 hover:bg-brand-purple-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-soft-purple"
            >
              {isTesting ? (
                <span>Checking Permissions & Connection...</span>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Test Connection & Verify Access</span>
                </>
              )}
            </button>
          </form>

        </div>

        {/* Status Result */}
        {statusResult && (
          <div className={`p-4 rounded-2xl border text-xs space-y-1.5 mb-6 animate-in fade-in duration-200 ${
            statusResult.success
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-bold">
              {statusResult.success ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Connection Verified!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Permission Check Failed</span>
                </>
              )}
            </div>
            <p className="text-xs leading-relaxed">
              {statusResult.message}
            </p>
          </div>
        )}

        {/* Columns Preview */}
        <div className="border-t border-brand-beige-200 pt-4">
          <span className="text-[11px] font-bold text-brand-purple-950 uppercase tracking-wider block mb-2">
            Auto-Generated Google Sheet Columns:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[10px] text-brand-purple-900 font-medium">
            {[
              'Order ID', 'Date & Time', 'Customer Name', 'Phone', 'City', 
              'Address', 'Items (Size & Shade)', 'Subtotal PKR', 'Courier Fee', 
              'Total PKR', 'Payment (COD)', 'TCS Tracking', 'Status'
            ].map((col, idx) => (
              <span key={idx} className="bg-brand-beige-100 border border-brand-beige-300 px-2 py-0.5 rounded">
                {col}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
