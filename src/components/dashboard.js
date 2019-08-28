import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container
} from "shards-react";
import Menu from "../components/menu";
import "../index.css";
import shards from "shards-react";
import ActivityCard from "./activities/ActivityCard";
import ReflectionCard from "./relfections/RelfectionCard";

export default class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activity: []
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get("https://design-bw.herokuapp.com/api/activity")

  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }

  // render() {
    return (
        <ActivityCard></ActivityCard>
        <ReflectionCard></ReflectionCard>
    
    
    );
  }
}
