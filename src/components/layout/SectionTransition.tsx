import React from 'react';

import { ThemeMode } from '../../types';

interface SectionTransitionProps {
  fromTheme: ThemeMode;
  toTheme: ThemeMode;
  index: number;
}

const SVGCurve1 = ({ fillClass }: { fillClass: string }) => (
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`w-full h-8 sm:h-12 md:h-20 ${fillClass}`}>
    <path d="M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z" />
  </svg>
);

const SVGCurve2 = ({ fillClass }: { fillClass: string }) => (
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`w-full h-8 sm:h-12 md:h-16 ${fillClass}`}>
    <path d="M0,60 C400,120 800,0 1440,60 L1440,120 L0,120 Z" />
  </svg>
);

const GradientTransition = ({ isFromLight, withSeparator }: { isFromLight: boolean, withSeparator?: boolean }) => (
  <div 
    className="w-full h-24 sm:h-32 md:h-40 relative z-20 flex justify-center items-center"
    style={{
      background: isFromLight 
        ? 'linear-gradient(to bottom, var(--color-background), var(--color-primary))'
        : 'linear-gradient(to bottom, var(--color-primary), var(--color-background))'
    }}
  >
    {withSeparator && (
      <div className="pointer-events-none opacity-40 md:opacity-60 text-primary dark:text-accent-soft mix-blend-multiply dark:mix-blend-screen drop-shadow-sm">
        <svg width="180" height="12" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current w-32 md:w-48">
          <path d="M 3 8 C 45 10, 85 -2, 130 6 C 150 9.5, 170 4, 177 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    )}
  </div>
);

export function SectionTransition({ fromTheme, toTheme, index }: SectionTransitionProps) {
  if (fromTheme === toTheme) return null;
  
  const isFromLight = fromTheme === 'light';
  const topBgClass = isFromLight ? 'bg-background' : 'bg-primary';
  const bottomFillClass = isFromLight ? 'text-primary fill-current' : 'text-background fill-current';
  
  // Decide which transition to use based on index to create intelligent variation
  const typeIndex = index % 3;
  
  // If typeIndex is 2, use the gradient transition
  if (typeIndex === 2) {
    return (
      <div className="-mt-[1px] -mb-[1px] relative z-20 w-full">
        <GradientTransition isFromLight={isFromLight} withSeparator={true} />
      </div>
    );
  }

  // Otherwise use SVG curves
  return (
    <div className={`w-full relative z-20 ${topBgClass} -mt-[1px] -mb-[1px]`}>
      <div className="w-full relative leading-none">
        {typeIndex === 0 && <SVGCurve1 fillClass={bottomFillClass} />}
        {typeIndex === 1 && <SVGCurve2 fillClass={bottomFillClass} />}
      </div>
    </div>
  );
}
