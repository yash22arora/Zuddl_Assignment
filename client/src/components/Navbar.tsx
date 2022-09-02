interface NavProps {}
const NavBar: React.FC<NavProps> = () => {
  return (
    <div className="flex flex-row p-6  w-full justify-between items-center">
      <div>
        <span className="text-2xl font-semibold">Yashvardhan's Board</span>
      </div>
      <div>
        <span className="underline text-md">Show Menu</span>
      </div>
    </div>
  );
};

export default NavBar;
