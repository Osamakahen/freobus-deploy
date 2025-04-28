export const isFreoWalletInstalled = async (): Promise<boolean> => {
  try {
    if (window.ethereum && window.ethereum.isFreoWallet) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error detecting FreoWallet:', error);
    return false;
  }
};

export const getFreoWalletProvider = async () => {
  if (await isFreoWalletInstalled()) {
    return window.ethereum;
  }
  return null;
}; 