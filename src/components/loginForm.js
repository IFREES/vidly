import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: imput }) => {
    const account = { ...this.state.account };
    account[imput.name] = imput.value;
    this.setState({ account });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("Submitted");
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              className="form-control"
              type="text"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
