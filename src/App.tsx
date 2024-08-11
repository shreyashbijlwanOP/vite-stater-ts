import { useState } from "react";
import dummyData from "../users.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function App() {
  const [users, setUsers] = useState(dummyData.users);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedUsers = reorder(
      users,
      result.source.index,
      result.destination.index
    );

    setUsers(updatedUsers);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided:any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {users.map((item, index) => (
                <Draggable key={item.id} draggableId={index} index={index}>
                  {(provided:any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.firstName}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
