'use client';

import { PropsWithChildren } from 'react';

import { CommentAuthorDto } from '@/shared/generate/schemas';
import { AuthorInfo, BasicPopover, LongPressable } from '@/shared/ui';
import { useToggle } from '@/shared/utils';

interface CommentProps {
  author: CommentAuthorDto;
}

export const Comment = ({ children, author }: PropsWithChildren<CommentProps>) => {
  const { open, setOpen, toggleOpen } = useToggle({ defaultOpen: false });

  return (
    <>
      <div className="flex">
        <AuthorInfo image={String(author.image?.path)} />
        <div className="flex gap-2">
          <p className="font-bold">{author.nickname}</p>
          <LongPressable onLongPress={() => setOpen(true)}>
            <p>{children}</p>
          </LongPressable>
        </div>
      </div>
      <BasicPopover open={open} togglePopover={toggleOpen}>
        <div>
          <p>test</p>
        </div>
      </BasicPopover>
    </>
  );
};
