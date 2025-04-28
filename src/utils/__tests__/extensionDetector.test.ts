import { isFreoWalletInstalled, getFreoWalletProvider } from '../extensionDetector';

interface MockEthereum {
  isFreoWallet?: boolean;
  request: jest.Mock;
  send: jest.Mock;
  on: jest.Mock;
  removeListener: jest.Mock;
}

const mockEthereum: MockEthereum = {
  isFreoWallet: true,
  request: jest.fn(),
  send: jest.fn(),
  on: jest.fn(),
  removeListener: jest.fn(),
};

describe('extensionDetector', () => {
  beforeEach(() => {
    window.ethereum = undefined;
    jest.clearAllMocks();
  });

  describe('isFreoWalletInstalled', () => {
    it('should return true when FreoWallet is installed', async () => {
      window.ethereum = mockEthereum;
      const result = await isFreoWalletInstalled();
      expect(result).toBe(true);
    });

    it('should return false when no wallet is installed', async () => {
      const result = await isFreoWalletInstalled();
      expect(result).toBe(false);
    });

    it('should return false when a different wallet is installed', async () => {
      window.ethereum = {
        ...mockEthereum,
        isFreoWallet: false,
      };
      const result = await isFreoWalletInstalled();
      expect(result).toBe(false);
    });
  });

  describe('getFreoWalletProvider', () => {
    it('should return the provider when FreoWallet is installed', async () => {
      window.ethereum = mockEthereum;
      const provider = await getFreoWalletProvider();
      expect(provider).toBe(mockEthereum);
    });

    it('should return null when FreoWallet is not installed', async () => {
      const provider = await getFreoWalletProvider();
      expect(provider).toBeNull();
    });
  });
}); 