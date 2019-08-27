import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Container, 
    Row
  } from "shards-react";

export default function ActivityCard(props) {
  return (
    <Container>
        <Row>
        <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Activity Name</CardHeader>
            <CardBody>
                <p>Energy: </p>
                <p>Engagement: </p>
            </CardBody>
        </Card>

        {/* <h2>{props.activity.activity}</h2> 
                <p>Energy: {props.activity.energize}</p>
                <p>Engagement: {props.activity.engagement}</p> */}
      </Row>
    </Container>
  );
}
