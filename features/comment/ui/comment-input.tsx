import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { useCommentsControllerPostComment } from '@/shared/generate/apis';
import { AuthorInfo, Input } from '@/shared/ui';

import { queryKey } from '../action';

interface CommentInputProps {
  postId: string;
}

export function CommentInput({ postId }: CommentInputProps) {
  const [comments, setComments] = useState('');

  const { mutate } = useCommentsControllerPostComment();
  const queryClient = useQueryClient();

  const handleInput = e => setComments(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    mutate(
      {
        postId: +postId,
        data: { comments },
      },
      {
        onSuccess: () => {
          setComments('');
          queryClient.invalidateQueries({ queryKey: queryKey({ take: 20 }) });
        },
      },
    );
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <AuthorInfo />
      {/* //TODO: 로그인사용자의 프로필 노출 */}
      <Input value={comments} onChange={handleInput} placeholder="회원님의 생각을 남겨보세요." />
      <Button type="submit" className="cursor-pointer">
        <PaperPlaneIcon />
      </Button>
    </form>
  );
}
