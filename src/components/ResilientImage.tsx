import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'h-full w-full object-cover',
  containerClassName = '',
  fallbackTitle,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#073B26] to-[#05291C] p-6 text-center text-[#F6F0E3] ${containerClassName}`}
      >
        <Leaf className="mb-2 h-8 w-8 text-[#D4AF62]" aria-hidden="true" />
        <span className="font-serif text-base font-semibold tracking-wide text-[#F6F0E3]">
          {fallbackTitle ?? alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
};

interface CroppedPackagingImageProps {
  src: string;
  alt: string;
  /** Crop region in normalized 0..1 coordinates of the 1:1 source image */
  crop: {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
  };
  className?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Renders an exact, distortion-free rectangular focal view from the supplied 1:1 SIMALEN image
 * without altering, regenerating, or redesigning the original packaging artwork.
 */
export const CroppedPackagingImage: React.FC<CroppedPackagingImageProps> = ({
  src,
  alt,
  crop,
  className = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);
  const w = crop.x1 - crop.x0;
  const h = crop.y1 - crop.y0;

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ aspectRatio: `${w} / ${h}` }}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#073B26] to-[#05291C] p-4 text-center text-[#F6F0E3] ${className}`}
      >
        <Leaf className="mb-2 h-6 w-6 text-[#D4AF62]" aria-hidden="true" />
        <span className="font-serif text-sm font-medium">SIMALEN</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        style={{
          position: 'absolute',
          maxWidth: 'none',
          width: `${(1 / w) * 100}%`,
          height: `${(1 / h) * 100}%`,
          left: `${-(crop.x0 / w) * 100}%`,
          top: `${-(crop.y0 / h) * 100}%`,
        }}
      />
    </div>
  );
};
