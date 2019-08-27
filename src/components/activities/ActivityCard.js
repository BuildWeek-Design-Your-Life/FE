import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Container, 
    Row
  } from "shards-react";

  import "../../App.css";

export default function ActivityCard(props) {
  return (
    <Container className="card-container">
        <Card className="card">
            <CardHeader className="card-header">{props.active.activity}</CardHeader>
            <CardBody className="card-body">
                <p>Energy: {props.active.energize}</p>
                <p>Engagement: {props.active.engagement}</p>
            </CardBody>
        </Card>
    </Container>
  );
}
