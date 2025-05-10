'use client';

import React from 'react';
import { useWallet } from '../../../src/app/context/WalletContext';

export const ConnectWalletButton: React.FC = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="flex items-center gap-2">
      {account ? (
        <>
          <span className="text-sm text-gray-600">
            {`${account.slice(0, 6)}...${account.slice(-4)}`}
          </span>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          className="px-4 py-2 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-medium hover:bg-[#FFD700] transition-colors"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}; 