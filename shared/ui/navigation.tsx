'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNavigation() {
  const pathname = usePathname();
  const hideNav = ['/sign-in', '/sign-up', '/create'].includes(pathname);

  if (hideNav) {
    return null;
  }

  return (
    <nav className="flex justify-center bg-white py-2 fixed bottom-0 w-full align-center border-t">
      <ul>
        <Link href={'/create'}>
          <PlusCircledIcon className="size-12" />
        </Link>
      </ul>
    </nav>
  );
}
