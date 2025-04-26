import React, { useEffect, useRef } from 'react';

export default function UniswapWidgetPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    // Clean up any previous widget
    widgetRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://widget.uniswap.org/v3.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.UniswapWidget) {
        // @ts-ignore
        window.UniswapWidget.mount({
          appName: 'FreoBus',
          target: widgetRef.current,
          width: 400,
          theme: 'dark',
        });
      }
    };
    widgetRef.current.appendChild(script);
    return () => {
      widgetRef.current && (widgetRef.current.innerHTML = '');
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] text-white">
      <h1 className="text-3xl font-bold mb-6">Uniswap Swap</h1>
      <div ref={widgetRef} />
    </div>
  );
} 