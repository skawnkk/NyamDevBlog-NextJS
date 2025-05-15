import { AuthorInfo } from '@/components/author-info';
import { CommentAuthorDto } from 'generate/schemas';
import { PropsWithChildren } from 'react';

interface CommentProps {
  author: CommentAuthorDto;
}

export const Comment = ({
  children,
  author,
}: PropsWithChildren<CommentProps>) => {
  return (
    <div className="flex">
      <AuthorInfo image={author.image?.path} />
      <div>
        <p>{author.nickname}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};
