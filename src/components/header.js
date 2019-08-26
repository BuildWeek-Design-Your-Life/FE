import React from "react";
import { Container } from "shards-react";
import Menu from "./menu";

export default class Header extends React.Component {
  render() {
    return (
      <Container className="header-container">
        <Menu />
      </Container>
    );
  }
}
