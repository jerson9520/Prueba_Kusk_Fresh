import { RiCloseLine, RiHome6Line, RiMenu3Fill, RiPieChartLine, RiTeamLine } from "react-icons/ri"
import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import { Header } from "./components/shared/Header";

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [ShowOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-white w-full h-screen">
      <Sidebar showMenu={showMenu}/>
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
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">Hola mundo 1</div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
      <Header className="p-4"/>
      {/* Tittle Content */}
      <div className="w-auto h-20 p-5 grid grid-cols-4 gap-5 rounded-lg m-2 shadow-xl py-2 lg:flex-row lg:justify-center lg:shadow-none lg:text-2xl lg:items-center ">
        <div className="rounded-lg col-start-1 col-end-4 row-span-2">
          <h2 className="p-3"> !! People who loves to eat are always Best People </h2>
        </div>
        <div className="rounded-lg col-start-4 row-start-2">
          <p className="gap-4 text-primary">Julia Child</p>
        </div>
      </div>
    </div>

  )
}

export default App
