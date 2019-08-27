import React, { Component } from "react";
import { Container } from "shards-react";
export class Success extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Container className="success-container">
        <h1> Thank you for your submission </h1>
      </Container>
    );
  }
}

export default Success;
