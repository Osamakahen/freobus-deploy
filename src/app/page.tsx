'use client';

import dynamic from 'next/dynamic';

// Import the Home component with SSR disabled to avoid server-side rendering issues
const Home = dynamic(() => import('../components/Home'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  )
});

export default function Page() {
  return <Home />;
} 