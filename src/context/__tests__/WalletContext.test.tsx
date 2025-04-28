import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WalletProvider, useWallet } from '../WalletContext';

interface MockWindow extends Window {
  ethereum?: {
    isFreoWallet?: boolean;
    request: jest.Mock;
    send: jest.Mock;
    on: jest.Mock;
    removeListener: jest.Mock;
  };
}

declare const window: MockWindow;

const mockEthereum = {
  isFreoWallet: true,
  request: jest.fn(),
  send: jest.fn(),
  on: jest.fn(),
  removeListener: jest.fn(),
};

const TestComponent: React.FC = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();
  return (
    <div>
      <div data-testid="account">{account || 'Not connected'}</div>
      <button onClick={connectWallet}>Connect</button>
      <button onClick={disconnectWallet}>Disconnect</button>
    </div>
  );
};

describe('WalletContext', () => {
  beforeEach(() => {
    window.ethereum = mockEthereum;
    jest.clearAllMocks();
  });

  it('should initialize with no account', () => {
    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );
    expect(screen.getByTestId('account')).toHaveTextContent('Not connected');
  });

  it('should connect wallet when requested', async () => {
    const mockAddress = '0x1234567890123456789012345678901234567890';
    mockEthereum.request.mockResolvedValueOnce([mockAddress]);

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    expect(screen.getByTestId('account')).toHaveTextContent(mockAddress);
  });

  it('should handle connection errors', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    mockEthereum.request.mockRejectedValueOnce(new Error('Connection failed'));

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    expect(screen.getByTestId('account')).toHaveTextContent('Not connected');
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('should disconnect wallet when requested', async () => {
    const mockAddress = '0x1234567890123456789012345678901234567890';
    mockEthereum.request.mockResolvedValueOnce([mockAddress]);

    render(
      <WalletProvider>
        <TestComponent />
      </WalletProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    expect(screen.getByTestId('account')).toHaveTextContent(mockAddress);

    fireEvent.click(screen.getByText('Disconnect'));
    expect(screen.getByTestId('account')).toHaveTextContent('Not connected');
  });
}); 