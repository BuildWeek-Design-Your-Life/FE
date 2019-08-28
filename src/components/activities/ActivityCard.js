import React from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../Utils/axiosWithAuth";

import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Row
} from "shards-react";
import "../../App.css";

export default function ActivityCard(props) {
  const deleteActivity = (e) => {
    e.preventDefault();
    console.log('Delete Movie');
    axiosWithAuth() 
    .delete(`https://design-bw.herokuapp.com/api/activity/${props.active.id}`)
    .then(res => console.log(res.data))
  }


  return (
    <Container className="card-container">
      <Card className="card">
        <CardHeader className="card-header">{props.active.activity}</CardHeader>
        <CardBody className="card-body">
          <p>Energy: {props.active.energize}</p>
          <p>Engagement: {props.active.engagement}</p>
        </CardBody>
        <Row className="activity-btns">
          <Col md="6">
            <Link to={`/update-activity/${props.active.id}`}>
              <Button block outline rounded theme="success">
                Update This Activity
              </Button>
            </Link>
          </Col>
          <Col md="6">
            <Link className="delete" onClick={deleteActivity}>
              <Button block outline rounded theme="danger">
                Delete Here
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
