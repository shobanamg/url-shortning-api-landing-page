import React from 'react';

import { cn } from '@/lib/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  ariaLabel?: string;
  onClick?: () => void;
  ariaExpanded?: boolean; // Add ariaExpanded prop
};

const Button = ({
  children,
  className,
  bgColor,
  ariaLabel,
  onClick,
  ariaExpanded,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded} // Add aria-expanded attribute
      className={cn(
        'text-xl font-bold text-white transition',
        className,
        bgColor || 'bg-cyan hover:bg-teal-400'
      )}
    >
      {children}
    </button>
  );
};
export default Button;
