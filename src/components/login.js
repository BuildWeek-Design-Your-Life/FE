import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button, Container } from "shards-react";
import axios from "axios";

export default function Login ( {history} ) {
  const [user, setUser] = useState({username: "", password: ""});

  const changeHandler = event => {
    event.preventDefault();
    // console.log(event.target.value);
    setUser({...user, [event.target.name]: event.target.value})
  }

  // setUser({username: "", password: ""});

  const submitForm = event => {
    event.preventDefault();
    axios
      .post("https://design-bw.herokuapp.com/api/auth/login", user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Container className="login-container">
      <Form validated="true" onSubmit={submitForm}>
        <FormGroup required>
          <label htmlFor="#username">Username</label>
          <FormInput id="#username" name="username" placeholder="Username" value={user.username} onChange={changeHandler} />
        </FormGroup>
        <FormGroup required>
          <label htmlFor="#password">Password</label>
          <FormInput type="password" name="password" id="#password" placeholder="Password" value={user.password} onChange={changeHandler} invalid-feedback="Password is invalid. Try again!" />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </Container>
  )
}