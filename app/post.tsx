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

interface PostProps {
  data: PostsModel;
}

export default function Post({ data }: PostProps) {
  const { id, title, images, author } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>CardDescription</CardDescription>
      </CardHeader>
      <CardContent>
        {images.map((image) => (
          <Image src={image} width={300} height={300} alt={`${title}_${id}`} />
        ))}
      </CardContent>
      <CardFooter>
        <Avatar
          radius="full"
          src={author?.image}
          fallback={author.nickname.slice(0, 2)}
        />
      </CardFooter>
    </Card>
  );
}
