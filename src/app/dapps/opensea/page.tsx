import React from 'react';

export default function OpenSeaWidgetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] text-white">
      <h1 className="text-3xl font-bold mb-6">OpenSea NFT Explorer</h1>
      <iframe
        src="https://opensea.io/assets?embed=true"
        title="OpenSea NFT Explorer"
        width="100%"
        height="600"
        style={{ border: 'none', borderRadius: '12px', maxWidth: 1200 }}
        allowFullScreen
      />
    </div>
  );
} 