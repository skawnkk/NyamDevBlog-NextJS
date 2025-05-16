import { Cross2Icon } from '@radix-ui/react-icons';
import { MouseEvent } from 'react';

import { DragDropItemProps } from '../drag-drop';
import { BasicImageProps } from '../image';
import { PreviewImage } from '../preview-image';

export interface PreviewImageProps
  extends Pick<BasicImageProps, 'width' | 'height'>,
    DragDropItemProps {}

export const FilePreviewImage = ({ item, onRemove, onFocus }: PreviewImageProps) => {
  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    onRemove(item);
  };

  return (
    <div
      className="relative w-[100px] h-[100px] flex items-center border"
      onClick={() => onFocus(item)}
    >
      <div>
        <PreviewImage file={item.file} width={100} height={100} />
      </div>
      <div className={!item.isFocused ? 'absolute inset-0 bg-black/30' : ''} />
      {item.isFocused && (
        <button
          className="absolute right-1 top-1 inline-flex size-[24px] appearance-none items-center justify-center rounded-full text-white bg-black/50 focus:outline-none"
          aria-label="Close"
          onClick={handleRemove}
        >
          <Cross2Icon />
        </button>
      )}
    </div>
  );
};
