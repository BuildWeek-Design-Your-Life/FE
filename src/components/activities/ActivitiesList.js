import React, { useState, useEffect } from "react";
// import axios from "axios";
import ActivityCard from "./ActivityCard";
import { axiosWithAuth }  from "../../Utils/axiosWithAuth";

export default function ActivitiesList() {
    const [activitiesArray, setActivities] = useState([]);

    const getActivities = () => {
        return axiosWithAuth()
            .get("https://design-bw.herokuapp.com/api/activity")
            .then(res => {
                setActivities(res.data);
        })
            .catch(err => {
                console.log('This is bad', err.response);
        }) 
    }

    useEffect(() => {
        getActivities();
    }, []) 
    
    return (
        <div className="activities-list grid-view">
            {activitiesArray.map(active => 
                <ActivityCard key = {active.id} {...activitiesArray} active={active} />
            )}
        </div>
    )
}