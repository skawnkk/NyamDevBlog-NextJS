'use client';

import { usePostsControllerGetPosts } from 'generate/apis/posts/posts';
import Post from './post';
import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
export function PostList() {
  const { data } = usePostsControllerGetPosts();

  return (
    <Flex gap="3" direction="column">
      {data?.data.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`} scroll={false}>
          <Post data={post} />
        </Link>
      ))}
    </Flex>
  );
}
