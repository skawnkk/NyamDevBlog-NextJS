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
  maximumScale: 1,
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
            <div className="relative h-[calc(100vh - 65px)] w-full">
              <div className="p-4 pb-[65px] w-full">{children}</div>
            </div>
            {modal}
            <BottomNavigation />
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}
