'use client';

import React, { useState } from 'react';
import { useWallet } from '@/context/WalletContext';

export default function WalletUI() {
  const { account, isConnected, connectWallet, disconnectWallet, provider } = useWallet();
  const [txTo, setTxTo] = useState('');
  const [txValue, setTxValue] = useState('');

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      disconnectWallet();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  const handleSendTransaction = async () => {
    try {
      if (!provider || !account) return;
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: txTo,
        value: txValue,
      });
      console.log('Transaction sent:', tx.hash);
    } catch (error) {
      console.error('Failed to send transaction:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-black">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Wallet Status</h2>
        <p>Connected: {isConnected ? 'Yes' : 'No'}</p>
        {account && <p>Address: {account}</p>}
        {/* TODO: Add balance display if available in context */}
      </div>

      <div className="space-y-4">
        {!isConnected ? (
          <button
            onClick={handleConnect}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <button
              onClick={handleDisconnect}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Disconnect Wallet
            </button>

            <div className="space-y-2">
              <input
                type="text"
                value={txTo}
                onChange={(e) => setTxTo(e.target.value)}
                placeholder="Recipient Address"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={txValue}
                onChange={(e) => setTxValue(e.target.value)}
                placeholder="Amount in ETH"
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleSendTransaction}
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Send Transaction
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 