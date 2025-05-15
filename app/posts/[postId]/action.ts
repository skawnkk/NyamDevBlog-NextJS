import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { commentsControllerPaginateComments } from 'generate/apis/comments/comments';
import {
  CommentsControllerPaginateCommentsParams,
  CommentsPaginateResponseDto,
} from 'generate/schemas';

export const useInfiniteComments = (
  postId: number,
  initialParams: Omit<CommentsControllerPaginateCommentsParams, 'page'>
) => {
  return useInfiniteQuery<CommentsPaginateResponseDto>({
    queryKey: ['postsControllerGetPosts', initialParams],
    queryFn: ({ pageParam }: QueryFunctionContext<any, number | undefined>) => {
      return commentsControllerPaginateComments(postId, {
        ...initialParams,
        where__id__less_than: pageParam,
      });
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor?.after ?? undefined;
    },
  });
};
