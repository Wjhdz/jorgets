import { NavLink as Nav } from "react-router-dom";

import React from "react";
const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Nav to="/About">About</Nav>
        </li>
        <li>
          <Nav to="/Home">Home</Nav>
        </li>
        <li>
          <Nav to="/Users">Users</Nav>
        </li>
        <li>
          <Nav to="/Users/"></Nav>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
