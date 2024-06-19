/* eslint-disable react/prop-types */
import { RiHome6Line, RiTeamLine, RiVideoLine  } from "react-icons/ri";

function Sidebar(props) {
    const { showMenu } = props;
  return (
    <div className={`bg-primary fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"} lg:hidden`}>
        <ul className="pl-4">
            <h1 className="text-2xl text-black uppercase font-bold text-center my-3">KUKS FRESH</h1>
            <li className=" bg-orange-50 p-4 rounded-tl-xl rounded-bl-xl">
                <a href="#" className="bg-stone-600 p-4 flex justify-center rounded-xl text-white">
                <RiHome6Line className="text-2xl" />
                </a>
             </li>
            <li className="hover:bg-orange-50 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className=" group-hover:bg-stone-600 p-4 flex justify-center rounded-xl text-black group-hover:text-white transition-colors">
                <RiTeamLine className="text-2xl" />
                </a>
             </li>
             <li className="hover:bg-orange-50 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className=" group-hover:bg-stone-600 p-4 flex justify-center rounded-xl text-black group-hover:text-white transition-colors">
                <RiVideoLine className="text-2xl" />
                </a>
             </li>
        </ul>
    </div>
  )
}

export default Sidebar;