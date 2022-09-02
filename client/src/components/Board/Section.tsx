import { BsThreeDots } from "react-icons/bs";

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
    <div className="flex flex-col px-4 py-4 bg-slate-600 w-full m-4 rounded-md">
      <div className="flex flex-row justify-between items-center">
        <span className="text-lg font-semibold">{section.category}</span>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Section;
