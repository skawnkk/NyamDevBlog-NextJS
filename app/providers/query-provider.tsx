'use client';

import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

interface QueryProviderProps {
  children: ReactNode;
  dehydratedState?: unknown; // 서버에서 내려오는 데이터
}

export function QueryProvider({
  children,
  dehydratedState,
}: QueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
