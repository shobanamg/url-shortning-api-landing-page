import React from 'react';

import { cn } from '@/lib/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  ariaLabel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaExpanded?: boolean; // Add ariaExpanded prop
};

const Button = ({
  children,
  className,
  bgColor,
  ariaLabel,
  onClick,
  type,
  ariaExpanded,
}: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded} // Add aria-expanded attribute
      className={cn(
        'text-xl font-bold text-white transition',
        className,
        bgColor || 'bg-cyan  hover:bg-opacity-30'
      )}
    >
      {children}
    </button>
  );
};
export default Button;
