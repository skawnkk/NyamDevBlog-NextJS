import { LayersIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { cn, useToggle, useOutsideClick } from 'shared/utils';

import { DragDrop } from '../drag-drop';
import { FilePreviewImage } from './file-preview-image';
import { DragDropItem } from './index';

interface FileControlProps {
  items: DragDropItem[];
  onChange: (file: DragDropItem[]) => void;
  onUploadClick: () => void;
}

export const FileControl = ({ items, onChange, onUploadClick }: FileControlProps) => {
  const { open, toggleOpen } = useToggle({ defaultOpen: false });
  const ref = useOutsideClick<HTMLDivElement>(toggleOpen, open);

  if (!items.length) {
    return <></>;
  }

  return (
    <div className="absolute flex-col justify-end bottom-12 right-8 max-w-[calc(100vw-64px)]">
      <div
        ref={ref}
        className={cn([
          'flex gap-3 items-center justify-end pr-4 text-white bg-black/40',
          !open ? 'invisible' : '',
        ])}
      >
        <div className={'w-full overflow-x-auto whitespace-nowrap'}>
          <div className="inline-flex gap-2 items-center h-[120px] px-2">
            <DragDrop items={items} onReorder={onChange} Comp={FilePreviewImage} />
          </div>
        </div>
        <button aria-label="Add" onClick={onUploadClick}>
          <PlusCircledIcon className="size-12" />
        </button>
      </div>
      <button
        className="flex place-self-end bg-white rounded-full m-2 p-1 mr-4 shadow-lg"
        aria-label="Control"
        onClick={toggleOpen}
      >
        <LayersIcon className="size-8" />
      </button>
    </div>
  );
};
