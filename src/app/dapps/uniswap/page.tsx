'use client';
import React, { useState } from 'react';
import { useWallet } from '@/context/WalletContext';

const UniswapPage: React.FC = () => {
  const { account, provider } = useWallet();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSwap = async () => {
    if (!provider || !account || !amount) return;

    setLoading(true);
    setError(null);

    try {
      // This is a placeholder for actual Uniswap integration
      // You would typically:
      // 1. Get a quote from Uniswap
      // 2. Create and sign the transaction
      // 3. Wait for confirmation
      console.log('Swap initiated:', {
        amount,
        account,
      });
    } catch (error) {
      console.error('Error during swap:', error);
      setError('Failed to execute swap. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!account) {
    return (
      <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Uniswap</h1>
          <p>Please connect your wallet to use Uniswap.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Uniswap</h1>
        
        <div className="bg-[#2D2D2D] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Swap Tokens</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="w-full p-2 rounded bg-[#1E1E1E] text-white"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            
            <button
              onClick={handleSwap}
              disabled={loading || !amount}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? 'Swapping...' : 'Swap'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniswapPage; 