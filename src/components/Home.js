import React, { Component } from "react";
import { Container } from "shards-react";

import Login from "../components/login";
const Home = () => {
  return (
    <Container className="home-page">
      You are at the home page, please login below....
      <Login />
    </Container>
  );
};
export default Home;
