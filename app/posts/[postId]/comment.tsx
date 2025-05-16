import { CommentAuthorDto } from 'generate/schemas';
import { PropsWithChildren } from 'react';

import { AuthorInfo } from '@/components/author-info';

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
