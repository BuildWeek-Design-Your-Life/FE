import React, { Component } from "react";
import axios from "axios";
import { Container } from "shards-react";
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    const { username, email, password } = this.state;
    console.log("Submitted");
    event.preventDefault();
    axios
      .post("https://design-bw.herokuapp.com/api/auth/register", {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        console.log("reg res", res.data);
      })
      .catch(err => {
        console.log("reg error", err);
      });
  }

  render() {
    return (
      <Container className="registration">
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> Register </button>
        </form>
      </Container>
    );
  }
}
