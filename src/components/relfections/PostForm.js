import React, { Component } from "react";
import { Form, Field, Formik } from "formik";
import { Redirect } from "react-router";
import axiosWithAuth from "../../Utils/axiosWithAuth";
const id = localStorage.getItem("id");
class AddReflection extends Component {
  state = {
    newReflection: {
      Summary: "",
      Insights: "",
      Trends: "",
      users_ref_id: `${id}`
    }
  };

  handleChange = e => {
    this.setState({
      newReflection: {
        ...this.state.newReflection,
        [e.target.name]: e.target.value
      }
    });
    // console.log('onchange',this.state)
  };

  onSubmit = e => {
    this.setState({ fireRedirect: true });
    e.preventDefault();
    console.log(this.state.newReflection);
    axiosWithAuth()
      .post(
        `https://design-bw.herokuapp.com/api/reflect`,
        this.state.newReflection
      )
      .then(res => {
        setTimeout(function() {
          window.location.reload();
        }, 1);
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    const { from } = this.props.location.state || "/add-reflection";
    const { fireRedirect } = this.state;
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
              name="Summary"
              placeholder="Summary"
              value={this.state.summary}
              onChange={this.handleChange}
            />
            <Field
              className="user-input-field"
              type="text"
              name="Insights"
              placeholder="Insights"
              value={this.state.insights}
              onChange={this.handleChange}
            />
            <Field
              className="user-input-field"
              type="text"
              name="Trends"
              placeholder="Trends"
              value={this.state.trends}
              onChange={this.handleChange}
            />
            <button
              onSubmit={this.onSubmit}
              className="user-input-button"
              type="submit"
            >
              Submit
            </button>
            {fireRedirect && <Redirect to={from || "/dashboard"} />}
          </Form>
        </Formik>
      </>
    );
  }
}
export default AddReflection;
