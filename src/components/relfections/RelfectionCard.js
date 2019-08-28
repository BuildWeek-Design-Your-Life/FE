import React from "react";
import axiosWithAuth from "../../Utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { Card, CardBody, Container, Col, Button } from "shards-react";

import "../../App.css";

export default function ReflectionCard(props) {

  const deleteReflect = (e) => {
    e.preventDefault();
    console.log('Delete Reflection');
    axiosWithAuth() 
    .delete(`https://design-bw.herokuapp.com/api/reflect/${props.reflect.id}`)
    .then(res => console.log(res.data))
  }


  return (
    <Container className="card-container">
    <Card className="card">
        <CardBody className="card-body">
            <p>Summary: {props.reflect.summary}</p>
            <p>Insights: {props.reflect.insights}</p>
            <p>Trends: {props.reflect.trends}</p>
        </CardBody>
        <Col md="12">
            <Link className="delete" onClick={deleteReflect}>
              <Button block outline rounded theme="danger">
                Delete Here
              </Button>
            </Link>
          </Col>
    </Card>
</Container>
  );
}
