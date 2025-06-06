import { HeartIcon } from '@radix-ui/react-icons';

import { POST_HEIGHT, POST_WIDTH } from '@/entities/post/constants';
import { PostsModel } from '@/shared/generate/schemas';
import { AuthorInfo, BasicImage } from '@/shared/ui';
import { useToggleDialog } from '@/shared/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/styles/components/ui/card';
interface PostProps {
  data: PostsModel;
}

export function Post({ data }: PostProps) {
  const { open, setOpen } = useToggleDialog({ defaultOpen: false });
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
