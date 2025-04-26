'use client';

import React from 'react';
import { useWallet } from '@/context/WalletContext';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import WalletUI from '@/components/WalletUI';

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
        <WalletUI />
      </div>
    </div>
  );
} 