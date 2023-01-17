import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <NavLink 
          exact to="/"
          // exactstyle={{
          //   color: "blue",
          // }}
          activeStyle={{
            color: "purple",
          }}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          exact to="/movies"
          // exactstyle={{
          //   color: "blue",
          // }}
          activeStyle={{
            color: "purple",
          }}
        >
          Movies
        </NavLink>
      </div>
      <div>
        <NavLink 
          exact to="/directors"
          // exactstyle={{
          //   color: "blue",
          // }}
          activeStyle={{
            color: "purple",
          }}
        >
          Directors
        </NavLink>
      </div>
      <div>
        <NavLink 
          exact to="/actors"
          // exactstyle={{
          //   color: "blue",
          // }}
          activeStyle={{
            color: "purple",
          }}
        >
          Actors
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
