import './globals.css';

import { Theme } from '@radix-ui/themes';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';

import { BottomNavigation } from '@/shared/ui';

import { QueryProvider } from './providers/query-provider';

export const metadata: Metadata = {
  title: 'Sabujak',
  description: 'sabujak sabujak anything...:)',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

const manrope = Manrope({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <Theme>
          <QueryProvider>
            <div className="relative min-h-[100dvh] w-full">
              <div className="p-2 sm:p-4 pb-[65px] w-full">{children}</div>
            </div>
            {modal}
            <BottomNavigation />
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
