'use client';

import { useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { createWalletClient, custom } from 'viem';
import { sepolia } from 'viem/chains';
import { isAddress } from 'viem/utils';
import { motion } from 'framer-motion';

export default function WalletSection() {
  const [signature, setSignature] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();

  const connect = async () => {
    try {
      setError('');
      // Request wallet connection without hardcoding any addresses
      const { connector } = await connectAsync({
        connector: new InjectedConnector(),
      });

      // Get the provider and request accounts
      const provider = await connector.getProvider();
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];

      // Validate the address before using it
      if (!isAddress(userAddress)) {
        throw new Error('Invalid address received from wallet');
      }

      // Create wallet client with the validated address
      const walletClient = createWalletClient({
        account: userAddress,
        chain: sepolia,
        transport: custom(provider),
      });

      // Sign message
      const signature = await walletClient.signMessage({ message: 'hello' });
      setSignature(signature);
      console.log('signature', signature);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-[#2A2A2A] rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
          {error}
        </div>
      )}

      {signature && (
        <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
          <p className="font-mono break-all">{signature}</p>
        </div>
      )}

      {isConnected ? (
        <div className="space-y-4">
          <p className="text-gray-300">
            Connected Address: <span className="font-mono">{address}</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={connect}
            className="px-6 py-2 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
          >
            Sign Message
          </motion.button>
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(111, 58, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={connect}
          className="px-6 py-2 bg-[#6F3AFF] rounded-lg font-semibold transition-all duration-300"
        >
          Connect Wallet
        </motion.button>
      )}
    </motion.div>
  );
} 