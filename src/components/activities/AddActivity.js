import React, { useState } from "react";
import {
  FormSelect,
  Button,
  Container,
  Form,
  FormInput,
  FormTextarea,
  FormGroup
} from "shards-react";
import axiosWithAuth from "../../Utils/axiosWithAuth";

export default function AddActivity() {
  const [activity, setActivity] = useState({});
  const id = localStorage.getItem("id");

  const handleChange = e => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      // Post requests require two arguments = URL + state
      .post(`https://design-bw.herokuapp.com/api/activity/${id}`, activity)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <Container className="update-form-container">
      <Form>
        <FormTextarea
          className="user-input-field"
          type="number"
          name="users_act_id"
          placeholder={id}
        />
        <FormGroup>
          <label htmlFor="#username">
            <h1>Record Your Activity</h1>
          </label>
          <FormTextarea
            className="user-input-field"
            type="text"
            name="activity"
            placeholder="Activity"
            onChange={handleChange}
          />
        </FormGroup>
        <label htmlFor="#username">
          <h1>How Energized Are You?</h1>
        </label>
        <FormGroup>
          <FormSelect
            className="user-input-field"
            type="number"
            name="energize"
            placeholder="How energized?"
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
        </FormGroup>
        <FormGroup>
          <label htmlFor="#username">
            <h1>How Engaged Are You?</h1>
          </label>
          <FormSelect
            className="user-input-field"
            type="number"
            name="engagement"
            placeholder="How engaged?"
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
        </FormGroup>
        <Button block sqaured onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
