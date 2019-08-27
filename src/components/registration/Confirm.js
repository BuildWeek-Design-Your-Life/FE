import React, { Component } from "react";
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

export class Confirm extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { username, password, email, activity, engagement },
      handleChange
    } = this.props;

    return (
      <Container className="form-first-post-container">
        <h1> Confirm Your Info</h1>
        <ListGroup>
          <ListGroupItem>Username: {username}</ListGroupItem>
          <ListGroupItem>Password: {password}</ListGroupItem>
          <ListGroupItem>Email: {email} </ListGroupItem>
        </ListGroup>
        <Button onClick={this.continue}>Confirm and continue</Button>
        <Button theme="secondary" className="back" onClick={this.back}>
          Back
        </Button>
      </Container>
    );
  }
}

export default Confirm;
