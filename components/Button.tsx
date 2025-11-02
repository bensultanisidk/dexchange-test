'use client';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  icon?: ReactNode; // <-- ajout de l'icône
}

export const Button: FC<ButtonProps> = ({ children, className, variant = 'default', icon, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    default: 'bg-[#1DB954] text-white hover:bg-[#1AA349]',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
