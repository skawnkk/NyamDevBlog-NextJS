'use client';

import { useState } from 'react';

interface UseToggleDialogProps {
  defaultOpen?: boolean;
}
export const useToggleDialog = ({ defaultOpen = false }: UseToggleDialogProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const toggleOpen = () => setOpen(prev => !prev);

  return { open, setOpen, toggleOpen };
};
