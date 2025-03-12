// NavBarForm.js
import React, { Component } from "react";
import css from "./NavBarForm.module.css"; // Assuming you have a CSS Module for styling
import NavBarChild from "./NavBarChild"; // Import the child component for the form

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <NavBarChild handleClick={this.handleClick} />
        ) : (
          <button onClick={this.handleClick}>Log In</button>
        )}
        <nav>
          <button>Sign Up</button>
          <button onClick={this.handleClick}>Log In</button>
        </nav>
      </div>
    );
  }
}

export default NavBarForm;
