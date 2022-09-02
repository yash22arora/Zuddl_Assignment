import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MockData from "./../../MOCK_DATA.json";
import Section from "./Section";
import AddTaskForm from "./AddTask";
const Board: React.FC = () => {
  const [data, setData] = useState(MockData);
  const [addFormOpen, setAddFormOpen] = useState(true);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceSectionIndex = data.findIndex(
        (e) => e.id === source.droppableId
      );
      const destinationSectionIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceSection = data[sourceSectionIndex];
      const destinationSection = data[destinationSectionIndex];

      const sourceTasks = [...sourceSection.tasks];
      const destinationTasks = [...destinationSection.tasks];

      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);

      data[sourceSectionIndex].tasks = sourceTasks;
      data[destinationSectionIndex].tasks = destinationTasks;
      setData(data);
    }
  };
  return (
    <div className="flex flex-row h-full w-full p-4 pt-8">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex min-w-full h-full overflow-scroll">
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col px-4 py-4 bg-slate-700 w-full min-w-[25vw] h-max m-4 rounded-md"
                >
                  <Section section={section} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
          <BsPlus size={100} className="cursor-pointer" />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
