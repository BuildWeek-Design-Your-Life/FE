import React, { Component } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Container,
  Button,
  FormTextarea,
  Slider
} from "shards-react";

export class FormFirstPost extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <Container className="form-first-post-container">
        <h1> Let's Create your first activity</h1>
        <Form>
          <FormGroup>
            <label htmlFor="#activity">activity</label>
            <FormInput
              id="#activity"
              placeholder="activity"
              text="text"
              name="activity"
              onChange={handleChange("activity")}
              defaultValue={values.activity}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#engagement">Engagement</label>
            <FormInput
              id="#engagement"
              placeholder="engagement"
              text="text"
              name="engagement"
              onChange={handleChange("engagement")}
              defaultValue={values.engagement}
            />
          </FormGroup>
          <Button onClick={this.continue}>Next Step</Button>
          <Button theme="secondary" className="back" onClick={this.back}>
            Back
          </Button>
        </Form>
      </Container>
    );
  }
}

export default FormFirstPost;
