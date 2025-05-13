'use client';

import { BasicCarousel } from '@/components/carousel';
import { Button } from '@/styles/components/ui/button';
import { Card } from '@radix-ui/themes';
import {
  ChangeEvent,
  PropsWithChildren,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import { PreviewImage } from '../preview-image';
import { cn } from '@/lib/utils/cn';
import { FileControl } from './file-control';
import { useCommonControllerPostImage } from 'generate/apis/common/common';

export type DragDropItem = {
  id: string;
  file: File;
  isFocused: boolean;
  fileName: string;
};

interface FileUploaderTriggerProps {
  files: DragDropItem[];
  onAddFiles: (files: DragDropItem[]) => void;
  ref: RefObject<HTMLInputElement | null>;
  onUploadClick: () => void;
}

const FileUploaderTrigger = ({
  children,
  files,
  onAddFiles,
  ref,
  onUploadClick,
}: PropsWithChildren<FileUploaderTriggerProps>) => {
  const { mutate } = useCommonControllerPostImage();

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const addedFiles = Array.from(event.target.files ?? []);
      const uploadedFiles: DragDropItem[] = [];

      let completed = 0;

      for (const file of addedFiles) {
        mutate(
          { data: { image: file } },
          {
            onSuccess: (res: { fileName: string }) => {
              uploadedFiles.push({
                id: `${file.name}_(${file.lastModified})`,
                file,
                isFocused: false,
                fileName: res.fileName,
              });

              completed++;

              if (completed === addedFiles.length) {
                onAddFiles(uploadedFiles);
              }
            },
          }
        );
      }

      event.target.value = '';
    },
    [mutate, onAddFiles]
  );

  return (
    <label
      htmlFor="post"
      className={cn([files.length && 'hidden', 'cursor-pointer'])}
    >
      <input
        ref={ref}
        className="sr-only"
        type="file"
        multiple
        id="post"
        name="post"
        required
        accept="image/*"
        onChange={onInputChange}
      />
      <div onClick={onUploadClick}>{children}</div>
    </label>
  );
};

interface FileUploaderProps {
  onChange?: (files: DragDropItem[]) => void;
}
export const FileUploader = ({ onChange }: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<DragDropItem[]>([]);
  const scrollToIndex = files.findIndex(({ isFocused }) => isFocused);

  const handleChange = (files: DragDropItem[]) => {
    setFiles(files);
    onChange?.(files);
  };

  const onAddFiles = (file: DragDropItem[]) => {
    handleChange([...files, ...file]);
  };

  const onChangeFiles = (files: DragDropItem[]) => {
    handleChange(files);
  };

  const onUploadClick = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="relative p-8 border-2 border-dashed">
      <FileUploaderTrigger
        ref={inputRef}
        files={files}
        onAddFiles={onAddFiles}
        onUploadClick={onUploadClick}
      >
        <div className="flex flex-col gap-2 items-center">
          사진과 동영상을 여기에 끌어다 놓으세요
          <Button variant="outline" size="sm" className="mt-2 w-fit">
            Browse files
          </Button>
        </div>
      </FileUploaderTrigger>
      {!!files.length && (
        <div className="border">
          <BasicCarousel scrollToIndex={scrollToIndex}>
            {files.map(({ file }) => (
              <PreviewImage
                file={file}
                key={file.name}
                className="min-w-full object-cover"
                width={1}
                height={1}
              />
            ))}
          </BasicCarousel>
        </div>
      )}
      <FileControl
        items={files}
        onChange={onChangeFiles}
        onUploadClick={onUploadClick}
      />
    </div>
  );
};
