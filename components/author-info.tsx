import { Avatar } from '@radix-ui/themes';
import { UsersModel } from 'generate/schemas';

interface AuthorInfoProps {
  info?: UsersModel;
}
export function AuthorInfo({ info }: AuthorInfoProps) {
  const profileUrl = info?.image?.path
    ? `${process.env.NEXT_PUBLIC_API_URL}${info?.image?.path}`
    : '';

  return (
    <div className="flex items-center gap-2">
      <Avatar
        radius="full"
        src={profileUrl}
        fallback={info?.nickname.slice(0, 2) || '-'}
      />
      <p>{info?.nickname}</p>
    </div>
  );
}
