import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Button, Form, FormGroup, FormInput } from "shards-react";
export default class Registration extends Component {
  constructor(props) {
    console.log(props);
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
    console.log("Submitted", this.state);
    event.preventDefault();
    axios
      .post("https://design-bw.herokuapp.com/api/auth/register", {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        console.log("reg res", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("reg error", err);
      });
  }

  render() {
    console.log("this is state", this.state);
    return (
      <Container className="registration">
        <Form className="registration-form">
          <FormGroup className="rf-username">
            <label htmlFor="#username">
              <h4>Please enter your username.</h4>
            </label>
            <FormInput
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="rf-username">
            <h4>Please enter your email address.</h4>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="rf-username">
            <h4>Please enter your password.</h4>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <Link to="/login">
            <Button block onClick={this.handleSubmit}>
              Register
            </Button>
          </Link>
        </Form>
      </Container>
    );
  }
}
