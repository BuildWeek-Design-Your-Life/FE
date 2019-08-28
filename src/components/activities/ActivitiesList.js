import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ActivityCard from "./ActivityCard";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";

const ActivitiesList = (props) => {

  const [activitiesArray, setActivities] = useState([]);
  console.log(activitiesArray);
  const getActivities = () => {
    return axiosWithAuth()
      .get(`https://design-bw.herokuapp.com/api/activity`)
      .then(res => {
        console.log('list req', res.data)
        setActivities(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="activities-list">
      {activitiesArray.map(active => (
        <ActivityCard key={active.id} {...activitiesArray} active={active} />
      ))}
    </div>
  );
};

export default ActivitiesList;