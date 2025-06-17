'use client';

import { TextArea } from '@radix-ui/themes';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

import { usePostsControllerPostPosts } from '@/shared/generate/apis';
import { Button, DragDropItem, FileUploader, Input } from '@/shared/ui';

const files = atom<DragDropItem[]>([]);
const contents = atom<string>('');
const title = atom<string>('');

export default function CreatePage() {
  const router = useRouter();
  const [postFiles, setPostFiles] = useAtom(files);
  const [postContents, setPostContents] = useAtom(contents);
  const [postTitle, setPostTitle] = useAtom(title);

  const { mutate } = usePostsControllerPostPosts();

  const handleContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContents(e.target.value);
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleSubmit = () => {
    mutate(
      {
        data: {
          images: postFiles.map(post => post.fileName),
          title: postTitle,
          content: postContents,
        },
      },
      { onSuccess: () => router.push('/posts') },
    );
  };

  return (
    <div className="h-full flex flex-col content-center gap-10">
      <FileUploader files={postFiles} onChange={setPostFiles} />
      <Input value={postTitle} onChange={handleTitle} placeholder="제목을 입력해 주세요." />
      <TextArea
        value={postContents}
        placeholder="내용을 입력해 주세요."
        onChange={handleContents}
      />
      <Button onClick={handleSubmit}>등록하기</Button>
    </div>
  );
}
