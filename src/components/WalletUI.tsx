'use client';

import React from 'react';
import { useWallet } from '../app/context/WalletContext';

const WalletUI: React.FC = () => {
  const { account, isConnected, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="p-6 bg-[#2A2A2A] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Wallet Status</h2>
      <div className="mb-4">
        <p className="text-gray-300">
          Status: <span className="font-semibold">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </p>
        {account && (
          <p className="text-gray-300">
            Account: <span className="font-mono">{account}</span>
          </p>
        )}
      </div>
      <div className="flex gap-4">
        {!isConnected ? (
          <button
            onClick={connectWallet}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletUI; 