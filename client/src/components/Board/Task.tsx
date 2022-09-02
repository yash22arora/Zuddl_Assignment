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
  return (
    <div className="flex flex-col p-4 rounded-md bg-slate-500 shadow-md my-3">
      <span className="text-lg font-medium">{task.title}</span>
      <div className="flex flex-row">
        <BsTextParagraph />
      </div>
    </div>
  );
};

export default Task;
