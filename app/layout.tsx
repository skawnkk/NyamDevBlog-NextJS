import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { QueryProvider } from './providers/query-provider';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Sabujak',
  description: 'sabujak sabujak anything...:)',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <Theme>
          <QueryProvider>{children}</QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
