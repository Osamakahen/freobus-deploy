'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWallet } from '@/context/WalletContext';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const { account, connectWallet } = useWallet();

  return (
    <nav className="bg-[#2D2D2D] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`text-white hover:text-green-400 ${
              pathname === '/' ? 'text-green-400' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/wallet"
            className={`text-white hover:text-green-400 ${
              pathname === '/wallet' ? 'text-green-400' : ''
            }`}
          >
            Wallet
          </Link>
          <Link
            href="/dapps/uniswap"
            className={`text-white hover:text-green-400 ${
              pathname === '/dapps/uniswap' ? 'text-green-400' : ''
            }`}
          >
            Uniswap
          </Link>
          <Link
            href="/dapps/opensea"
            className={`text-white hover:text-green-400 ${
              pathname === '/dapps/opensea' ? 'text-green-400' : ''
            }`}
          >
            OpenSea
          </Link>
        </div>
        <div>
          {account ? (
            <span className="text-white">
              {`${account.slice(0, 6)}...${account.slice(-4)}`}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;