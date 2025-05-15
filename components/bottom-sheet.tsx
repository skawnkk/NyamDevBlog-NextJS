import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/styles/components/ui/sheet';
import { PropsWithChildren, ReactNode } from 'react';

interface BottomSheetProps {
  header?: ReactNode;
  bottom?: ReactNode;
  content?: ReactNode;
}

export function BottomSheet({
  header,
  children,
  bottom,
  content,
}: PropsWithChildren<BottomSheetProps>) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>{header}</SheetHeader>
        {content}
        <SheetFooter>{bottom}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
