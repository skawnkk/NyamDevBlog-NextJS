import { useCommentsControllerPaginateComments } from 'generate/apis/comments/comments';

import { AuthorInfo } from '@/components/author-info';

import { useInfiniteComments } from './action';
import { Comment } from './comment';

interface CommentListProps {
  postId: string;
}

export function CommentList({ postId }: CommentListProps) {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteComments(+postId, {
    take: 20,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>오류가 발생했습니다.</div>;

  const comments = data?.pages.flatMap(page => page.data) ?? [];

  if (!comments.length) {
    return <div>아직 댓글이 없습니다.</div>;
  }

  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} author={comment.author}>
          {comment.comments}
        </Comment>
      ))}
    </>
  );
}
