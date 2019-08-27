import React, { useState, useEffect } from "react";
// import axios from "axios";
import ActivityCard from "./ActivityCard";
import { axiosWithAuth }  from "../../Utils/axiosWithAuth";

export default function ActivitiesList() {
    const [activitiesArray, setActivities] = useState([]);

    const getActivities = () => {
        axiosWithAuth()
            .get('https://design-bw.herokuapp.com/api/activity/')
            .then(response => {
                console.log(response);
                // const activities = response.data;
                // setActivities(response);
            })
            .catch(err => {
                console.log(err.response);
            }) 
    }

    useEffect(() => {
        getActivities();
    }, []) 
    
    return (
        <div className="activities-list grid-view">
            {/* { activitiesArray.map(activity => <ActivityCard activity={activity} /> ) } */ }
            Hi
        </div>
    )
}