'use client';
import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  color?: 'green' | 'blue' | 'gray';
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ children, color = 'gray', className }) => {
  const colors = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-gray-100 text-gray-800',
  };
  return <span className={clsx('px-2 py-1 rounded-full text-xs font-semibold', colors[color], className)}>{children}</span>;
};
