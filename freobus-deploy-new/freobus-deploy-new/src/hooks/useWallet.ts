import { useState, useEffect } from 'react';
import { User } from '../types';

export const useWallet = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setUser({
            id: accounts[0],
            address: accounts[0],
            connected: true
          });
        }
      }
    } catch (err) {
      setError('Failed to check wallet connection');
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUser({
          id: accounts[0],
          address: accounts[0],
          connected: true
        });
      } else {
        setError('Please install MetaMask or another Web3 wallet');
      }
    } catch (err) {
      setError('Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    connectWallet,
    disconnectWallet
  };
}; 