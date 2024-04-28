import SideNav from "./components/sidenav/Sidenav";
import List from "./components/list/List";
import Card from "./components/card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
