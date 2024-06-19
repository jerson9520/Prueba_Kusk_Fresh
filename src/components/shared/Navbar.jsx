import { useState } from "react";
import { RiCloseLine, RiHome6Line, RiMenu3Fill, RiPieChartLine, RiTeamLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Sidebar className="lg:block lg:bg-slate-400" showMenu={showMenu} />
      {/* Main Mobile */}
      <nav className="bg-orange-100 lg:hidden fixed w-full bottom-0 left-0 text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiHome6Line />
        </button>
        <button className="p-2">
          <RiTeamLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
