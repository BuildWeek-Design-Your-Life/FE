import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_comfirmation: "",
      registrationErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("handle change", event);
  }
  handleSubmit(event) {
    console.log("Submitted");
    event.preventDefault();
  }

  render() {
    return <div></div>;
  }
}
