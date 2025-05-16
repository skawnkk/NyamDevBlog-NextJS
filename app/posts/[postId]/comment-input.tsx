import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { useCommentsControllerPostComment } from 'generate/apis/comments/comments';
import { useState } from 'react';

import { AuthorInfo } from '@/components/author-info';
import { Input } from '@/components/input';

interface CommentInputProps {
  postId: string;
  onSubmit: () => void;
}

export function CommentInput({ postId, onSubmit }: CommentInputProps) {
  const [comments, setComments] = useState('');
  const { mutate } = useCommentsControllerPostComment();

  const handleInput = e => setComments(e.target.value);

  const handleSubmit = () => {
    mutate(
      {
        postId: +postId,
        data: { comments },
      },
      {
        onSuccess: () => {
          setComments('');
          onSubmit();
        },
      },
    );
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <AuthorInfo />
      {/* //TODO: 로그인사용자의 프로필 노출 */}
      <Input value={comments} onChange={handleInput} placeholder="회원님의 생각을 남겨보세요." />
      <Button type="submit" className="cursor-pointer" onClick={handleSubmit}>
        <PaperPlaneIcon />
      </Button>
    </form>
  );
}
