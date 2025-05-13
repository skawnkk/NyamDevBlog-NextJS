'use client';

import { AuthorInfo } from '@/components/author-info';
import { BasicCarousel } from '@/components/carousel';
import { BasicImage } from '@/components/image';
import { POST_HEIGHT, POST_WIDTH } from '@/lib/const';
import { usePostsControllerGetPost } from 'generate/apis/posts/posts';
import { useParams } from 'next/navigation';

export default function PostDetailPage() {
  const { postId } = useParams<{ postId: string }>();

  const { data: { createdAt, content, title, subTitle, author, images } = {} } =
    usePostsControllerGetPost(Number(postId), {
      query: { enabled: !!postId },
    });

  return (
    <div>
      <h3 className="m-0 text-[17px] font-medium text-mauve12">{title}</h3>
      <AuthorInfo info={author} />
      <div className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
        <div className="flex gap-2">
          <span className="font-bold">{author?.nickname}</span>
          <span>{subTitle}</span>
        </div>
        <p>{content}</p>
      </div>
      <BasicCarousel>
        {images?.length ? (
          images?.map((image, index) => (
            <BasicImage
              key={index}
              src={`${process.env.NEXT_PUBLIC_API_URL}${image?.path}`}
              width={POST_WIDTH}
              height={POST_HEIGHT}
              alt={`${'test'}_${index}`}
            />
          ))
        ) : (
          <BasicImage
            width={POST_WIDTH}
            height={POST_HEIGHT}
            alt={`${'test'}_random`}
          />
        )}
      </BasicCarousel>
    </div>
  );
}
