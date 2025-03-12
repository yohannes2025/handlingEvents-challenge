// NavBarForm.js
import React, { Component } from "react";
import css from "./NavBarForm.module.css"; // Import your CSS Module
import NavBarChild from "./NavBarChild"; // Import the child component

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Initially set to false
    };
  }

  handleClick = () => {
    // Toggle the isLoggedIn state on button click
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>

        {/* Render the Login Button or Form based on the state */}
        {!this.state.isLoggedIn ? (
          <button onClick={this.handleClick}>Log in</button>
        ) : (
          <NavBarChild handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default NavBarForm;
