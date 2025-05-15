import { Avatar } from '@radix-ui/themes';

interface AuthorInfoProps {
  nickname?: string;
  image?: string;
  onlyImage?: boolean;
}

export function AuthorInfo({ image, nickname }: AuthorInfoProps) {
  const profileUrl = image ? `${process.env.NEXT_PUBLIC_API_URL}${image}` : '';

  return (
    <div className="flex items-center gap-2">
      <Avatar
        radius="full"
        src={profileUrl}
        fallback={nickname?.slice(0, 2) || '-'}
      />
      {nickname && <p>{nickname}</p>}
    </div>
  );
}
