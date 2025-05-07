import { PostsModel } from 'generate/schemas';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Image from 'next/image';
import { Avatar } from '@radix-ui/themes';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

interface PostProps {
  data: PostsModel;
}

export default function Post({ data }: PostProps) {
  const { title, images, author, subTitle } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={300}
            height={300}
            alt={`${title}_${index}`}
          />
        ))}
      </CardContent>
      <CardFooter className={'flex gap-2'}>
        <Avatar
          radius="full"
          src={`${process.env.NEXT_PUBLIC_API_URL}${author.image?.path}`}
          fallback={author.nickname.slice(0, 2)}
        />
        <p>{author.nickname}</p>
        {/* <HeartIcon /> */}
        {/* <HeartFilledIcon /> */}
      </CardFooter>
    </Card>
  );
}
