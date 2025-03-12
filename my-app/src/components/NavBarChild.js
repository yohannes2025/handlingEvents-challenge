// NavBarChild.js
import React from "react";

const NavBarChild = ({ handleClick }) => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button onClick={handleClick} type="button">
        Submit
      </button>
    </form>
  );
};

export default NavBarChild;
