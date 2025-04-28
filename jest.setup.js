require('@testing-library/jest-dom');

// Mock window.ethereum
Object.defineProperty(window, 'ethereum', {
  writable: true,
  value: undefined,
});

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}; 