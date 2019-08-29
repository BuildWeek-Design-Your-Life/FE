import React, { Component } from "react";
import { Form, Field, Formik } from "formik";
import axiosWithAuth from "../../Utils/axiosWithAuth";
const id = localStorage.getItem("id");
class AddActivity extends Component {
  state = {
    newActivity: {
      activity: "",
      energize: "",
      engagement: "",
      users_act_id: `${id}`
    }
  };

  handleChange = e => {
    this.setState({
      newActivity: {
        ...this.state.newActivity,
        [e.target.name]: e.target.value
      }
    });
    // console.log('onchange',this.state)
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.newActivity);
    axiosWithAuth()
      .post(
        `https://design-bw.herokuapp.com/api/activity`,
        this.state.newActivity
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <>
        <Formik>
          <Form className="user-input" onSubmit={this.onSubmit}>
            {/* <Field
              className="user-input-field"
              type="text"
              name="id"
              placeholder={id}
              value={id}
              onChange={this.handleChange}
            /> */}
            <Field
              className="user-input-field"
              type="text"
              name="activity"
              placeholder="activity"
              value={this.state.activity}
              onChange={this.handleChange}
            />
            <Field
              className="user-input-field"
              type="text"
              name="energize"
              placeholder="energize"
              value={this.state.energize}
              onChange={this.handleChange}
            />
            <Field
              className="user-input-field"
              type="text"
              name="engagement"
              placeholder="engagement"
              value={this.state.engagement}
              onChange={this.handleChange}
            />
            <button className="user-input-button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </>
    );
  }
}
export default AddActivity;
