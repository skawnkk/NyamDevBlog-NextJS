'use client';

import { cn } from '@/lib/utils/cn';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/styles/components/ui/carousel';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

interface BasicCarouselProps {
  children: ReactNode | ReactNode[];
  basis?: number;
  scrollToIndex?: number;
}
export function BasicCarousel({
  scrollToIndex,
  children,
  basis,
}: PropsWithChildren<BasicCarouselProps>) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(scrollToIndex || 0);
  }, [api, children, scrollToIndex]);

  if (!Array.isArray(children)) {
    return children;
  }

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            className={cn('flex items-center', basis ? `basis-1/${basis}` : '')}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      {children.length > 1 && (
        <>
          <CarouselPrevious className="left-12 cursor-pointer" />
          <CarouselNext className="right-12 cursor-pointer" />
        </>
      )}
    </Carousel>
  );
}
