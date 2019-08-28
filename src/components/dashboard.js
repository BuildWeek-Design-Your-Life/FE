import React, { Component } from "react";
import axios from "axios";
import { Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button, 
  Container } from "shards-react";
import Menu from "../components/menu";
import "../index.css";
import shards from "shards-react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }

  componentDidMount() {
    axios
      .get("https://design-bw.herokuapp.com/api/activity")

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <>
        <Container className="DashboardContainer">
          <h1>Dashboard</h1>
          {/* This section is designed to pull all of the material from the activities section of the database and show it here. */}
        <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Activities</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
        <CardFooter>Good Job!</CardFooter>
      </Card>
      <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Reflection</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
        <CardFooter>Thanks for Sharing!</CardFooter>
      </Card>
        </Container>
      </>
    );
  }
}
