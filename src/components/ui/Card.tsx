import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => (
  <div className={cn("bg-white rounded-lg shadow-sm p-6", className)}>
    {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
    {children}
  </div>
);

export default Card;