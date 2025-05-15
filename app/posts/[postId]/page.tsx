'use client';

import { AuthorInfo } from '@/components/author-info';
import { BottomSheet } from '@/components/bottom-sheet';
import { BasicCarousel } from '@/components/carousel';
import { BasicImage } from '@/components/image';
import { POST_HEIGHT, POST_WIDTH } from '@/lib/const';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { usePostsControllerGetPost } from 'generate/apis/posts/posts';
import { useParams } from 'next/navigation';
import { CommentList } from './comment-list';
import { CommentInput } from './comment-input';

export default function PostDetailPage() {
  console.log('page');

  const { postId } = useParams<{ postId: string }>();

  const { data: { createdAt, content, title, subTitle, author, images } = {} } =
    usePostsControllerGetPost(Number(postId), {
      query: { enabled: !!postId },
    });

  return (
    <div>
      <h3 className="m-0 text-[17px] font-medium text-mauve12">{title}</h3>
      <AuthorInfo nickname={author?.nickname} image={author?.image.path} />
      {images && images?.length > 1 ? (
        <BasicCarousel>
          {images.map((image, index) => (
            <BasicImage
              key={index}
              src={`${process.env.NEXT_PUBLIC_API_URL}${image.path}`}
              width={POST_WIDTH}
              height={POST_HEIGHT}
              alt={`${'test'}_${index}`}
            />
          ))}
        </BasicCarousel>
      ) : (
        <BasicImage
          width={POST_WIDTH}
          height={POST_HEIGHT}
          alt={`${'test'}_random`}
          src={
            images?.[0]?.path
              ? `${process.env.NEXT_PUBLIC_API_URL}${images?.[0]?.path}`
              : ''
          }
        />
      )}
      <div>
        {/* {likeCount ? <HeartIcon /> : <HeartFilledIcon />} */}
        <BottomSheet
          header={<div className="flex justify-center">댓글</div>}
          content={<CommentList postId={postId} />}
          bottom={<CommentInput postId={postId} />}
        >
          <ChatBubbleIcon />
        </BottomSheet>
      </div>
      <div className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
        <div className="flex gap-2">
          <span className="font-bold">{author?.nickname}</span>
          <span>{subTitle}</span>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
