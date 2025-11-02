'use client';

import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

// Composant Card principal
export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={clsx('bg-white rounded-xl shadow-md p-4', className)}>{children}</div>;
};

// En-tête du Card
export const CardHeader: FC<CardProps> = ({ children, className }) => {
  return <div className={clsx('mb-4', className)}>{children}</div>;
};

// Titre du Card (noir foncé par défaut)
export const CardTitle: FC<CardProps> = ({ children, className }) => {
  return <h2 className={clsx('text-xl font-semibold text-gray-900', className)}>{children}</h2>;
};

// Contenu principal du Card
export const CardContent: FC<CardProps> = ({ children, className }) => {
  return <div className={clsx(className)}>{children}</div>;
};
