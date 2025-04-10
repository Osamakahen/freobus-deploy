import React from 'react';

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We couldn&apos;t find what you&apos;re looking for. 
          Let&apos;s get you back on track.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-[#6F3AFF] text-white rounded-lg hover:bg-[#7d4fff] transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
