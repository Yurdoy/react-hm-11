import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page!</p>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "blue",
        })}
      >
        Home Page
      </NavLink>
    </div>
  );
};

export default About;
