'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WalletProvider } from '@/context/WalletContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>FreoBus - Next Generation DEX</title>
        <meta name="description" content="Experience seamless trading and liquidity provision with our advanced DEX platform." />
      </head>
      <body className={`${inter.className} bg-[#1E1E1E] text-white min-h-screen flex flex-col`}>
        <WalletProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
} 