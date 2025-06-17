'use client';

import { PropsWithChildren, useRef } from 'react';

interface LongPressProps {
  onLongPress: () => void;
  ms?: number;
}

export function LongPressable({
  onLongPress,
  children,
  ms = 500,
}: PropsWithChildren<LongPressProps>) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    timerRef.current = setTimeout(onLongPress, ms);
  };

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div
      onMouseDown={start}
      onMouseUp={clear}
      onMouseLeave={clear}
      onTouchStart={start}
      onTouchEnd={clear}
      onTouchCancel={clear}
      style={{ userSelect: 'none' }}
    >
      {children}
    </div>
  );
}
