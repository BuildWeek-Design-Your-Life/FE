import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
// import {Button} from "shards-react";
import "../App.css";

import ActivitiesList from "./activities/ActivitiesList";
import ReflectionsList from "./relfections/ReflectionsList";

export default function Dashboard () {
  const [inputs, setInputs] = useState([]);

  return (
    <>
      <ActivitiesList />
      <ReflectionsList />
      <Link to={'/add-activity'}>
        <button className="add-activity" block outline rounded theme="success">
          Add Activity
        </button>
      </Link>
     <Link to={'/add-reflection'}>
        <button className="add-reflection" block outline rounded theme="success">
          Add Reflection
        </button>
      </Link>
    </>
  )
}
