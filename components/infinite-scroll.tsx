import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  loadMore: () => void;
  hasNextPage: boolean;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore, hasNextPage }) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore(); // 페이지 더 불러오기
        }
      },
      { threshold: 1.0 },
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasNextPage, loadMore]);

  return <div ref={observerRef} style={{ height: '1px' }} />;
};
