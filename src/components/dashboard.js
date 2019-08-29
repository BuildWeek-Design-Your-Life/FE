import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "shards-react";
import "../App.css";

import ActivitiesList from "./activities/ActivitiesList";
import ReflectionsList from "./relfections/ReflectionsList";

export default function Dashboard() {
  const [inputs, setInputs] = useState([]);

  return (
    <>
      <ActivitiesList />
      <ReflectionsList />
      <Container className="dashboard-buttons">
        <Row>
          <Col>
            <Link to={"/add-activity"}>
              <Button className="add-activity" block rounded theme="primary">
                Add Activity
              </Button>
            </Link>
          </Col>
          <Col lg="6">
            <Link to={"/add-reflection"}>
              <Button
                className="add-reflection"
                block
                rounded
                theme="secondary"
              >
                Add Reflection
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
