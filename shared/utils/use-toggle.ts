'use client';

import { useState } from 'react';

interface UseToggleProps {
  defaultOpen?: boolean;
}

export const useToggle = ({ defaultOpen = false }: UseToggleProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const toggleOpen = () => setOpen(prev => !prev);

  return { open, setOpen, toggleOpen };
};
