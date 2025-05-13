'use client';

import { cn } from '@/lib/utils/cn';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export interface BasicImageProps extends Omit<ImageProps, 'src'> {
  src?: string;
}

function BasicImage({
  src,
  className,
  alt,
  width,
  height,
  ...props
}: BasicImageProps) {
  const defaultImageUrl = `https://picsum.photos/seed/nature1/${width}/${height}`;
  console.log('src', src);
  const [defaultImage, setDefaultImage] = useState(src ?? defaultImageUrl);

  const hasSizeProperties = width && height;

  const handleError = (e) => {
    setDefaultImage(defaultImageUrl);
    console.error(e);
  };

  if (!hasSizeProperties) {
    return (
      <div className="relative">
        <Image
          src={defaultImage}
          className={className}
          alt={alt}
          fill
          onError={handleError}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={defaultImage}
      className={cn(className)}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  );
}

export { BasicImage };
