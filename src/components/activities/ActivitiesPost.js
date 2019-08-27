import React, { Component } from "react";
import axios from "axios";
import { Container } from "shards-react";

export default class ActivitiesPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: "",
      engagement: "",
      energize: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    const { activity, engagement, energize } = this.state;
    console.log("Submitted");
    event.preventDefault();
    axios
      .post("https://design-bw.herokuapp.com/api/activity", {
        activity: activity,
        engagement: engagement,
        energize: energize
      })
      .then(res => {
        console.log("reg res", res);
      })
      .catch(err => {
        console.log("reg error", err);
      });
  }

  render() {
    return (
      <Container className="activity-post">
        <form onSubmit={this.handleSubmit}>
          <input
            type="activity"
            name="activity"
            placeholder="What did you do today?"
            value={this.state.activity}
            onChange={this.handleChange}
            required
          />

          <input
            type="engagement"
            name="engagement"
            placeholder="How engaged were you?"
            value={this.state.engagement}
            onChange={this.handleChange}
            required
          />
          <input
            type="energize"
            name="energize"
            placeholder="How energized were you about this activity?"
            value={this.state.energize}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> Submit </button>
        </form>
      </Container>
    );
  }
}
