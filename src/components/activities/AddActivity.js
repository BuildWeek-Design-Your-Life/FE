import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import axiosWithAuth from "../../Utils/axiosWithAuth";

export default function AddActivity() {
  const [activity, setActivity] = useState({});

  const handleChange = e => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };
  const id = localStorage.getItem("id");
  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      // Post requests require two arguments = URL + state
      .post(`https://design-bw.herokuapp.com/api/activity/`, activity)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Formik>
        <Form onSubmit={submitForm}>
          <Field
            className="user-input-field"
            type="number"
            name="users_act_id"
            placeholder={id}
            onChange={handleChange}
          />
          <Field
            className="user-input-field"
            type="text"
            name="activity"
            placeholder="Activity"
            onChange={handleChange}
          />
          <Field
            className="user-input-field"
            type="number"
            name="energize"
            placeholder="How energized?"
            onChange={handleChange}
          />
          <Field
            className="user-input-field"
            type="number"
            name="engagement"
            placeholder="How engaged?"
            onChange={handleChange}
          />
          <button className="user-input-button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
