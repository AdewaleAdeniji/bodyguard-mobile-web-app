import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-[32px] font-medium transition-colors duration-200 disabled:bg-[#6C757D]';
  const variantStyles = {
    primary: 'bg-[#2A9D8F] text-white hover:bg-emerald-600',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};