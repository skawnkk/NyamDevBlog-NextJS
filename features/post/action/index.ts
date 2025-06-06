import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { postsControllerGetPosts } from '@/shared/generate/apis';
import { PostsControllerGetPostsParams, PostsPaginateResponseDto } from '@/shared/generate/schemas';

export const useInfinitePosts = (initialParams: Omit<PostsControllerGetPostsParams, 'page'>) => {
  return useInfiniteQuery<PostsPaginateResponseDto>({
    queryKey: ['postsControllerGetPosts', initialParams],
    queryFn: ({ pageParam }: QueryFunctionContext<any, number | undefined>) => {
      return postsControllerGetPosts({
        ...initialParams,
        where__id__less_than: pageParam,
      });
    },
    initialPageParam: undefined,
    getNextPageParam: lastPage => {
      return lastPage.cursor?.after ?? undefined;
    },
  });
};
