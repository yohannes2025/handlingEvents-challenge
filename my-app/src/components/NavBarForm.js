// NavBarForm.js
import React, { Component } from "react";
import css from "./NavBarForm.module.css";

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Username: ${this.state.username}, Password: ${this.state.password}`
    );
    this.setState({
      username: "",
      password: "",
    });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery Heading</h1>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleClick}>Log Out</button>
        ) : (
          <button onClick={this.handleClick}>Log In</button>
        )}
        {this.state.isLoggedIn && (
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default NavBarForm;
