import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { DragDropItem } from './file-uploader';
import { ComponentType } from 'react';

export type DragDropItemProps = {
  item: DragDropItem;
  onRemove: (item: DragDropItem) => void;
  onFocus: (item: DragDropItem) => void;
};

interface DragDropProps {
  items: DragDropItem[];
  onReorder: (file: DragDropItem[]) => void;
  onFocus: (file: DragDropItem[]) => void;

  Comp: ComponentType<DragDropItemProps>;
}

export const DragDrop = ({ items, onReorder, Comp }: DragDropProps) => {
  const listDefaultStyle = `flex flex-nowrap gap-2 items-center p-2 h-[120px]`;

  const handleDragEnd = (result) => {
    if (items.length <= 1 || !result) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex === destinationIndex) {
      return;
    }

    const draggableItems = [...items].map((item) => ({
      ...item,
      isFocused: false,
    }));

    const [draggedItem] = draggableItems.splice(sourceIndex, 1);
    draggableItems.splice(destinationIndex, 0, {
      ...draggedItem,
      isFocused: true,
    });

    onReorder(draggableItems);
  };

  const onRemove = (itemToRemove: DragDropItem) => {
    const itemsAray = [...items];
    const indexToRemove = itemsAray.findIndex(
      (item) => item.id === itemToRemove.id
    );

    itemsAray.splice(indexToRemove, 1);

    onReorder(
      itemsAray.map((item, index) => ({ ...item, isFocused: index === 0 }))
    );
  };

  const onFocus = (focusedItem: DragDropItem) => {
    const updatedItems = [...items].map((item) => {
      if (item.id === focusedItem.id) {
        return { ...focusedItem, isFocused: true };
      }
      return { ...item, isFocused: false };
    });

    onReorder(updatedItems);
  };

  if (!items.length) {
    return <></>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div className={listDefaultStyle} ref={provided.innerRef}>
            {items?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Comp {...{ item, onRemove, onFocus }} />
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
