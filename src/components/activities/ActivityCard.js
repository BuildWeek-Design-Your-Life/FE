import React from "react";
import { Link } from 'react-router-dom'

import { Card, CardHeader, CardBody, Container,  Button } from "shards-react";
import "../../App.css";

export default function ActivityCard(props) {
  console.log(props)
  return (
    <Container className="card-container">
    <Card className="card">
        <CardHeader className="card-header">{props.active.activity}</CardHeader>
        <CardBody className="card-body">
            <p>Energy: {props.active.energize}</p>
            <p>Engagement: {props.active.engagement}</p> 
        </CardBody>
        <Link to={`/update-activity/${props.active.id}`}>Update This Activity</Link>
    </Card>
</Container>
  );
}
