'use client';

import PostDetailPage from 'app/posts/[postId]/page';

import { BasicDialog } from '@/shared/ui/dialog';

export default function PostDialog() {
  return (
    <BasicDialog>
      <PostDetailPage />
    </BasicDialog>
  );
}
