'use client';

import { BasicDialog } from '@/components/dialog';
import PostDetailPage from 'app/posts/[postId]/page';

export default function PostDialog() {
  return (
    <BasicDialog>
      <PostDetailPage />
    </BasicDialog>
  );
}
