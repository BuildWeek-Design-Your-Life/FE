import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../Utils/axiosWithAuth";
import {
  FormSelect,
  Button,
  Container,
  Form,
  FormInput,
  FormTextarea,
  FormGroup
} from "shards-react";

const ReflectionUpdateForm = props => {
  console.log(props);
  const [updateReflection, setupdateReflection] = useState({
    summary: "",
    insights: "",
    trends: ""
  });

  const handleChange = e =>
    setupdateReflection({
      ...updateReflection,
      [e.target.name]: e.target.value
    });

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(
        `https://design-bw.herokuapp.com/api/reflect/${props.match.params.id}`,
        updateReflection
      )
      .then(res => {
        console.log("put req", res);
        props.history.push("/reflections");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Container className="update-form-container">
      <Form>
        <FormGroup>
          <label htmlFor="#username">
            <h1>Update Reflection</h1>
          </label>
          <FormTextarea
            className="summary-form"
            type="text"
            name="summary"
            placeholder="summary"
            value={updateReflection.summary}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#username">
            <h1>Insights</h1>
          </label>
          <FormTextarea
            className="summary-form"
            type="text"
            name="insights"
            placeholder="insights"
            value={updateReflection.insights}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#username">
            <h1>Trend</h1>
          </label>
          <FormTextarea
            className="summary-form"
            type="text"
            name="trends"
            placeholder="trends"
            value={updateReflection.trends}
            onChange={handleChange}
          />
        </FormGroup>

        <Button block squared onClick={handleSubmit}>
          Update Form
        </Button>
      </Form>
    </Container>
  );
};

export default ReflectionUpdateForm;
