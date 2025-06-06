'use client';

import { Flex } from '@radix-ui/themes';
import Link from 'next/link';

import { InfiniteScroll } from '@/shared/ui';

import { useInfinitePosts } from '../action';
import { Post } from './post';
export function PostList() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfinitePosts({ take: 10 });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>오류가 발생했습니다.</div>;

  const posts = data?.pages.flatMap(page => page.data) ?? [];

  return (
    <Flex gap="3" direction="column">
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`} scroll={false}>
          <Post data={post} />
        </Link>
      ))}
      <InfiniteScroll hasNextPage={hasNextPage} loadMore={fetchNextPage} />
    </Flex>
  );
}
