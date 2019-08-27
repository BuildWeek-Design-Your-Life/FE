import React from "react";

import { Card, CardHeader, CardBody, Container, Row } from "shards-react";

import "../../App.css";

export default function ActivityCard(props) {
  return (
    <Container className="card-container">
      <Card className="card">
        <CardHeader className="card-header">Activity Name</CardHeader>
        <CardBody className="card-body">
          <p>Energy: </p>
          <p>Engagement: </p>
        </CardBody>
      </Card>
      <Card className="card">
        <CardHeader className="card-header">Activity Name</CardHeader>
        <CardBody className="card-body">
          <p>Energy: </p>
          <p>Engagement: </p>
        </CardBody>
      </Card>
      <Card className="card">
        <CardHeader className="card-header">Activity Name</CardHeader>
        <CardBody className="card-body">
          <p>Energy: </p>
          <p>Engagement: </p>
        </CardBody>
      </Card>
    </Container>
  );
}
