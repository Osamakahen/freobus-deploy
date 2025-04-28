'use client';
import React, { useEffect, useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import Image from 'next/image';

interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
  collection: {
    name: string;
  };
}

const OpenSeaPage: React.FC = () => {
  const { account } = useWallet();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!account) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/opensea?address=${account}`);
        if (!response.ok) {
          throw new Error('Failed to fetch NFTs');
        }
        const data = await response.json();
        setNfts(data.assets);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
        setError('Failed to load NFTs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [account]);

  if (!account) {
    return (
      <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">OpenSea NFTs</h1>
          <p>Please connect your wallet to view your NFTs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">OpenSea NFTs</h1>
        
        {loading && <p>Loading your NFTs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-[#2D2D2D] rounded-lg overflow-hidden">
                <Image
                  src={nft.image_url}
                  alt={nft.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{nft.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{nft.collection.name}</p>
                  <p className="text-sm line-clamp-2">{nft.description}</p>
                </div>
              </div>
            ))}
            {nfts.length === 0 && <p>No NFTs found in your wallet.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenSeaPage; 