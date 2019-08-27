import React, { Component } from "react";
import { Form } from "shards-react";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";
import Success from "./Success";
export class Userform extends Component {
  state = {
    step: 1,
    username: "",
    password: "",
    email: "",
    activity: "",
    engagement: ""
  };

  // Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { username, password, email, activity, engagement } = this.state;
    const values = { username, password, email, activity, engagement };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <Success
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default Userform;
