import { Draggable } from "react-beautiful-dnd";
import { BsThreeDots } from "react-icons/bs";
import Task from "./Task";

interface SectionProps {
  section: {
    id: string;
    category: string;
    tasks: {
      id: string;
      deadline: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}
const Section: React.FC<SectionProps> = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-3">
        <span className="text-lg font-semibold">{props.section.category}</span>
        <BsThreeDots />
      </div>
      {props.section.tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                ...provided.draggableProps.style,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <Task task={task} />
            </div>
          )}
        </Draggable>
      ))}
      <div className="mt-4">Add a Task ...</div>
    </>
  );
};

export default Section;

// return <Task task={task} key={task.id} />;
