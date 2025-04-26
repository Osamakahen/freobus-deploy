'use client';

import React from 'react';
import { useWallet } from '@/context/WalletContext';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';

export default function WalletPage() {
  const { account, provider, isConnected } = useWallet();

  const handleSendTransaction = async () => {
    if (!provider || !account) return;

    try {
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: account, // Send to self for demo
        value: ethers.parseEther('0.001'), // 0.001 ETH
      });
      
      console.log('Transaction sent:', tx.hash);
      alert('Transaction sent! Check console for hash.');
    } catch (error) {
      console.error('Error sending transaction:', error);
      alert('Failed to send transaction. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2A2A2A] rounded-xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6">Your Wallet</h1>
          
          {isConnected ? (
            <div className="space-y-6">
              <div className="bg-[#3A3A3A] p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Account</h2>
                <p className="font-mono break-all">{account}</p>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleSendTransaction}
                  className="px-6 py-3 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-medium hover:bg-[#FFD700] transition-colors"
                >
                  Send Test Transaction
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-xl mb-4">Connect your wallet to get started</p>
              <p className="text-gray-400">Please use the Connect Wallet button in the navigation bar</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 