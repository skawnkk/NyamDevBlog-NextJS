'use client';

import { usePostsControllerGetPosts } from 'generate/apis/posts/posts';
import Post from './post';
import { Flex } from '@radix-ui/themes';

export function CardList() {
  const { data } = usePostsControllerGetPosts();

  return (
    <Flex gap="3" direction="column">
      {data?.data.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </Flex>
  );
}
