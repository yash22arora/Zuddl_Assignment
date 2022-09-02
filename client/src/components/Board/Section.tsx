import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsThreeDots } from "react-icons/bs";
import AddTaskForm from "./AddTask";
import { NewTask } from "./Index";
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
  index: number;
  addTaskHandler: (newTask: any) => void;
}

const Section: React.FC<SectionProps> = (props) => {
  const [addFormOpen, setAddFormOpen] = useState(false);

  const addTaskHandler = (newTask: NewTask) => {
    props.addTaskHandler(newTask);
    setAddFormOpen(false);
  };

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
      <div
        className="mt-4"
        onClick={() => {
          setAddFormOpen(true);
        }}
      >
        Add a Task ...
      </div>
      {addFormOpen && (
        <AddTaskForm
          setAddFormOpen={setAddFormOpen}
          addTaskHandler={addTaskHandler}
          sectionIndex={props.index}
        />
      )}
    </>
  );
};

export default Section;

// return <Task task={task} key={task.id} />;
