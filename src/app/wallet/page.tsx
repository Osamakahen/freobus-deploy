'use client';

import React from 'react';
import { useWallet } from '@/context/WalletContext';

const WalletPage: React.FC = () => {
  const { account, connectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Wallet</h1>
        
        <div className="bg-[#2D2D2D] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          {account ? (
            <div>
              <p className="mb-4">Account Address: {account}</p>
              {/* Add more wallet functionality here */}
            </div>
          ) : (
            <div>
              <p className="mb-4">Connect your wallet to view your account details</p>
              <button
                onClick={connectWallet}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletPage; 