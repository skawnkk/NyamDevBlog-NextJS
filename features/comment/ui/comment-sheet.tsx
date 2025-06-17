import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/shared/ui';

import { CommentInput } from './comment-input';
import { CommentList } from './comment-list';

interface CommentSheetProps {
  postId: string;
}

export function CommentSheet({ postId }: CommentSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ChatBubbleIcon />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <DialogTitle className="text-lg font-bold text-center">댓글</DialogTitle>
          <DialogDescription className="sr-only">
            이 시트에서는 게시글에 대한 댓글을 확인하고 입력할 수 있습니다.
          </DialogDescription>
        </SheetHeader>
        <CommentList postId={postId} />
        <SheetFooter>
          <CommentInput postId={postId} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
