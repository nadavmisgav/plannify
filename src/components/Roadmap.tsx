import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { GoGrabber } from 'react-icons/go';
import { ResizableBox } from 'react-resizable';

function Mission(props) {
  const { name, provided } = props;
  return (
    <div ref={provided.innerRef} {...provided.draggableProps}>
      <ResizableBox
        width={200}
        height={30}
        minConstraints={[100, 30]}
        maxConstraints={[1200, 30]}
        className="flex items-center border-2 px-2"
      >
        <span {...provided.dragHandleProps}>
          <GoGrabber />
        </span>
        <span>{name}</span>
      </ResizableBox>
    </div>
  );
}

function RoadmapSubject(props) {
  const { droppableId, items } = props;
  return (
    <Droppable droppableId={droppableId} direction="horizontal">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex justify-start items-center space-x-1"
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <Mission
                  provided={provided}
                  dragHandleProps={...provided.dragHandleProps}
                  name={item.content}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default function Roadmap() {
  const onDragEnd = () => {};
  const items1 = [
    { id: '1', content: 'item 1' },
    { id: '2', content: 'item 2' },
  ];

  const items2 = [
    { id: '3', content: 'item 3' },
    { id: '4', content: 'item 4' },
  ];

  return (
    <div className="border-4 py-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <RoadmapSubject droppableId="1" items={items1} />
        <RoadmapSubject droppableId="2" items={items2} />
      </DragDropContext>
    </div>
  );
}
