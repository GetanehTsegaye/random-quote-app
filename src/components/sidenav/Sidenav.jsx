import { React, useState } from "react";
import Menus from "../../api/menu";

const Sidenav = () => {
  return (
    <div>
      <div>
        <img src="/assets/control.png" />
      </div>
      <div>
        <img src="/assets/logo.png" />
        <h1>Quote of the Day</h1>
      </div>
      <ul>
        {Menus.map((menu, index) => (
          <li key={index}>
            <img src={`../../assets/${menu.src}.png`} />
            {menu.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
