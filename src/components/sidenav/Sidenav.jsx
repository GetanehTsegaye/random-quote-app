import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Menus from "../../constants/menu";
import "./sidenav.css";

const Sidenav = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      id="sideNav"
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 relative`}
    >
      <img
        Class
        src="/assets/control.png"
        className={`absolute cursor-pointer rounded-full
          -right-3 top-9 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          id="appTitle"
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          {" "}
          Quote of the Day
        </h1>
      </div>
      <ul>
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm cursor-pointer  hover:bg-light-white rounded-md
           ${menu.gap ? "mt-9" : "mt-2"} ${
              location.pathname === `/${menu.title.toLowerCase()}` &&
              "bg-light-white"
            }`}
          >
            <Link
              className="flex items-center gap-x-4 p-2"
              to={`/${menu.title.toLowerCase()}`}
            >
              <img src={`/assets/${menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {" "}
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Sidenav;
