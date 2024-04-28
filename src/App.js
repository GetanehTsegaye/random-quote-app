import SideNav from "./components/sidenav/Sidenav";
import List from "./components/list/List";
import Card from "./components/card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className='flex'>
    //   <div  className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
    //     <img src="/assets/control.png"
    //         className={`absolute cursor-pointer rounded-full
    //         -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
    //         onClick ={()=>setOpen(!open)}/>
    //      <div className='flex gap-x-4 items-center'>
    //         <img src="/assets/logo.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
    //         <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}> Designer</h1>
    //      </div>
    //      <ul>
    //       {Menus.map((menu, index)=>(
    //         <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
    //          ${menu.gap ? "mt-9" : "mt-2"} ${index=== 0 && "bg-light-white"}`}>
    //           <img src={`/assets/${menu.src}.png`}/>
    //           <span className={`${!open && "hidden"} origin-left duration-200`}> {menu.title}</span></li>
    //       ))}
    //      </ul>
    //   </div>

    //   <div  className="p-7 text-2xl font-semibold flex-1 h-screen" >
    //       <h1>Home Page</h1>
    //   </div>
    // </div>
    <>
      <BrowserRouter>
        <div className="flex">
          <SideNav />
          <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="/card" element={<Card />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
