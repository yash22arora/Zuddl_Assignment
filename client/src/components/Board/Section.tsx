import { BsThreeDots } from "react-icons/bs";
import Task from "./Task";

interface SectionProps {
  section: {
    id: number;
    category: string;
    tasks: {
      id: number;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}
const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <div className="flex flex-col px-4 py-4 bg-slate-600 w-full min-w-[25vw] h-min m-4 rounded-md">
      <div className="flex flex-row justify-between items-center mb-3">
        <span className="text-lg font-semibold">{section.category}</span>
        <BsThreeDots />
      </div>
      {section.tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
};

export default Section;
