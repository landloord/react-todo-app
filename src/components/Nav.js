import React from "react";
import ReactDOM from "react-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="nav-contents">
        <div className="logo">
          <img src="font.png" alt="" />
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <li>Settings</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
