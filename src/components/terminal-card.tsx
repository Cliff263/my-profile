"use client";

import * as React from 'react';

interface TerminalCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showControls?: boolean;
  showGradientLine?: boolean;
  smallDots?: boolean;
}

function TerminalCard({ 
  children, 
  title, 
  className = "", 
  showControls = true, 
  showGradientLine = true,
  smallDots = false
}: TerminalCardProps) {
  return (
    <div className={`glass-panel border border-black/10 dark:border-white/10 relative rounded-lg bg-background/60 backdrop-blur w-full glow-card gradient-glow ${className}`}>
      {showGradientLine && (
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
        </div>
      )}
      <div className="px-4 lg:px-8 py-3 lg:py-4 relative">
        {showControls && (
          <div className="flex flex-row space-x-1 lg:space-x-2">
            <div className={`${smallDots ? 'h-1.5 w-1.5 lg:h-2 lg:w-2' : 'h-2 w-2 lg:h-3 lg:w-3'} rounded-full bg-red-500`}></div>
            <div className={`${smallDots ? 'h-1.5 w-1.5 lg:h-2 lg:w-2' : 'h-2 w-2 lg:h-3 lg:w-3'} rounded-full bg-amber-500`}></div>
            <div className={`${smallDots ? 'h-1.5 w-1.5 lg:h-2 lg:w-2' : 'h-2 w-2 lg:h-3 lg:w-3'} rounded-full bg-emerald-500`}></div>
          </div>
        )}
      </div>
      <div className="overflow-hidden border-t border-black/10 dark:border-white/10 px-4 lg:px-8 py-4 lg:py-6">
        {children}
      </div>
    </div>
  );
}

export default TerminalCard;
