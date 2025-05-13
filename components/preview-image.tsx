import { BasicImage, BasicImageProps } from './image';

interface PreviewImageProps
  extends Pick<BasicImageProps, 'unoptimized' | 'width' | 'height'> {
  file: File;
  className?: string;
}

export const PreviewImage = ({
  className,
  file,
  width,
  height,
}: PreviewImageProps) => {
  return (
    <BasicImage
      className={className}
      alt={file.name}
      src={URL.createObjectURL(file)}
      // onLoad={(event) => {
      //   if (!(event.target instanceof HTMLImageElement)) return;
      //   URL.revokeObjectURL(event.target.src);
      // }} > TODO: 이걸 어느 시점에 하면 좋을지?
      width={width}
      height={height}
      fill={!width && !height}
    />
  );
};
