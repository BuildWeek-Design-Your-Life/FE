import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  Container,
  Row,
  Col
} from "shards-react";
import axios from "axios";

const Login = ({ history }) => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://design-bw.herokuapp.com/api/auth/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };
  return (
    <Container className="login-container">
      <Row>
        <Col lg="6">
          <h1> Design Your Life </h1>
          <p>
            This app helps you figure out which activites bring you enjoyment,
            energy, and engagement. These clues are the first step you need to
            take to design your ideal ife.
            <p>
              The journal includes an activity log and a reflection log.
              Activity logs record daily your main activities, and a guage to
              show how engaged and energized you were. Reflection logs are done
              once a week to record your trends, insights and suprises as to
              what activities work and don't work for you.{" "}
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput
                id="#username"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={creds.username}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput
                type="password"
                id="#password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={creds.password}
              />
            </FormGroup>
            <Row className="login-btn">
              <Button block squared>
                Login
              </Button>
            </Row>

            <Row className="login-btn">
              Need an account?
              <Button block squared theme="secondary">
                Sign Up
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
