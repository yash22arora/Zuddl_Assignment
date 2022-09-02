import React from "react";
import Board from "./components/Board/Index";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 max-h-screen flex flex-col text-gray-50">
      <NavBar />
      <Board />
    </div>
  );
}

export default App;
