'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { useOutsideClick } from 'shared/utils/outside-click';

interface BasicDialogProps {}

function BasicDialog({ children }: PropsWithChildren<BasicDialogProps>) {
  const router = useRouter();

  const closeDialog = () => {
    router.back();
  };

  const ref = useOutsideClick<HTMLDivElement>(closeDialog, true);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div ref={ref} className="relative bg-white p-4 rounded w-[400px]">
        <button
          className="absolute right-3 top-3 inline-flex size-[24px] appearance-none items-center justify-center rounded-full text-white bg-black/50 focus:outline-none"
          aria-label="Close"
          onClick={closeDialog}
        >
          <Cross2Icon />
        </button>
        {children}
      </div>
    </div>
  );
}

export { BasicDialog };
