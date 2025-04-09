'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <h1 className="text-5xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-6 text-lg text-gray-400">We apologize for the inconvenience. Please try again.</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all hover:bg-[#7d4fff]"
        >
          Try again
        </button>
        <Link href="/" className="px-6 py-3 bg-[#6F3AFF] rounded-lg font-semibold transition-all hover:bg-[#7d4fff]">
          Return Home
        </Link>
      </div>
    </div>
  );
} 