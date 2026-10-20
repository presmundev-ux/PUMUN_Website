import React from 'react';
import pumunLogoPng from '../assets/PUMUN LOGO.png';

interface PumunLogoProps {
  className?: string;
  variant?: 'full' | 'seal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PumunLogo: React.FC<PumunLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  return (
    <img
      src={pumunLogoPng}
      alt="President University Model United Nations (PUMUN) Official Logo"
      className={`shrink-0 object-contain aspect-square ${sizeClasses[size]} ${className}`}
      loading="eager"
    />
  );
};
