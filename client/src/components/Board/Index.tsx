import MockData from "./../../MOCK_DATA.json";
import Section from "./Section";
const Board: React.FC = () => {
  return (
    <div className="flex flex-row h-full w-full p-4 pt-8">
      <div className="flex min-w-full h-full overflow-scroll">
        {MockData.map((section) => {
          return <Section key={section.id} section={section} />;
        })}
      </div>
    </div>
  );
};

export default Board;
