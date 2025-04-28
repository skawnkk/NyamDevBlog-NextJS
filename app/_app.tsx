import { AppProps } from 'next/app';
import { QueryProvider } from './providers/query-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
}
