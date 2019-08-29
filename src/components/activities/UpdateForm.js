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
import { Redirect } from "react-router";

const UpdateForm = props => {
  console.log("this is props from Update Form", props);
  const [newActivity, setNewActivity] = useState({
    activity: "",
    engagement: "",
    energize: ""
  });
  const { from } = props.location.state || "/add-activity";
  const { fireRedirect } = newActivity;
  const handleChange = e =>
    setNewActivity({ ...newActivity, [e.target.name]: e.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(
        `https://design-bw.herokuapp.com/api/activity/${props.match.params.id}`,
        newActivity
      )
      .then(res => {
        setTimeout(function() {
          window.location.reload();
        }, 1);
        console.log(res);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Container className="update-form-container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="#username">
            <h1>Update Activity</h1>
          </label>
          <FormTextarea
            className="activity-form"
            type="text"
            name="activity"
            placeholder="activity"
            value={newActivity.activity}
            onChange={handleChange}
          />
        </FormGroup>
        <label htmlFor="#username">
          <h1>How Energized Are You?</h1>
        </label>
        <FormSelect
          className="energize-select"
          type="number"
          name="energize"
          placeholder="energize 1-10"
          value={newActivity.energize}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </FormSelect>
        <label htmlFor="#username">
          <h1>How Engaged Are You?</h1>
        </label>
        <FormSelect
          className="engage-select"
          type="number"
          name="engagement"
          placeholder="engagement 1-10"
          value={newActivity.engagement}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </FormSelect>

        <Button block squared onSubmit={handleSubmit}>
          Update Form
        </Button>
        {fireRedirect && <Redirect to={from} to={"/dashboard"} />}
      </Form>
    </Container>
  );
};

export default UpdateForm;
