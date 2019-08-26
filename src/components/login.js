import React from "react";
import { Form, FormInput, FormGroup, Button, Container } from "shards-react";

export default function Login() {
  return (
    <Container className="login-container">
      <Form>
        <FormGroup>
          <label htmlFor="#username">Username</label>
          <FormInput id="#username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#password">Password</label>
          <FormInput type="password" id="#password" placeholder="Password" />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </Container>
  );
}
