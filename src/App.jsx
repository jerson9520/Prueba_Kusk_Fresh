import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Header } from "./components/shared/Header";

// eslint-disable-next-line no-unused-vars
function Layout() {
    return (
      <>
        <Navbar />
        <Header />
        <Outlet />
      </>
    )
}


function App() {

  return (
    <div className="bg-white w-full h-screen">
      {/* <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">Hola mundo 1</div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main> */}
      {/* <Home /> */}
      {/* Tittle Content */}
      {/* <Coment /> */}
      <Routes>
          <Route path="/" element={<Outlet />}/>
          <Route index element={<Home />}/>
          <Route path="/recipes/:id" element={<RecipeDetail />}/> 
      </Routes>
    </div>
  );
}

export default App;
