'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 40, height = 40, className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/logo.svg"
        alt="FreoBus Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
} 