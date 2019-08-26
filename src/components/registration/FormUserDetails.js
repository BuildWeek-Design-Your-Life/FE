import React, { Component } from "react";
import { Form, FormInput, FormGroup, Container, Button } from "shards-react";

export class FormUserDetails extends Component {
  contiune = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <Container className="form-user-details-container">
        <h1> Sign up for our App </h1>
        <Form>
          <FormGroup>
            <label htmlFor="#username">Create a Username</label>
            <FormInput
              id="#username"
              placeholder="Username"
              text="text"
              name="username"
              onChange={handleChange("username")}
              defaultValue={values.username}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Create a Password</label>
            <FormInput
              type="password"
              id="#password"
              text="text"
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              defaultValue={values.password}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#email">Enter your Email</label>
            <FormInput
              type="email"
              id="#email"
              text="text"
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </FormGroup>
          <Button className="nextStep" onClick={this.contiune}>
            Next Step
          </Button>
        </Form>
      </Container>
    );
  }
}

export default FormUserDetails;
