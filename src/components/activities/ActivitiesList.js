import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard";

export default function ActivitiesList() {
    const [activitiesArray, setActivities] = useState([]);

    useEffect(() => {
        axios
            .get('https://design-bw.herokuapp.com/api/activity/')
            .then(response => {
                console.log(response);
                const activities = response.data;
                setActivities(activities);
            })
            .catch(err => {
                console.log(err);
            }) 
    }, [activitiesArray])

    return (
        <div className="activities-list grid-view">
            activities.map(activity => <ActivityCard activity={activity} /> )
        </div>
    )
}