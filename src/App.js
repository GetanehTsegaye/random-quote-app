import SideNav from "./components/sidenav/Sidenav";
import Card from "./components/list/List";
import Quotes from "./components/card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    // App Router

    <BrowserRouter>
      <div className="flex">
        <SideNav />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/card" element={<Card />} />
            <Route path="/list" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
