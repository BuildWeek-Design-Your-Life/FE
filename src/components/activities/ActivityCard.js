import React from "react";

import { Container, Row } from "shards-react";

export default function ActivityCard(props) {
  return (
    <Container>
      <Row>
			<h1 className="title">{props.active.id}</h1>
      <p>{props.active.activity}</p>
      <p>{props.active.engagement}</p>
      <p>{props.active.energize}</p>
      </Row>
    </Container>
  );
}
