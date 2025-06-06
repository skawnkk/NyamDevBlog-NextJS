import { PropsWithChildren } from 'react';

import { CommentAuthorDto } from '@/shared/generate/schemas';
import { AuthorInfo } from '@/shared/ui';

interface CommentProps {
  author: CommentAuthorDto;
}

export const Comment = ({ children, author }: PropsWithChildren<CommentProps>) => {
  return (
    <div className="flex">
      <AuthorInfo image={String(author.image?.path)} />
      <div>
        <p>{author.nickname}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};
