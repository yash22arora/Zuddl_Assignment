import { BsStar } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";

interface NavProps {}
const NavBar: React.FC<NavProps> = () => {
  return (
    <div className="flex flex-row p-6  w-full justify-between items-center">
      <div className="flex flex-row items-center">
        <span className="text-2xl font-semibold">Yashvardhan's Board</span>
        <BsStar className="ml-8 mr-4" />
        <span className="text-md font-normal mx-4 px-4 border-x border-slate-500">
          Zuddl & Co.
        </span>
        <AiOutlineTeam />
        <span className="text-md font-normal px-2 ">Team Visible</span>
      </div>
      <div>
        <span className="underline text-md">Show Menu</span>
      </div>
    </div>
  );
};

export default NavBar;
