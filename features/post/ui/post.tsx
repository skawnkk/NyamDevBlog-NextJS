'use client';
import { HeartIcon } from '@radix-ui/react-icons';

import { POST_HEIGHT, POST_WIDTH } from '@/entities/post/constants';
import { CommentSheet } from '@/features/comment/ui/comment-sheet';
import { PostsModel } from '@/shared/generate/schemas';
import { AuthorInfo, BasicImage } from '@/shared/ui';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/shared/ui';
import { CardTitle } from '@/shared/ui/card';
import { useToggle } from '@/shared/utils';

interface PostProps {
  data: PostsModel;
}

export function Post({ data }: PostProps) {
  const { open, setOpen } = useToggle({ defaultOpen: false });
  const { title, images, likeCount, author, subTitle, id } = data;

  return (
    <>
      <Card className={`max-w-[${POST_WIDTH}px]`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <BasicImage
            width={POST_WIDTH}
            height={POST_HEIGHT}
            src={
              images.length > 0 ? `${process.env.NEXT_PUBLIC_API_URL}${images[0].path}` : undefined
            }
            alt={`${title}_random`}
          />
        </CardContent>
        <CommentSheet postId={id.toString()} />
        <CardFooter className={`flex justify-between items-center`}>
          <AuthorInfo nickname={author.nickname} image={author.image?.path} />
          <HeartIcon />
          {/* {likeCount ? <HeartIcon /> : <HeartFilledIcon />} */}
          {/* 당사자가 like를 눌렀는지 */}
        </CardFooter>
      </Card>
    </>
  );
}
