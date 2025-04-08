'use client';

import React from 'react';
import Logo from '../components/Logo';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="container mx-auto">
        <Logo className="mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to FreoBus
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Your Gateway to Web3 Innovation
        </p>
      </div>
    </main>
  );
} 