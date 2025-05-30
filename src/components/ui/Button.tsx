// src/components/ui/Button.tsx
import React from 'react';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const baseClasses = "rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-secondary text-text hover:bg-secondary/90",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        fullWidth && 'w-full',
        props.className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;