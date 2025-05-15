'use client';

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils/cn';
import { useState, useCallback } from 'react';

export interface BasicImageProps extends Omit<ImageProps, 'src'> {
  src?: string;
}

export function BasicImage({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: BasicImageProps) {
  const hasFixedSize = width && height;
  const fallbackSrc = `https://picsum.photos/seed/fallback/${width || 300}/${
    height || 300
  }`;

  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  const handleError = useCallback(() => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  }, [currentSrc, fallbackSrc]);

  if (!hasFixedSize) {
    return (
      <div className="relative">
        <Image
          src={currentSrc}
          alt={alt}
          className={cn(className)}
          fill
          onError={handleError}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className={cn(className)}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  );
}
