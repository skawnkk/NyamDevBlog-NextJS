/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Sabujak
 * 사부작 API Description
 * OpenAPI spec version: 1.0
 */
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../../../orval.axios';
import type {
  CommentsControllerPaginateCommentsParams,
  CommentsPaginateResponseDto,
  CreateCommentDto,
} from '../schemas';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary 댓글 목록 조회
 */
export const commentsControllerPaginateComments = (
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
  signal?: AbortSignal,
) => {
  return axiosInstance<CommentsPaginateResponseDto>({
    url: `/posts/${postId}/comments`,
    method: 'GET',
    params,
    signal,
  });
};

export const getCommentsControllerPaginateCommentsQueryKey = (
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
) => {
  return [`/posts/${postId}/comments`, ...(params ? [params] : [])] as const;
};

export const getCommentsControllerPaginateCommentsQueryOptions = <
  TData = Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
  TError = unknown,
>(
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerPaginateComments>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCommentsControllerPaginateCommentsQueryKey(postId, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof commentsControllerPaginateComments>>> = ({
    signal,
  }) => commentsControllerPaginateComments(postId, params, signal);

  return { queryKey, queryFn, enabled: !!postId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CommentsControllerPaginateCommentsQueryResult = NonNullable<
  Awaited<ReturnType<typeof commentsControllerPaginateComments>>
>;
export type CommentsControllerPaginateCommentsQueryError = unknown;

export function useCommentsControllerPaginateComments<
  TData = Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
  TError = unknown,
>(
  postId: number,
  params: undefined | CommentsControllerPaginateCommentsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerPaginateComments>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
          TError,
          Awaited<ReturnType<typeof commentsControllerPaginateComments>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useCommentsControllerPaginateComments<
  TData = Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
  TError = unknown,
>(
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerPaginateComments>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
          TError,
          Awaited<ReturnType<typeof commentsControllerPaginateComments>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useCommentsControllerPaginateComments<
  TData = Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
  TError = unknown,
>(
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerPaginateComments>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary 댓글 목록 조회
 */

export function useCommentsControllerPaginateComments<
  TData = Awaited<ReturnType<typeof commentsControllerPaginateComments>>,
  TError = unknown,
>(
  postId: number,
  params?: CommentsControllerPaginateCommentsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerPaginateComments>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getCommentsControllerPaginateCommentsQueryOptions(postId, params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary 댓글 생성
 */
export const commentsControllerPostComment = (
  postId: number,
  createCommentDto: CreateCommentDto,
  signal?: AbortSignal,
) => {
  return axiosInstance<void>({
    url: `/posts/${postId}/comments`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createCommentDto,
    signal,
  });
};

export const getCommentsControllerPostCommentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof commentsControllerPostComment>>,
    TError,
    { postId: number; data: CreateCommentDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof commentsControllerPostComment>>,
  TError,
  { postId: number; data: CreateCommentDto },
  TContext
> => {
  const mutationKey = ['commentsControllerPostComment'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof commentsControllerPostComment>>,
    { postId: number; data: CreateCommentDto }
  > = props => {
    const { postId, data } = props ?? {};

    return commentsControllerPostComment(postId, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CommentsControllerPostCommentMutationResult = NonNullable<
  Awaited<ReturnType<typeof commentsControllerPostComment>>
>;
export type CommentsControllerPostCommentMutationBody = CreateCommentDto;
export type CommentsControllerPostCommentMutationError = unknown;

/**
 * @summary 댓글 생성
 */
export const useCommentsControllerPostComment = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof commentsControllerPostComment>>,
      TError,
      { postId: number; data: CreateCommentDto },
      TContext
    >;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof commentsControllerPostComment>>,
  TError,
  { postId: number; data: CreateCommentDto },
  TContext
> => {
  const mutationOptions = getCommentsControllerPostCommentMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary 단일 댓글 조회
 */
export const commentsControllerGetComment = (
  postId: number,
  commentId: number,
  signal?: AbortSignal,
) => {
  return axiosInstance<void>({
    url: `/posts/${postId}/comments/${commentId}`,
    method: 'GET',
    signal,
  });
};

export const getCommentsControllerGetCommentQueryKey = (postId: number, commentId: number) => {
  return [`/posts/${postId}/comments/${commentId}`] as const;
};

export const getCommentsControllerGetCommentQueryOptions = <
  TData = Awaited<ReturnType<typeof commentsControllerGetComment>>,
  TError = unknown,
>(
  postId: number,
  commentId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCommentsControllerGetCommentQueryKey(postId, commentId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof commentsControllerGetComment>>> = ({
    signal,
  }) => commentsControllerGetComment(postId, commentId, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(postId && commentId),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };
};

export type CommentsControllerGetCommentQueryResult = NonNullable<
  Awaited<ReturnType<typeof commentsControllerGetComment>>
>;
export type CommentsControllerGetCommentQueryError = unknown;

export function useCommentsControllerGetComment<
  TData = Awaited<ReturnType<typeof commentsControllerGetComment>>,
  TError = unknown,
>(
  postId: number,
  commentId: number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof commentsControllerGetComment>>,
          TError,
          Awaited<ReturnType<typeof commentsControllerGetComment>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useCommentsControllerGetComment<
  TData = Awaited<ReturnType<typeof commentsControllerGetComment>>,
  TError = unknown,
>(
  postId: number,
  commentId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof commentsControllerGetComment>>,
          TError,
          Awaited<ReturnType<typeof commentsControllerGetComment>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useCommentsControllerGetComment<
  TData = Awaited<ReturnType<typeof commentsControllerGetComment>>,
  TError = unknown,
>(
  postId: number,
  commentId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary 단일 댓글 조회
 */

export function useCommentsControllerGetComment<
  TData = Awaited<ReturnType<typeof commentsControllerGetComment>>,
  TError = unknown,
>(
  postId: number,
  commentId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof commentsControllerGetComment>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getCommentsControllerGetCommentQueryOptions(postId, commentId, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary 댓글 삭제
 */
export const commentsControllerDeleteComment = (postId: number, commentId: number) => {
  return axiosInstance<void>({ url: `/posts/${postId}/comments/${commentId}`, method: 'DELETE' });
};

export const getCommentsControllerDeleteCommentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof commentsControllerDeleteComment>>,
    TError,
    { postId: number; commentId: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof commentsControllerDeleteComment>>,
  TError,
  { postId: number; commentId: number },
  TContext
> => {
  const mutationKey = ['commentsControllerDeleteComment'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof commentsControllerDeleteComment>>,
    { postId: number; commentId: number }
  > = props => {
    const { postId, commentId } = props ?? {};

    return commentsControllerDeleteComment(postId, commentId);
  };

  return { mutationFn, ...mutationOptions };
};

export type CommentsControllerDeleteCommentMutationResult = NonNullable<
  Awaited<ReturnType<typeof commentsControllerDeleteComment>>
>;

export type CommentsControllerDeleteCommentMutationError = unknown;

/**
 * @summary 댓글 삭제
 */
export const useCommentsControllerDeleteComment = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof commentsControllerDeleteComment>>,
      TError,
      { postId: number; commentId: number },
      TContext
    >;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof commentsControllerDeleteComment>>,
  TError,
  { postId: number; commentId: number },
  TContext
> => {
  const mutationOptions = getCommentsControllerDeleteCommentMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
