import React from 'react';

interface BatakOrnamentProps {
  variant?: 'gold' | 'forest';
  className?: string;
}

/**
 * Subtle geometric hairline ornament inspired by traditional Batak Gorga & Ulos motifs.
 */
export const BatakOrnament: React.FC<BatakOrnamentProps> = ({
  variant = 'gold',
  className = '',
}) => {
  const strokeColor = variant === 'gold' ? '#D4AF62' : '#073B26';

  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-px flex-1 max-w-24 opacity-40"
        style={{ backgroundColor: strokeColor }}
      />
      <svg
        width="56"
        height="14"
        viewBox="0 0 56 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 opacity-85"
      >
        <path
          d="M1 7L7 2L13 7L7 12L1 7Z"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M21 7L28 1.5L35 7L28 12.5L21 7Z"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <circle cx="28" cy="7" r="2" fill={strokeColor} />
        <path
          d="M43 7L49 2L55 7L49 12L43 7Z"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
      </svg>
      <span
        className="h-px flex-1 max-w-24 opacity-40"
        style={{ backgroundColor: strokeColor }}
      />
    </div>
  );
};
