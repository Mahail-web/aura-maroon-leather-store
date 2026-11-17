'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="font-serif text-2xl font-bold text-brand-purple-950">
        Something went wrong
      </h2>
      <p className="text-xs text-brand-beige-700 max-w-sm">
        {error.message || 'We encountered an unexpected error.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2 rounded-full bg-brand-purple-700 hover:bg-brand-purple-800 text-white text-xs font-bold transition"
      >
        Try again
      </button>
    </div>
  );
}
