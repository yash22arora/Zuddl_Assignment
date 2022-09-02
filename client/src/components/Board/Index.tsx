import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import MockData from "./../../MOCK_DATA.json";
import Section from "./Section";
const Board: React.FC = () => {
  const [data, setData] = useState(MockData);
  return (
    <div className="flex flex-row h-full w-full p-4 pt-8">
      <div className="flex min-w-full h-full overflow-scroll">
        {data.map((section) => {
          return <Section key={section.id} section={section} />;
        })}
        <BsPlus size={100} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Board;
