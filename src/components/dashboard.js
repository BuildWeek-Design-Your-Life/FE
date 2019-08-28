import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "shards-react";
import axios from "axios";

import ActivitiesList from "./activities/ActivitiesList";
import ReflectionsList from "./relfections/ReflectionsList";

export default function Dashboard () {
  const [inputs, setInputs] = useState([]);

  return (
    <>
      <ActivitiesList />
      <ReflectionsList />
      <Link to={'/add-activity'}>
        <Button block outline rounded theme="success">
          Add Activity
        </Button>
      </Link>
    </>
  )
