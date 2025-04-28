'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  account: string | null;
  provider: ethers.BrowserProvider | null;
  isConnected: boolean;
  isFreoWallet: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
  account: null,
  provider: null,
  isConnected: false,
  isFreoWallet: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isFreoWallet, setIsFreoWallet] = useState(false);

  useEffect(() => {
    const checkWallet = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        setIsFreoWallet(!!window.ethereum.isFreoWallet);
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);

        try {
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0].address);
            setIsConnected(true);
          }
        } catch (error) {
          console.error('Error checking wallet:', error);
        }
      }
    };

    checkWallet();
  }, []);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setProvider(provider);
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.log('Please install a Web3 wallet');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setProvider(null);
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        isConnected,
        isFreoWallet,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}; 