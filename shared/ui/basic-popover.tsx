import { PropsWithChildren } from 'react';

import { Popover, PopoverContent } from './popover';

interface BasicPopoverProps {
  open: boolean;
  togglePopover: () => void;
}

export function BasicPopover({
  open,
  children,
  togglePopover,
}: PropsWithChildren<BasicPopoverProps>) {
  return (
    <Popover open={open} onOpenChange={togglePopover}>
      <PopoverContent side="bottom" align="center">
        {children}
      </PopoverContent>
    </Popover>
  );
}
