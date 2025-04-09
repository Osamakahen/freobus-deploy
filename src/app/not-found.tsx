import React from 'react';
import Link from 'next/link';

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] text-white">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all hover:bg-[#7d4fff]"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
