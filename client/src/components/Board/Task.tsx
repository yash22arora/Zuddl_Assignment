import { useEffect, useState } from "react";
import { BsTextParagraph } from "react-icons/bs";

interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("h-0");
  useEffect(() => {
    setHeight(expanded ? "h-min my-3" : "h-0");
  }, [expanded]);
  return (
    <div className="flex flex-col p-4 rounded-md bg-slate-500 shadow-md my-3">
      <span className="text-xl font-bold">{task.title}</span>
      <p
        className={`${height} transition-all origin-top duration-200 overflow-hidden`}
      >
        {task.description}
      </p>
      <div className="flex flex-row">
        <BsTextParagraph
          className="cursor-pointer mt-3"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
