import React from "react";

import { Card, CardBody, Container } from "shards-react";

import "../../App.css";

export default function ReflectionCard(props) {
  return (
    <Container className="card-container">
    <Card className="card">
        <CardBody className="card-body">
            <p>Summary: {props.reflect.summary}</p>
            <p>Insights: {props.reflect.insights}</p>
            <p>Trends: {props.reflect.trends}</p>
        </CardBody>
    </Card>
</Container>
  );
}
