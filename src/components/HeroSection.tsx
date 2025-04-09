import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6F3AFF] to-[#00F0FF]">
            Next Generation
          </span>
          <br />
          Decentralized Exchange
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience seamless trading and liquidity provision with our advanced DEX platform.
          Secure, fast, and user-friendly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/explore">
            <button className="px-8 py-3 bg-purple-600 rounded-lg font-semibold transition-colors hover:bg-purple-700">
              Start Trading
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-3 bg-transparent border border-purple-600 text-purple-400 rounded-lg font-semibold transition-colors hover:bg-purple-600/10">
              Learn More
            </button>
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8">
          <img src="/certik-badge.svg" alt="Certik Audit" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/demo-poster.jpg" alt="Platform Demo" className="h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
} 